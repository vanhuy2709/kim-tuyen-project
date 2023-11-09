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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const class_validator_1 = require("class-validator");
const api_query_params_1 = require("api-query-params");
const mongoose_2 = require("@nestjs/mongoose");
const role_schema_1 = require("./schemas/role.schema");
let RolesService = class RolesService {
    constructor(roleModel) {
        this.roleModel = roleModel;
    }
    async create(createRoleDto) {
        const isExistName = await this.roleModel.findOne({
            nameRole: createRoleDto.nameRole
        });
        if (isExistName !== null) {
            throw new common_1.BadRequestException(`Đã tồn tại ${createRoleDto.nameRole}`);
        }
        else {
            return await this.roleModel.create(Object.assign({}, createRoleDto));
        }
    }
    async findAll(currentPage, limit, qs) {
        const { filter, population } = (0, api_query_params_1.default)(qs);
        let { sort } = (0, api_query_params_1.default)(qs);
        delete filter.current;
        delete filter.pageSize;
        const offset = (+currentPage - 1) * (+limit);
        const defaultLimit = +limit ? +limit : 10;
        const totalItems = (await this.roleModel.find(filter)).length;
        const totalPages = Math.ceil(totalItems / defaultLimit);
        if ((0, class_validator_1.isEmpty)(sort)) {
            sort = "-updatedAt";
        }
        const result = await this.roleModel.find(filter)
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
        if (!mongoose_1.default.Types.ObjectId.isValid(id))
            throw new common_1.BadRequestException(`Not found permission`);
        return await this.roleModel.findOne({
            _id: id
        });
    }
    async update(id, updateRoleDto) {
        const isExistName = await this.roleModel.findOne({
            nameRole: updateRoleDto.nameRole
        });
        if ((isExistName === null || isExistName === void 0 ? void 0 : isExistName._id.toString()) !== id) {
            if (isExistName !== null) {
                throw new common_1.BadRequestException(`Đã tồn tại ${updateRoleDto.nameRole}`);
            }
        }
        return await this.roleModel.updateOne(Object.assign({ _id: id }, updateRoleDto));
    }
    async remove(id) {
        if (!mongoose_1.default.Types.ObjectId.isValid(id))
            return `not found role`;
        return this.roleModel.findOneAndRemove({
            _id: id
        });
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(role_schema_1.Role.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map