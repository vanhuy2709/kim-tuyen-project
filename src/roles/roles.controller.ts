import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query, UploadedFiles } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { CreateInterceptor, TransformInterceptor } from 'src/core/transform.interceptor';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/core/multer.config';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }

  @Post()
  @UseInterceptors(CreateInterceptor)
  @ResponseMessage("Create Role")
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'thumb', maxCount: 1 },
    ], multerOptions),
  )
  create(@Body() createRoleDto: CreateRoleDto, @UploadedFiles() uploadImage: { thumb: Express.Multer.File[] }) {
    if (uploadImage.thumb[0] !== undefined) {
      createRoleDto.thumb = uploadImage.thumb[0].filename;
    }
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get all Role")
  @Public()
  findAll(@Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string) {
    return this.rolesService.findAll(+currentPage, +limit, qs);
  }

  @Get(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Role")
  @Public()
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Update a Role")
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'thumb', maxCount: 1 },
    ], multerOptions),

  )
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto, @UploadedFiles() uploadImage: { thumb: Express.Multer.File[] }) {
    if (uploadImage.thumb[0] !== undefined) {
      updateRoleDto.thumb = uploadImage.thumb[0].filename;
    }
    return this.rolesService.update(id, updateRoleDto);
  }

  @Delete(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Delete a Role")
  remove(@Param('id') id: string) {
    return this.rolesService.remove(id);
  }
}
