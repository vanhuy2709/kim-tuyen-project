"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const contact_schema_1 = require("./schemas/contact.schema");
const mongoose_2 = require("mongoose");
const class_validator_1 = require("class-validator");
const api_query_params_1 = require("api-query-params");
let ContactService = class ContactService {
    constructor(contactModel) {
        this.contactModel = contactModel;
    }
    async create(createContactDto) {
        return await this.contactModel.create(Object.assign({ status: "Pending" }, createContactDto));
    }
    async findAll(currentPage, limit, qs) {
        const { filter, population } = (0, api_query_params_1.default)(qs);
        let { sort } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        const offset = (+currentPage - 1) * (+limit);
        const defaultLimit = +limit ? +limit : 10;
        const totalItems = (await this.contactModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        if ((0, class_validator_1.isEmpty)(sort)) {
            sort = "-updatedAt";
        }
        const result = await this.contactModel.find(filter)
            .skip(offset)
            .limit(defaultLimit)
            .sort(sort)
            .populate(population)
            .exec();
        return {
            meta: {
                current: currentPage,
                pageSize: limit,
                pages: totalPages,
                total: totalItems
            },
            result
        };
    }
    async findOne(id) {
        return await this.contactModel.findOne({ _id: id });
    }
    async findValue(value) {
        return await this.contactModel.find({
            $or: [
                { name: { $regex: value, $options: 'i' } },
                { phoneNumber: { $regex: value, $options: 'i' } },
                { email: { $regex: value, $options: 'i' } },
                { _id: { $regex: value, $options: 'i' } },
            ]
        });
    }
    async update(id, updateContactDto) {
        return await this.contactModel.updateOne(Object.assign({ _id: id }, updateContactDto));
    }
    async remove(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            return `not found contact`;
        return await this.contactModel.deleteOne({
            _id: id
        });
    }
};
ContactService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(contact_schema_1.Contact.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map