import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ResponseMessage } from 'src/decorator/customize';
import { CreateInterceptor, TransformInterceptor } from 'src/core/transform.interceptor';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) { }

  @Post()
  @UseInterceptors(CreateInterceptor)
  @ResponseMessage("Create Brand")
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.create(createBrandDto);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get all Brand")
  findAll(@Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string) {
    return this.brandService.findAll(+currentPage, +limit, qs);
  }

  @Get("find")
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Brand")
  findValue(@Query('value') value: string) {
    return this.brandService.findValue(value);
  }

  @Get(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Brand")
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Update a Brand")
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandService.update(id, updateBrandDto);
  }

  @Delete(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Delete a Brand")
  remove(@Param('id') id: string) {
    return this.brandService.remove(id);
  }
}
