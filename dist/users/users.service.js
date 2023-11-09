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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const mongoose_2 = require("mongoose");
const bcryptjs_1 = require("bcryptjs");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
        this.getHashPassword = async (password) => {
            const salt = await (0, bcryptjs_1.genSaltSync)(10);
            const hash = await (0, bcryptjs_1.hashSync)(password, salt);
            return hash;
        };
        this.updateRefresh_Token = async (id, refreshToken) => {
            return await this.userModel.findByIdAndUpdate(id, {
                refreshToken: refreshToken
            });
        };
        this.findUserbyToken = async (refresh_token) => {
            return await this.userModel.findOne({
                refreshToken: refresh_token
            });
        };
    }
    async create(createUserDto) {
        const hashPassword = await this.getHashPassword(createUserDto.password);
        const user = await this.userModel.create({
            username: createUserDto.username,
            password: hashPassword,
        });
        return user;
    }
    async changePassword(username, newPassword) {
        const hashPassword = await this.getHashPassword(newPassword);
        return await this.userModel.findOneAndUpdate({
            username: username,
            password: hashPassword
        });
    }
    async findOne(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            throw new common_1.BadRequestException(`Not found user`);
        return await this.userModel.findOne({
            _id: id
        }).select("-password");
    }
    findOneByUsername(username) {
        return this.userModel.findOne({
            username: username
        });
    }
    isValidPassword(password, hash) {
        return (0, bcryptjs_1.compareSync)(password, hash);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map