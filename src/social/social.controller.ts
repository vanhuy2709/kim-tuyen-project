import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query, UploadedFiles } from '@nestjs/common';
import { SocialService } from './social.service';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { CreateInterceptor, TransformInterceptor } from 'src/core/transform.interceptor';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/core/multer.config';

@Controller('social')
export class SocialController {
  constructor(private readonly socialService: SocialService) { }

  @Post()
  @UseInterceptors(CreateInterceptor)
  @ResponseMessage("Create Social")
  @Public()
  create(@Body() createSocialDto: CreateSocialDto) {
    return this.socialService.create(createSocialDto);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get all Social")
  @Public()
  findAll(@Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string) {
    return this.socialService.findAll(+currentPage, +limit, qs);
  }

  @Get("find")
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Social")
  @Public()
  findValue(@Query('value') value: string) {
    return this.socialService.findValue(value);
  }

  @Get(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Social")
  @Public()
  findOne(@Param('id') id: string) {
    return this.socialService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Update a Social")
  update(@Param('id') id: string, @Body() updateSocialDto: UpdateSocialDto) {
    return this.socialService.update(id, updateSocialDto);
  }

  @Delete(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Delete a Social")
  remove(@Param('id') id: string) {
    return this.socialService.remove(id);
  }
}
