import { Module } from '@nestjs/common';
import { SpecialitiesService } from './specialities.service';
import { SpecialitiesController } from './specialities.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SpecialitiesController],
  providers: [SpecialitiesService, PrismaService],
})
export class SpecialitiesModule {}
