import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query, UploadedFiles, ParseFilePipe, UploadedFile, MaxFileSizeValidator, FileTypeValidator, ParseFilePipeBuilder, HttpStatus } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { CreateInterceptor, TransformInterceptor } from 'src/core/transform.interceptor';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'src/core/multer.config';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'photo', maxCount: 20 },
      { name: 'thumb', maxCount: 1 },
    ], multerOptions),

  )
  @UseInterceptors(CreateInterceptor)
  @ResponseMessage("Create Blog")
  create(@Body() createBlogDto: CreateBlogDto, @UploadedFiles() uploadImage: { photos: Express.Multer.File[], thumb: Express.Multer.File[] }) {

    if (uploadImage.photos !== undefined && uploadImage.thumb !== undefined) {
      let uploadPhotos: string[] = [];
      let uploadThumb: string = uploadImage.thumb[0].filename;
      for (let index = 0; index < uploadImage.photos.length; index++) {
        uploadPhotos.push(uploadImage.photos[index].filename)
      }
      createBlogDto.photo = uploadPhotos
      createBlogDto.thumb = uploadThumb
    }
    return this.blogService.create(createBlogDto);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get all Blog")
  @Public()
  findAll(@Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string) {
    return this.blogService.findAll(+currentPage, +limit, qs);
  }

  @Get("find")
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Blog")
  @Public()
  findValue(@Query('value') value: string) {
    return this.blogService.findValue(value);
  }

  @Get("find-all")
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get full featured")
  @Public()
  findAllFeatured() {
    return this.blogService.findAllFeatured();
  }

  @Get(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Blog")
  @Public()
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Update a Blog")
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'photos', maxCount: 20 },
      { name: 'thumb', maxCount: 1 },
    ], multerOptions),
  )
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto, @UploadedFiles() uploadImage: { photos: Express.Multer.File[], thumb: Express.Multer.File[] }) {
    if (uploadImage.photos !== undefined) {
      let uploadPhotos: string[] = [];
      for (let index = 0; index < uploadImage.photos.length; index++) {
        uploadPhotos.push(uploadImage.photos[index].filename)
      }
      updateBlogDto.photo = uploadPhotos
    }
    if (uploadImage.thumb !== undefined) {
      let uploadThumb: string = uploadImage.thumb[0].filename;
      updateBlogDto.thumb = uploadThumb
    }

    return this.blogService.update(id, updateBlogDto);
  }

  @Delete(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Delete a Blog")
  remove(@Param('id') id: string) {
    return this.blogService.remove(id);
  }

}
