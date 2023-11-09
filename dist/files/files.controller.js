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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const files_service_1 = require("./files.service");
const update_file_dto_1 = require("./dto/update-file.dto");
const platform_express_1 = require("@nestjs/platform-express");
const customize_1 = require("../decorator/customize");
const transform_interceptor_1 = require("../core/transform.interceptor");
let FilesController = class FilesController {
    constructor(filesService) {
        this.filesService = filesService;
    }
    uploadFile(file) {
        return file.filename;
    }
    findAll() {
        return this.filesService.findAll();
    }
    findOne(id) {
        return this.filesService.findOne(+id);
    }
    update(id, updateFileDto) {
        return this.filesService.update(+id, updateFileDto);
    }
    remove(id) {
        return this.filesService.remove(+id);
    }
};
__decorate([
    (0, customize_1.Public)(),
    (0, common_1.Post)('upload'),
    (0, customize_1.ResponseMessage)("Upload file"),
    (0, common_1.UseInterceptors)(transform_interceptor_1.TransformInterceptor),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('fileUpload')),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipeBuilder()
        .addFileTypeValidator({
        fileType: /(jpg|jpeg|png|txt|text\/plain|pdf)$/,
    })
        .addMaxSizeValidator({
        maxSize: 1000 * 1102
    })
        .build({
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_file_dto_1.UpdateFileDto]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesController.prototype, "remove", null);
FilesController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map