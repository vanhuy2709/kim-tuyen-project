import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query } from '@nestjs/common';
import { DescriptionsService } from './descriptions.service';
import { CreateDescriptionsDto } from './dto/create-descriptions.dto';
import { UpdateDescriptionsDto } from './dto/update-descriptions.dto';
import { CreateInterceptor, TransformInterceptor } from 'src/core/transform.interceptor';
import { Public, ResponseMessage } from 'src/decorator/customize';


@Controller('descriptions')
export class DescriptionsController {
  constructor(private readonly descriptionsService: DescriptionsService) { }

  @Post()
  @UseInterceptors(CreateInterceptor)
  @ResponseMessage("Create Descriptions")
  create(@Body() createDescriptionsDto: CreateDescriptionsDto) {
    return this.descriptionsService.create(createDescriptionsDto);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get all Descriptions")
  @Public()
  findAll(@Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string) {
    return this.descriptionsService.findAll(+currentPage, +limit, qs);
  }

  @Get(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Descriptions")
  @Public()
  findOne(@Param('id') id: string) {
    return this.descriptionsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Update a Descriptions")
  update(@Param('id') id: string, @Body() updateDescriptionsDto: UpdateDescriptionsDto) {

    return this.descriptionsService.update(id, updateDescriptionsDto);
  }

  @Delete(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Delete a Descriptions")
  remove(@Param('id') id: string) {
    return this.descriptionsService.remove(id);
  }

}
