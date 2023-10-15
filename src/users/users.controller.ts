import { Controller, Get, Post, Body, Patch, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Public, ResponseMessage, UserDecorate } from 'src/decorator/customize';
import { CreateInterceptor, TransformInterceptor } from 'src/core/transform.interceptor';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Public()
  @Post()
  @ResponseMessage("Create a new user")
  @UseInterceptors(CreateInterceptor)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }


  @Get(':id')
  @ResponseMessage("Get a user")
  @UseInterceptors(TransformInterceptor)
  @Public()
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch()
  @ResponseMessage("Update a user")
  @UseInterceptors(TransformInterceptor)
  update(@Body() username: string, @Body() password: string) {
    return this.usersService.changePassword(username, password);
  }


}
