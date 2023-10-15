import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact, ContactSchema } from './schemas/contact.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }])],
  controllers: [ContactController],
  providers: [ContactService]
})
export class ContactModule { }
