import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DescriptionsDocument = HydratedDocument<Descriptions>;


@Schema()
export class Descriptions {
    @Prop()
    description: string;
    @Prop()
    experience: string;
    @Prop()
    education: string;
}

export const DescriptionsSchema = SchemaFactory.createForClass(Descriptions);