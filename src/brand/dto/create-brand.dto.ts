import { IsArray, IsNotEmpty, IsString } from "class-validator"

export class CreateBrandDto {

    @IsNotEmpty({ message: "Title không được để trống" })
    title: string

    urlImage: string

}
