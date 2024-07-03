import { Module } from '@nestjs/common';
import { DescriptionsService } from './descriptions.service';
import { DescriptionsController } from './descriptions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Descriptions, DescriptionsSchema } from './schemas/descriptions.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Descriptions.name, schema: DescriptionsSchema }])],
  controllers: [DescriptionsController],
  providers: [DescriptionsService]
})
export class DescriptionsModule { }
