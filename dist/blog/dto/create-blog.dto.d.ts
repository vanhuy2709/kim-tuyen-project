import mongoose from "mongoose";
export declare class CreateBlogDto {
    title: string;
    description: string;
    idRole: mongoose.Schema.Types.ObjectId;
}
