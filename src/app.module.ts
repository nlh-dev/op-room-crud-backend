import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { SpecialitiesModule } from './specialities/specialities.module';


@Module({
  imports: [UsersModule, PatientsModule, SpecialitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
