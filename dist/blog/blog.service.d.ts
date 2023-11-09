import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog, BlogDocument } from './schemas/blog.schema';
import mongoose, { Model } from 'mongoose';
export declare class BlogService {
    private blogModel;
    constructor(blogModel: Model<BlogDocument>);
    create(createBlogDto: CreateBlogDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Blog> & Blog & {
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
        result: Omit<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Blog> & Blog & {
            _id: mongoose.Types.ObjectId;
        }> & mongoose.Document<unknown, {}, Blog> & Blog & {
            _id: mongoose.Types.ObjectId;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>, never>[];
    }>;
    findValue(value: string): Promise<(mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>)[]>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    update(id: string, updateBlogDto: UpdateBlogDto): Promise<mongoose.UpdateWriteOpResult>;
    remove(id: string): "not found contact" | mongoose.Query<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>, mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>, {}, mongoose.Document<unknown, {}, Blog> & Blog & {
        _id: mongoose.Types.ObjectId;
    }, "findOneAndRemove">;
}
