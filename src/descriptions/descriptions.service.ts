import { Injectable } from '@nestjs/common';
import { CreateDescriptionsDto } from './dto/create-descriptions.dto';
import { UpdateDescriptionsDto } from './dto/update-descriptions.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Descriptions, DescriptionsDocument } from './schemas/descriptions.schema';
import mongoose, { Model } from 'mongoose';
import aqp from 'api-query-params';
import { isEmpty } from 'class-validator';

@Injectable()
export class DescriptionsService {
  constructor(
    @InjectModel(Descriptions.name)
    private descriptionsModel: Model<DescriptionsDocument>,
  ) { }
  async create(createDescriptionsDto: CreateDescriptionsDto) {
    return await this.descriptionsModel.create({
      ...createDescriptionsDto
    });
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, population } = aqp(qs);
    let { sort } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset = (+currentPage - 1) * (+limit);
    const defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.descriptionsModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);
    if (isEmpty(sort)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore: Unreachable code error
      sort = "-updatedAt"
    }
    const result = await this.descriptionsModel.find(filter)
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
    return await this.descriptionsModel.findById(id)
  }

  async update(id: string, updateDescriptionsDto: UpdateDescriptionsDto) {
    return await this.descriptionsModel.findByIdAndUpdate(id, {
      ...updateDescriptionsDto,
    });
  }

  remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      return `not found contact`;
    return this.descriptionsModel.findOneAndRemove({
      _id: id
    })
  }
}
