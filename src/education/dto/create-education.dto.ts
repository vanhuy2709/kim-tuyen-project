import { IsNotEmpty } from "class-validator";

export class CreateEducationDto {
    @IsNotEmpty({ message: "Description không được để trống" })
    description: string
}
