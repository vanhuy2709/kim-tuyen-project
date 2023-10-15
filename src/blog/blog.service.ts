import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './schemas/blog.schema';
import mongoose, { Model } from 'mongoose';
import aqp from 'api-query-params';
import { isEmpty } from 'class-validator';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name)
    private blogModel: Model<BlogDocument>,
  ) { }
  async create(createBlogDto: CreateBlogDto) {
    return await this.blogModel.create({
      ...createBlogDto
    });
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, population } = aqp(qs);
    let { sort } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset = (+currentPage - 1) * (+limit);
    const defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.blogModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);
    if (isEmpty(sort)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore: Unreachable code error
      sort = "-updatedAt"
    }
    const result = await this.blogModel.find(filter)
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
  async findValue(value: string) {
    return await this.blogModel.find({
      $or: [
        { title: { $regex: value, $options: 'i' } },
        { description: { $regex: value, $options: 'i' } },
      ]
    })
  }

  async findOne(id: string) {
    return await this.blogModel.findOne({ _id: id })
  }

  async update(id: string, updateBlogDto: UpdateBlogDto) {
    return await this.blogModel.updateOne({
      _id: id, ...updateBlogDto,
    });
  }

  remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id))
      return `not found contact`;
    return this.blogModel.findOneAndRemove({
      _id: id
    })
  }
}
