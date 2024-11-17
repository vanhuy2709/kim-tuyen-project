import { Injectable } from '@nestjs/common';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Social, SocialDocument } from './schemas/social.schema';
import aqp from 'api-query-params';
import { isEmpty } from 'class-validator';

@Injectable()
export class SocialService {
  constructor(
    @InjectModel(Social.name)
    private socialModel: Model<SocialDocument>,
  ) { }
  async create(createSocialDto: CreateSocialDto) {
    return await this.socialModel.create({
      ...createSocialDto
    });
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, population } = aqp(qs);
    let { sort } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset = (+currentPage - 1) * (+limit);
    const defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.socialModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);
    if (isEmpty(sort)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore: Unreachable code error
      sort = "-updatedAt"
    }
    const result = await this.socialModel.find(filter)
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
    return await this.socialModel.findById(id)
  }
  async findValue(value: string) {
    return await this.socialModel.find({
      $or: [
        { title: { $regex: value, $options: 'i' } },
        { urlImage: { $regex: value, $options: 'i' } },
      ]
    })
  }

  async update(id: string, updateSocialDto: UpdateSocialDto) {
    return await this.socialModel.findByIdAndUpdate(id, {
      ...updateSocialDto,
    });
  }

  async remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      return `not found contact`;
    return await this.socialModel.deleteOne({
      _id: id
    })
  }
}
