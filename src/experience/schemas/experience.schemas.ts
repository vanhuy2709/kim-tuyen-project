import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ExperienceDocument = HydratedDocument<Experience>;
@Schema()
export class Experience {
    @Prop()
    description: string;
}
export const ExperienceSchema = SchemaFactory.createForClass(Experience);