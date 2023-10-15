import { IsArray, IsNotEmpty, IsString } from "class-validator"

export class CreateBrandDto {

    @IsNotEmpty({ message: "Title không được để trống" })
    title: string

    @IsNotEmpty({ message: "UrlImage không được để trống" })
    @IsArray({ message: "Phải là Array" })
    @IsString({ each: true, message: "Không đúng định dạng" })
    urlImage: string[]

}
