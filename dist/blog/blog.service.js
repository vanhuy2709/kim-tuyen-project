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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const blog_schema_1 = require("./schemas/blog.schema");
const mongoose_2 = require("mongoose");
const api_query_params_1 = require("api-query-params");
const class_validator_1 = require("class-validator");
let BlogService = class BlogService {
    constructor(blogModel) {
        this.blogModel = blogModel;
    }
    async create(createBlogDto) {
        return await this.blogModel.create(Object.assign({}, createBlogDto));
    }
    async findAll(currentPage, limit, qs) {
        const { filter, population } = (0, api_query_params_1.default)(qs);
        let { sort } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        const offset = (+currentPage - 1) * (+limit);
        const defaultLimit = +limit ? +limit : 10;
        const totalItems = (await this.blogModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        if ((0, class_validator_1.isEmpty)(sort)) {
            sort = "-updatedAt";
        }
        const result = await this.blogModel.find(filter)
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
    async findValue(value) {
        return await this.blogModel.find({
            $or: [
                { title: { $regex: value, $options: 'i' } },
                { description: { $regex: value, $options: 'i' } },
            ]
        });
    }
    async findOne(id) {
        return await this.blogModel.findOne({ _id: id });
    }
    async update(id, updateBlogDto) {
        return await this.blogModel.updateOne(Object.assign({ _id: id }, updateBlogDto));
    }
    remove(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            return `not found contact`;
        return this.blogModel.findOneAndRemove({
            _id: id
        });
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(blog_schema_1.Blog.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map