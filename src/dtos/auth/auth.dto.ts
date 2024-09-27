import { IsString } from "class-validator";
import { DtoBaseResponse } from "../base-response.dto";

export class DTOLogin {
    @IsString()
    username: string;
    @IsString()
    password: string;
}

export class ResponseLogin extends DtoBaseResponse{
    user: any;
}