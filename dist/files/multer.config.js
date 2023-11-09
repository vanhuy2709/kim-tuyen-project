"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterConfigService = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const path_1 = require("path");
const path = require("path");
const fs = require("fs");
let MulterConfigService = class MulterConfigService {
    constructor() {
        this.getRootPath = () => {
            return process.cwd();
        };
    }
    ensureExists(targetDirectory) {
        fs.mkdir(targetDirectory, { recursive: true }, (error) => {
            if (!error) {
                return;
            }
            switch (error.code) {
                case 'EEXIST':
                    break;
                case 'ENOTDIR':
                    break;
                default:
                    console.error(error);
                    break;
            }
        });
    }
    createMulterOptions() {
        return {
            storage: (0, multer_1.diskStorage)({
                destination: (req, file, cb) => {
                    var _a, _b;
                    const folder = (_b = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.folder_type) !== null && _b !== void 0 ? _b : "default";
                    this.ensureExists(`public/images/${folder}`);
                    cb(null, (0, path_1.join)(this.getRootPath(), `public/images/${folder}`));
                },
                filename: (req, file, cb) => {
                    const extName = path.extname(file.originalname);
                    const baseName = path.basename(file.originalname, extName);
                    const finalName = `${baseName}-${Date.now()}${extName}`;
                    cb(null, finalName);
                }
            })
        };
    }
};
MulterConfigService = __decorate([
    (0, common_1.Injectable)()
], MulterConfigService);
exports.MulterConfigService = MulterConfigService;
//# sourceMappingURL=multer.config.js.map