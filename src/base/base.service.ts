import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BaseService {

    constructor(public prismaService: PrismaService){}
}
