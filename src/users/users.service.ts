import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) { }

  getHashPassword = async (password: string) => {

    const salt = await genSaltSync(10);
    const hash = await hashSync(password, salt);

    return hash;
  }

  async create(createUserDto: CreateUserDto) {

    const hashPassword = await this.getHashPassword(createUserDto.password);

    const user = await this.userModel.create({
      username: createUserDto.username,
      password: hashPassword,
    })

    return user;
  }

  async changePassword(username: string, newPassword: string) {
    const hashPassword = await this.getHashPassword(newPassword);

    return await this.userModel.findOneAndUpdate({
      username: username,
      password: hashPassword
    });

  }

  async findOne(id: string) {

    if (!mongoose.Types.ObjectId.isValid(id))
      throw new BadRequestException(`Not found user`);

    return await this.userModel.findOne({
      _id: id
    }).select("-password")

  }

  findOneByUsername(username: string) {

    return this.userModel.findOne({
      username: username
    })

  }

  isValidPassword(password: string, hash: string) {

    return compareSync(password, hash);

  }

  updateRefresh_Token = async (id, refreshToken) => {

    return await this.userModel.findByIdAndUpdate(id, {
      refreshToken: refreshToken
    })

  }
  findUserbyToken = async (refresh_token: string) => {

    return await this.userModel.findOne({
      refreshToken: refresh_token
    })

  }
}
