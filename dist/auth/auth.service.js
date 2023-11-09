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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.getRefresh_token = (payload) => {
            return this.jwtService.sign(payload, {
                secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET'),
                expiresIn: this.configService.get('JWT_REFRESH_TOKEN_EXPIRED')
            });
        };
        this.processNewToken = async (refresh_Token, response) => {
            try {
                this.jwtService.verify(refresh_Token, {
                    secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET')
                });
                const user = await this.usersService.findUserbyToken(refresh_Token);
                const { _id, username } = user;
                const payload = {
                    sub: "token login",
                    iss: "from server",
                    _id,
                    username,
                };
                const refresh_token = this.getRefresh_token(payload);
                await this.usersService.updateRefresh_Token(_id, refresh_token);
                response.clearCookie("refresh_token");
                response.cookie('refresh_token', refresh_token, {
                    httpOnly: true,
                    maxAge: 36000
                });
                return {
                    access_token: this.jwtService.sign(payload),
                    user: {
                        _id,
                        username,
                    }
                };
            }
            catch (error) {
                throw new common_1.BadRequestException("Refresh token không hợp lệ . Vui lòng đăng nhập lại");
            }
        };
        this.logout = async (user, response) => {
            this.usersService.updateRefresh_Token(user._id, "");
            response.clearCookie("refresh_token");
            return "Ok";
        };
    }
    async validateUser(username, pass) {
        const user = await this.usersService.findOneByUsername(username);
        if (user) {
            const isValid = this.usersService.isValidPassword(pass, user.password);
            if (isValid) {
                return user;
            }
            else {
                return null;
            }
        }
    }
    async login(user, response) {
        const { _id, username } = user;
        const payload = {
            sub: "token login",
            iss: "from server",
            _id,
            username,
        };
        const refresh_token = this.getRefresh_token(payload);
        await this.usersService.updateRefresh_Token(_id, refresh_token);
        response.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            maxAge: 36000
        });
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                _id,
                username,
            },
        };
    }
    async register(createUserDto) {
        const user = await this.usersService.create({
            username: createUserDto.username,
            password: createUserDto.password,
        });
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map