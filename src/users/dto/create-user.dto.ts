import { IsNotEmpty } from "class-validator"

export class CreateUserDto {

    @IsNotEmpty({ message: "Username không được để trống" })
    username: string

    @IsNotEmpty({ message: "Password không được để trống" })
    password: string

}

