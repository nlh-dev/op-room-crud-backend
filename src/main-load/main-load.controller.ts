import { Controller, Get } from '@nestjs/common';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { MainLoadService } from './main-load.service';

@Controller('main-load')
export class MainLoadController {

    constructor(private mainLoadService: MainLoadService){}

    @Get()
    async mainLoad(): Promise<DtoBaseResponse>{
        return await this.mainLoadService.mainLoad();
    }
}
