/// <reference types="multer" />
import { FilesService } from './files.service';
import { UpdateFileDto } from './dto/update-file.dto';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    uploadFile(file: Express.Multer.File): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFileDto: UpdateFileDto): string;
    remove(id: string): string;
}
