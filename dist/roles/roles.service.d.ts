import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import mongoose, { Model } from 'mongoose';
import { Role, RoleDocument } from './schemas/role.schema';
export declare class RolesService {
    private roleModel;
    constructor(roleModel: Model<RoleDocument>);
    create(createRoleDto: CreateRoleDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Role> & Role & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Role> & Role & {
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
        result: Omit<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Role> & Role & {
            _id: mongoose.Types.ObjectId;
        }> & mongoose.Document<unknown, {}, Role> & Role & {
            _id: mongoose.Types.ObjectId;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>, never>[];
    }>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Role> & Role & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Role> & Role & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<mongoose.UpdateWriteOpResult>;
    remove(id: string): Promise<(mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Role> & Role & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Role> & Role & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>) | "not found role">;
}
