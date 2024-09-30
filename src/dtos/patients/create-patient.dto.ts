import { Transform } from "class-transformer";
import { IsDate, IsString } from "class-validator";

export class CreatePatientDto {
    @IsString()
    fullName: string;
    @IsString()
    speciality: string;
    @Transform(({ value }) => new Date(value))
    @IsDate()
    date_start: Date;
    @IsString()
    state: string;
}

export class UpdatePatientDto {
    @Transform(({ value }) => new Date(value))
    @IsDate()
    date_end: Date;
}

