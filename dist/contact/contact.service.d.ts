import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact, ContactDocument } from './schemas/contact.schema';
import mongoose, { Model } from 'mongoose';
export declare class ContactService {
    private contactModel;
    constructor(contactModel: Model<ContactDocument>);
    create(createContactDto: CreateContactDto): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Contact> & Contact & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Contact> & Contact & {
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
        result: Omit<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Contact> & Contact & {
            _id: mongoose.Types.ObjectId;
        }> & mongoose.Document<unknown, {}, Contact> & Contact & {
            _id: mongoose.Types.ObjectId;
        } & Required<{
            _id: mongoose.Types.ObjectId;
        }>, never>[];
    }>;
    findOne(id: string): Promise<mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Contact> & Contact & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Contact> & Contact & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>>;
    findValue(value: string): Promise<(mongoose.Document<unknown, {}, mongoose.Document<unknown, {}, Contact> & Contact & {
        _id: mongoose.Types.ObjectId;
    }> & mongoose.Document<unknown, {}, Contact> & Contact & {
        _id: mongoose.Types.ObjectId;
    } & Required<{
        _id: mongoose.Types.ObjectId;
    }>)[]>;
    update(id: string, updateContactDto: UpdateContactDto): Promise<mongoose.UpdateWriteOpResult>;
    remove(id: string): Promise<mongoose.mongo.DeleteResult | "not found contact">;
}
