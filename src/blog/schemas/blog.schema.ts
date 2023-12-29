import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema({ timestamps: true })
export class Blog {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    idRole: string;

    @Prop()
    color: string;

    @Prop()
    video: string[];

    @Prop()
    photo: string[];

    @Prop()
    createAt: Date;

    @Prop()
    thumb: string;

}

export const BlogSchema = SchemaFactory.createForClass(Blog);