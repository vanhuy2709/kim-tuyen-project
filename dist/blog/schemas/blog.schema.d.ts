import mongoose, { HydratedDocument } from 'mongoose';
export type BlogDocument = HydratedDocument<Blog>;
export declare class Blog {
    title: string;
    description: string;
    idRole: mongoose.Schema.Types.ObjectId;
    photo: string[];
    createAt: Date;
}
export declare const BlogSchema: mongoose.Schema<Blog, mongoose.Model<Blog, any, any, any, mongoose.Document<unknown, any, Blog> & Blog & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Blog, mongoose.Document<unknown, {}, mongoose.FlatRecord<Blog>> & mongoose.FlatRecord<Blog> & {
    _id: mongoose.Types.ObjectId;
}>;
