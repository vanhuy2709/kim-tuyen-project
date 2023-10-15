import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { CreateInterceptor, TransformInterceptor } from 'src/core/transform.interceptor';
import { ResponseMessage } from 'src/decorator/customize';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  @Post()
  @UseInterceptors(CreateInterceptor)
  @ResponseMessage("Create Blog")
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get all Blog")
  findAll(@Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string) {
    return this.blogService.findAll(+currentPage, +limit, qs);
  }

  @Get("find")
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Contact")
  findValue(@Query('value') value: string) {
    return this.blogService.findValue(value);
  }

  @Get(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Role")
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Update a Role")
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(id, updateBlogDto);
  }

  @Delete(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Delete a Role")
  remove(@Param('id') id: string) {
    return this.blogService.remove(id);
  }
}
