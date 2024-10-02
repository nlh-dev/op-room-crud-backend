import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { DTOLogin, ResponseLogin } from 'src/dtos/auth/auth.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { badResponse } from 'src/dtos/baseResponse';

@Injectable()
export class AuthService extends BaseService{


    async Login(login: DTOLogin): Promise<ResponseLogin | DtoBaseResponse>{
        const findUser = await this.prismaService.users.findFirst({
            where:{
                op_users: login.username,
                op_users_password: login.password,
            },
            include: {
                roles: true
            }
        });

        if(!findUser){
            badResponse.message = 'Usuario no encontrado.';
            return badResponse;
        }

        if(!findUser.op_users_state){
            badResponse.message = 'Usuario inactivo';
            return badResponse;
        }

        const responseLogin: ResponseLogin = {
            message: `Bienvenido ${findUser.op_users}`,
            success: true,
            statusCode: 200,
            user: findUser
        };
        
        return responseLogin
    }
}
