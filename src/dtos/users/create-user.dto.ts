import { IsString } from "class-validator";

export class DTOCreateUser {
    @IsString()
    name: string;
    @IsString()
    password: string;
    @IsString()
    role: string;
    @IsString()
    state: string;
}
