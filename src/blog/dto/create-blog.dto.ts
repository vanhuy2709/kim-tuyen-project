import { IsNotEmpty } from "class-validator"
import mongoose from "mongoose"

export class CreateBlogDto {

    @IsNotEmpty({ message: "Title không được để trống" })
    title: string

    description: string

    @IsNotEmpty({ message: "IdRole không được để trống" })
    idRole: mongoose.Schema.Types.ObjectId

    color: string;

    video: string[];

    photo: string[];

    createAt: Date;

    thumb: string;
}
