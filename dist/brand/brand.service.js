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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const brand_schema_1 = require("./schemas/brand.schema");
const api_query_params_1 = require("api-query-params");
const class_validator_1 = require("class-validator");
let BrandService = class BrandService {
    constructor(brandModel) {
        this.brandModel = brandModel;
    }
    async create(createBrandDto) {
        return await this.brandModel.create(Object.assign({}, createBrandDto));
    }
    async findAll(currentPage, limit, qs) {
        const { filter, population } = (0, api_query_params_1.default)(qs);
        let { sort } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        const offset = (+currentPage - 1) * (+limit);
        const defaultLimit = +limit ? +limit : 10;
        const totalItems = (await this.brandModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        if ((0, class_validator_1.isEmpty)(sort)) {
            sort = "-updatedAt";
        }
        const result = await this.brandModel.find(filter)
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
        return await this.brandModel.findOne({ _id: id });
    }
    async findValue(value) {
        return await this.brandModel.find({
            $or: [
                { title: { $regex: value, $options: 'i' } },
                { urlImage: { $regex: value, $options: 'i' } },
            ]
        });
    }
    async update(id, updateBrandDto) {
        return await this.brandModel.updateOne(Object.assign({ _id: id }, updateBrandDto));
    }
    async remove(id) {
        if (!mongoose_1.default.Types.ObjectId.isValid(id))
            return `not found contact`;
        return await this.brandModel.deleteOne({
            _id: id
        });
    }
};
BrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(brand_schema_1.Brand.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BrandService);
exports.BrandService = BrandService;
//# sourceMappingURL=brand.service.js.map