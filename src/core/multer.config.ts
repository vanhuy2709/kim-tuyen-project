import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { MulterModuleOptions, MulterOptionsFactory } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { join } from "path";
import * as path from "path";
import * as fs from 'fs';
import { randomUUID } from "crypto";

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
    getRootPath = () => {
        return process.cwd();
    };
    ensureExists(targetDirectory: string) {
        fs.mkdir(targetDirectory, { recursive: true }, (error) => {
            if (!error) {
                return;
            }
            switch (error.code) {
                case 'EEXIST':
                    // Error:
                    // Requested location already exists, but it's not a directory.
                    break;
                case 'ENOTDIR':
                    // Error:
                    // The parent hierarchy contains a file with the same name as the dir
                    // you're trying to create.
                    break;
                default:
                    // Some other error like permission denied.
                    console.error(error);
                    break;
            }
        });
    }

    createMulterOptions(): MulterModuleOptions {
        return {
            storage: diskStorage({
                destination: (req, file, cb) => {
                    const folder = req?.headers?.folder_type ?? "default";
                    this.ensureExists(`public/images/${folder}`);
                    cb(null, join(this.getRootPath(), `public/images/${folder}`))
                },
                filename: (req, file, cb) => {
                    //get image extension
                    const extName = path.extname(file.originalname);
                    //get image's name (without extension)
                    const baseName = path.basename(file.originalname, extName);
                    const finalName = `${baseName}-${Date.now()}${extName}`
                    cb(null, finalName)
                }
            })
        };
    }
}

export const multerConfig = {
    dest: './public/images',
};

// Multer upload options
export const multerOptions = {
    // Enable file size limits
    limits: {
        fileSize: 10 * 1024 * 1024,
    },
    // Check the mimetypes to allow for upload
    fileFilter: (req: any, file: any, cb: any) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
            cb(null, true);
        } else {
            cb(new HttpException(`Unsupported file type ${path.extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
        }
    },
    // Storage properties
    storage: diskStorage({
        // Destination storage path details
        destination: (req: any, file: any, cb: any) => {
            const uploadPath = multerConfig.dest;
            // Create folder if doesn't exist
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath);
            }
            cb(null, uploadPath);
        },
        // File modification details
        filename: (req: any, file: any, cb: any) => {
            // Calling the callback passing the random name generated with the original extension name
            cb(null, `${randomUUID()}${path.extname(file.originalname)}`);
        },
    }),
};