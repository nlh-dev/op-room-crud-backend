import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DTOLogin } from 'src/dtos/auth/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post()
    async login(@Body() auth: DTOLogin){
        return await this.authService.Login(auth);
    }
}
