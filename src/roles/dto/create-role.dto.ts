import { IsNotEmpty } from "class-validator"

export class CreateRoleDto {
    @IsNotEmpty({ message: "Tên không được để trống" })
    nameRole: string
}
