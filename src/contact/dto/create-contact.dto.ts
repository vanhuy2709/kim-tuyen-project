import { IsNotEmpty } from "class-validator";

export class CreateContactDto {

    @IsNotEmpty({ message: "Tên không được để trống" })
    name: string

    @IsNotEmpty({ message: "Email không được để trống" })
    email: string

    @IsNotEmpty({ message: "SDT không được để trống" })
    phoneNumber: string

    @IsNotEmpty({ message: "Mô tả không được để trống" })
    description: string

}
