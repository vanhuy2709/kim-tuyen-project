import { PartialType } from '@nestjs/mapped-types';
import { CreateDescriptionsDto } from './create-descriptions.dto';

export class UpdateDescriptionsDto extends PartialType(CreateDescriptionsDto) { }
