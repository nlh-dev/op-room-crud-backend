import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { SpecialitiesModule } from './specialities/specialities.module';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [UsersModule, PatientsModule, SpecialitiesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
