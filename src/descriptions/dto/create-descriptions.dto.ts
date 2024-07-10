import { IsNotEmpty } from "class-validator";


export class CreateDescriptionsDto {
    @IsNotEmpty({ message: "Description không được để trống" })
    description: string

    @IsNotEmpty({ message: "Experience không được để trống" })
    experience: string

    @IsNotEmpty({ message: "Education không được để trống" })
    education: string
}
