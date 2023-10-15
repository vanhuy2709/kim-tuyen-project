import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { CreateInterceptor, TransformInterceptor } from 'src/core/transform.interceptor';
import { ResponseMessage } from 'src/decorator/customize';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) { }

  @Post()
  @UseInterceptors(CreateInterceptor)
  @ResponseMessage("Create Contact")
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get all Contact")
  findAll(@Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string) {
    return this.contactService.findAll(+currentPage, +limit, qs);
  }

  @Get("find")
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Contact")
  findValue(@Query('value') value: string) {
    return this.contactService.findValue(value);
  }

  @Get(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Get a Contact")
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Update a Contact")
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(id, updateContactDto);
  }

  @Delete(':id')
  @UseInterceptors(TransformInterceptor)
  @ResponseMessage("Delete a Contact")
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
