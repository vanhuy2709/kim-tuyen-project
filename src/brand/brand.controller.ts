import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query, UploadedFiles } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { CreateInterceptor, TransformInterceptor } from 'src/core/transform.interceptor';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/core/multer.config';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) { }

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'urlImage', maxCount: 1 },
    ], multerOptions),
  )
  @UseInterceptors(CreateInterceptor)
  @ResponseMessage("Create Brand")
  create(@Body() createBrandDto: CreateBrandDto, @UploadedFiles() uploadImage: { urlImage: Express.Multer.File[] }) {
    if (uploadImage.urlImage[0]) {
      createBrandDto.urlImage = uploadImage.urlImage[0].filename;
    }
    return this.brandService.create(createBrandDto);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get all Brand")
  @Public()
  findAll(@Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string) {
    return this.brandService.findAll(+currentPage, +limit, qs);
  }

  @Get("find")
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Brand")
  @Public()
  findValue(@Query('value') value: string) {
    return this.brandService.findValue(value);
  }

  @Get(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Brand")
  @Public()
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Update a Brand")
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'urlImage', maxCount: 1 },
    ], multerOptions),
  )
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto, @UploadedFiles() uploadImage: { urlImage: Express.Multer.File[] }) {
    if (uploadImage.urlImage[0]) {
      updateBrandDto.urlImage = uploadImage.urlImage[0].filename;
    }
    return this.brandService.update(id, updateBrandDto);
  }

  @Delete(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Delete a Brand")
  remove(@Param('id') id: string) {
    return this.brandService.remove(id);
  }
}
