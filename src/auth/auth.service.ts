import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/users.interface';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) { }

    //username/ pass là 2 tham số thư viện passport nó ném về
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);
        if (user) {
            const isValid = this.usersService.isValidPassword(pass, user.password);
            if (isValid) {
                return user
            } else {
                return null;
            }
        }
    }

    async login(user: IUser, response: Response) {
        const { _id, username } = user;
        const payload = {
            sub: "token login",
            iss: "from server",
            _id,
            username,
        };
        const refresh_token = this.getRefresh_token(payload)
        await this.usersService.updateRefresh_Token(_id, refresh_token)
        response.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            maxAge: 36000
        })
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                _id,
                username,
            },
        };
    }

    async register(createUserDto: CreateUserDto) {
        const user = await this.usersService.create({
            username: createUserDto.username,
            password: createUserDto.password,
        })
        return user;
    }

    getRefresh_token = (payload) => {
        return this.jwtService.sign(payload, {
            secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
            expiresIn: this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRED')
        })
    }
    processNewToken = async (refresh_Token: string, response: Response) => {
        try {
            this.jwtService.verify(refresh_Token, {
                secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET')
            })
            const user = await this.usersService.findUserbyToken(refresh_Token)
            const { _id, username } = user;
            const payload = {
                sub: "token login",
                iss: "from server",
                _id,
                username,

            };
            const refresh_token = this.getRefresh_token(payload)
            await this.usersService.updateRefresh_Token(_id, refresh_token)
            response.clearCookie("refresh_token")
            response.cookie('refresh_token', refresh_token, {
                httpOnly: true,
                maxAge: 36000
            })
            return {
                access_token: this.jwtService.sign(payload),
                user: {
                    _id,
                    username,
                }
            };
        } catch (error) {
            throw new BadRequestException("Refresh token không hợp lệ . Vui lòng đăng nhập lại")
        }
    }

    logout = async (user: IUser, response: Response) => {
        this.usersService.updateRefresh_Token(user._id, "")
        response.clearCookie("refresh_token")
        return "Ok"
    }
}
