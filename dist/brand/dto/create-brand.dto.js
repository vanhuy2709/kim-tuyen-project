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
exports.CreateBrandDto = void 0;
const class_validator_1 = require("class-validator");
class CreateBrandDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Title không được để trống" }),
    __metadata("design:type", String)
], CreateBrandDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "UrlImage không được để trống" }),
    (0, class_validator_1.IsArray)({ message: "Phải là Array" }),
    (0, class_validator_1.IsString)({ each: true, message: "Không đúng định dạng" }),
    __metadata("design:type", Array)
], CreateBrandDto.prototype, "urlImage", void 0);
exports.CreateBrandDto = CreateBrandDto;
//# sourceMappingURL=create-brand.dto.js.map