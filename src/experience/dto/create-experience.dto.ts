import { IsNotEmpty } from "class-validator";

export class CreateExperienceDto {
    @IsNotEmpty({ message: "Description không được để trống" })
    description: string
}
