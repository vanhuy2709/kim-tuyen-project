/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { IUser } from 'src/users/users.interface';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    handleLogin(req: any, response: Response): Promise<{
        access_token: string;
        user: {
            _id: string;
            username: string;
        };
    }>;
    handleRegister(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../users/schemas/user.schema").User> & import("../users/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, import("../users/schemas/user.schema").User> & import("../users/schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getProfile(req: any): any;
    getAccountfromHeader(user: IUser): Promise<{
        user: IUser;
    }>;
    handleRefreshToken(request: Request, response: Response): Promise<{
        access_token: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            username: string;
        };
    }>;
    handleLogout(user: IUser, response: Response): Promise<string>;
}
