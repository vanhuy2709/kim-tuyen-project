import { IsNotEmpty } from "class-validator";


export class CreateDescriptionsDto {
    @IsNotEmpty({ message: "Description không được để trống" })
    description: string
}
