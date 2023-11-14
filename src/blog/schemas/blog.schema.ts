import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema({ timestamps: true })
export class Blog {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    idRole: string;

    @Prop()
    photo: string[];

    @Prop()
    createAt: Date;

}

export const BlogSchema = SchemaFactory.createForClass(Blog);