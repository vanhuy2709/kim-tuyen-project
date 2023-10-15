import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Contact, ContactDocument } from './schemas/contact.schema';
import mongoose, { Model } from 'mongoose';
import { isEmpty } from 'class-validator';
import aqp from 'api-query-params';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name)
    private contactModel: Model<ContactDocument>,
  ) { }
  async create(createContactDto: CreateContactDto) {
    return await this.contactModel.create({
      status: "Pending",
      ...createContactDto
    });
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, population } = aqp(qs);
    let { sort } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset = (+currentPage - 1) * (+limit);
    const defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.contactModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);
    if (isEmpty(sort)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore: Unreachable code error
      sort = "-updatedAt"
    }
    const result = await this.contactModel.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      .sort(sort)
      .populate(population)
      .exec();
    return {
      meta: {
        current: currentPage, //trang hiện tại
        pageSize: limit, //số lượng bản ghi đã lấy
        pages: totalPages, //tổng số trang với điều kiện query
        total: totalItems // tổng số phần tử (số bản ghi)
      },
      result //kết quả query
    }
  }
  async findOne(id: string) {
    return await this.contactModel.findOne({ _id: id })
  }
  async findValue(value: string) {
    return await this.contactModel.find({
      $or: [
        { name: { $regex: value, $options: 'i' } },
        { phoneNumber: { $regex: value, $options: 'i' } },
        { email: { $regex: value, $options: 'i' } },
        { _id: { $regex: value, $options: 'i' } },
      ]
    })
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    return await this.contactModel.updateOne({
      _id: id, ...updateContactDto,
    });
  }

  async remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      return `not found contact`;
    return await this.contactModel.deleteOne({
      _id: id
    })
  }
}
