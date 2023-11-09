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
exports.BrandController = void 0;
const common_1 = require("@nestjs/common");
const brand_service_1 = require("./brand.service");
const create_brand_dto_1 = require("./dto/create-brand.dto");
const update_brand_dto_1 = require("./dto/update-brand.dto");
const customize_1 = require("../decorator/customize");
const transform_interceptor_1 = require("../core/transform.interceptor");
let BrandController = class BrandController {
    constructor(brandService) {
        this.brandService = brandService;
    }
    create(createBrandDto) {
        return this.brandService.create(createBrandDto);
    }
    findAll(currentPage, limit, qs) {
        return this.brandService.findAll(+currentPage, +limit, qs);
    }
    findValue(value) {
        return this.brandService.findValue(value);
    }
    findOne(id) {
        return this.brandService.findOne(id);
    }
    update(id, updateBrandDto) {
        return this.brandService.update(id, updateBrandDto);
    }
    remove(id) {
        return this.brandService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(transform_interceptor_1.CreateInterceptor),
    (0, customize_1.ResponseMessage)("Create Brand"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_brand_dto_1.CreateBrandDto]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, customize_1.ResponseMessage)("Get all Brand"),
    __param(0, (0, common_1.Query)('current')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("find"),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, customize_1.ResponseMessage)("Get a Brand"),
    __param(0, (0, common_1.Query)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "findValue", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, customize_1.ResponseMessage)("Get a Brand"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, customize_1.ResponseMessage)("Update a Brand"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_brand_dto_1.UpdateBrandDto]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, customize_1.ResponseMessage)("Delete a Brand"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandController.prototype, "remove", null);
BrandController = __decorate([
    (0, common_1.Controller)('brand'),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandController);
exports.BrandController = BrandController;
//# sourceMappingURL=brand.controller.js.map