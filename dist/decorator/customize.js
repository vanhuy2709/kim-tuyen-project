"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMessage = exports.UserDecorate = exports.Public = exports.RESPONSE_MESSAGE = exports.IS_PUBLIC_KEY = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
exports.RESPONSE_MESSAGE = 'response_message';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;
exports.UserDecorate = (0, common_2.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
const ResponseMessage = (message) => (0, common_1.SetMetadata)(exports.RESPONSE_MESSAGE, message);
exports.ResponseMessage = ResponseMessage;
//# sourceMappingURL=customize.js.map