import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { SpecialitiesModule } from './specialities/specialities.module';
import { PrismaService } from './prisma/prisma.service';
import { MainLoadModule } from './main-load/main-load.module';
import { AuthModule } from './auth/auth.module';
import { BaseService } from './base/base.service';


@Module({
  imports: [UsersModule, PatientsModule, SpecialitiesModule, MainLoadModule, AuthModule],
  controllers: [],
  providers: [PrismaService, BaseService],
})
export class AppModule {}
