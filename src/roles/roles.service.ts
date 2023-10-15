import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import mongoose, { Model } from 'mongoose';
import { isEmpty } from 'class-validator';
import aqp from 'api-query-params';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './schemas/role.schema';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role.name)
    private roleModel: Model<RoleDocument>
  ) { }
  async create(createRoleDto: CreateRoleDto) {
    const isExistName = await this.roleModel.findOne({
      nameRole: createRoleDto.nameRole
    })
    if (isExistName !== null) {
      throw new BadRequestException(`Đã tồn tại ${createRoleDto.nameRole}`)
    } else {
      return await this.roleModel.create({
        ...createRoleDto
      });
    }
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, population } = aqp(qs);
    let { sort } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset = (+currentPage - 1) * (+limit);
    const defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.roleModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);
    if (isEmpty(sort)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore: Unreachable code error
      sort = "-updatedAt"
    }
    const result = await this.roleModel.find(filter)
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
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Not found permission`);

    return await this.roleModel.findOne({
      _id: id
    })
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const isExistName = await this.roleModel.findOne({
      nameRole: updateRoleDto.nameRole
    })
    if (isExistName?._id.toString() !== id) {
      if (isExistName !== null) {
        throw new BadRequestException(`Đã tồn tại ${updateRoleDto.nameRole}`)
      }
    }
    return await this.roleModel.updateOne({
      _id: id, ...updateRoleDto,

    });
  }
  async remove(id: string) {

    if (!mongoose.Types.ObjectId.isValid(id))
      return `not found role`;

    return this.roleModel.findOneAndRemove({
      _id: id
    })
  }
}
