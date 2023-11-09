import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import mongoose, { Model } from 'mongoose';
import { Brand, BrandDocument } from './schemas/brand.schema';
export declare class BrandService {
    private brandModel;
    constructor(brandModel: Model<BrandDocument>);
    create(createBrandDto: CreateBrandDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Brand> & Brand & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Brand> & Brand & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    findAll(currentPage: number, limit: number, qs: string): Promise<{
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        };
        result: Omit<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Brand> & Brand & {
            _id: mongoose.Types.ObjectId;
        }> & mongoose.Document<unknown, {}, Brand> & Brand & {
            _id: mongoose.Types.ObjectId;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>, never>[];
    }>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Brand> & Brand & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Brand> & Brand & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    findValue(value: string): Promise<(mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Brand> & Brand & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Brand> & Brand & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>)[]>;
    update(id: string, updateBrandDto: UpdateBrandDto): Promise<mongoose.UpdateWriteOpResult>;
    remove(id: string): Promise<mongoose.mongo.DeleteResult | "not found contact">;
}
