import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Brand, BrandDocument } from './schemas/brand.schema';
import aqp from 'api-query-params';
import { isEmpty } from 'class-validator';

@Injectable()
export class BrandService {
  constructor(
    @InjectModel(Brand.name)
    private brandModel: Model<BrandDocument>,
  ) { }
  async create(createBrandDto: CreateBrandDto) {
    return await this.brandModel.create({
      ...createBrandDto
    });
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, population } = aqp(qs);
    let { sort } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset = (+currentPage - 1) * (+limit);
    const defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.brandModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);
    if (isEmpty(sort)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore: Unreachable code error
      sort = "-updatedAt"
    }
    const result = await this.brandModel.find(filter)
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
    return await this.brandModel.findOne({ _id: id })
  }
  async findValue(value: string) {
    return await this.brandModel.find({
      $or: [
        { title: { $regex: value, $options: 'i' } },
        { urlImage: { $regex: value, $options: 'i' } },
      ]
    })
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
    return await this.brandModel.updateOne({
      _id: id, ...updateBrandDto,
    });
  }

  async remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      return `not found contact`;
    return await this.brandModel.deleteOne({
      _id: id
    })
  }
}
