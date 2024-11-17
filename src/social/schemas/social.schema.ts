import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SocialDocument = HydratedDocument<Social>;

@Schema()
export class Social {

    @Prop()
    title: string;

    @Prop()
    urlImage: string;

    @Prop()
    url: string;

}

export const SocialSchema = SchemaFactory.createForClass(Social);