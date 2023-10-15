import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactDocument = HydratedDocument<Contact>;

@Schema()
export class Contact {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phoneNumber: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    status: string;

}

export const ContactSchema = SchemaFactory.createForClass(Contact);