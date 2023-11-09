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
exports.ContactController = void 0;
const common_1 = require("@nestjs/common");
const contact_service_1 = require("./contact.service");
const create_contact_dto_1 = require("./dto/create-contact.dto");
const update_contact_dto_1 = require("./dto/update-contact.dto");
const transform_interceptor_1 = require("../core/transform.interceptor");
const customize_1 = require("../decorator/customize");
let ContactController = class ContactController {
    constructor(contactService) {
        this.contactService = contactService;
    }
    create(createContactDto) {
        return this.contactService.create(createContactDto);
    }
    findAll(currentPage, limit, qs) {
        return this.contactService.findAll(+currentPage, +limit, qs);
    }
    findValue(value) {
        return this.contactService.findValue(value);
    }
    findOne(id) {
        return this.contactService.findOne(id);
    }
    update(id, updateContactDto) {
        return this.contactService.update(id, updateContactDto);
    }
    remove(id) {
        return this.contactService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)(transform_interceptor_1.CreateInterceptor),
    (0, customize_1.ResponseMessage)("Create Contact"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_dto_1.CreateContactDto]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, customize_1.ResponseMessage)("Get all Contact"),
    __param(0, (0, common_1.Query)('current')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("find"),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, customize_1.ResponseMessage)("Get a Contact"),
    __param(0, (0, common_1.Query)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "findValue", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, customize_1.ResponseMessage)("Get a Contact"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, customize_1.ResponseMessage)("Update a Contact"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contact_dto_1.UpdateContactDto]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, customize_1.ResponseMessage)("Delete a Contact"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "remove", null);
ContactController = __decorate([
    (0, common_1.Controller)('contact'),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactController);
exports.ContactController = ContactController;
//# sourceMappingURL=contact.controller.js.map