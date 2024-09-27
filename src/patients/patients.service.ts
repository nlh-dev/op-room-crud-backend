import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from '../dtos/patients/create-patient.dto';
import { UpdatePatientDto } from '../dtos/patients/update-patient.dto';

@Injectable()
export class PatientsService {
  create(createPatientDto: CreatePatientDto) {
    return 'This action adds a new patient';
  }

  findAll() {
    return `This action returns all patients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
