"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const reflector = app.get(core_1.Reflector);
    app.useGlobalGuards(new jwt_auth_guard_1.JwtAuthGuard(reflector));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('ejs');
    app.setGlobalPrefix('api');
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: ['1'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        "origin": true,
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        credentials: true
    });
    app.use(cookieParser());
    await app.listen(configService.get('PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map