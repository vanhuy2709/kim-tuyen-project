import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
export declare class AppController {
    private readonly appService;
    private configService;
    constructor(appService: AppService, configService: ConfigService);
    getHello(): {
        mess: string;
    };
}
