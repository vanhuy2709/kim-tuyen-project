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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandSchema = exports.Brand = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Brand = class Brand {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Brand.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Brand.prototype, "urlImage", void 0);
Brand = __decorate([
    (0, mongoose_1.Schema)()
], Brand);
exports.Brand = Brand;
exports.BrandSchema = mongoose_1.SchemaFactory.createForClass(Brand);
//# sourceMappingURL=brand.schema.js.map