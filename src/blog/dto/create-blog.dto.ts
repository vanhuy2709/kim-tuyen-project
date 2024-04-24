import { IsNotEmpty } from "class-validator"
import mongoose from "mongoose"

export class CreateBlogDto {

    title: string

    description: string

    @IsNotEmpty({ message: "IdRole không được để trống" })
    idRole: mongoose.Schema.Types.ObjectId

    color: string;

    video: string[];

    @IsNotEmpty({ message: "Photo không được để trống" })
    photo: string[];

    createAt: Date;

    @IsNotEmpty({ message: "Thumb không được để trống" })
    thumb: string;

    isFeatured: boolean
}
