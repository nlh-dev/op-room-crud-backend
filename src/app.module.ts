import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';


@Module({
  imports: [UsersModule, PatientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
