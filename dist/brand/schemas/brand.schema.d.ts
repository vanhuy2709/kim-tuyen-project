import mongoose, { HydratedDocument } from 'mongoose';
export type BrandDocument = HydratedDocument<Brand>;
export declare class Brand {
    title: string;
    urlImage: string[];
}
export declare const BrandSchema: mongoose.Schema<Brand, mongoose.Model<Brand, any, any, any, mongoose.Document<unknown, any, Brand> & Brand & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Brand, mongoose.Document<unknown, {}, mongoose.FlatRecord<Brand>> & mongoose.FlatRecord<Brand> & {
    _id: mongoose.Types.ObjectId;
}>;
