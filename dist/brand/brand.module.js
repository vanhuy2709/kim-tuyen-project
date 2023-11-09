"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandModule = void 0;
const common_1 = require("@nestjs/common");
const brand_service_1 = require("./brand.service");
const brand_controller_1 = require("./brand.controller");
const mongoose_1 = require("@nestjs/mongoose");
const brand_schema_1 = require("./schemas/brand.schema");
let BrandModule = class BrandModule {
};
BrandModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: brand_schema_1.Brand.name, schema: brand_schema_1.BrandSchema }])],
        controllers: [brand_controller_1.BrandController],
        providers: [brand_service_1.BrandService]
    })
], BrandModule);
exports.BrandModule = BrandModule;
//# sourceMappingURL=brand.module.js.map