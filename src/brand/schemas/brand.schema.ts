import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BrandDocument = HydratedDocument<Brand>;

@Schema()
export class Brand {

    @Prop()
    title: string;

    @Prop()
    urlImage: string[];

}

export const BrandSchema = SchemaFactory.createForClass(Brand);