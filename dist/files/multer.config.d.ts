import { MulterModuleOptions, MulterOptionsFactory } from "@nestjs/platform-express";
export declare class MulterConfigService implements MulterOptionsFactory {
    getRootPath: () => string;
    ensureExists(targetDirectory: string): void;
    createMulterOptions(): MulterModuleOptions;
}
