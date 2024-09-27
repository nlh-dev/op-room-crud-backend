import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from '../dtos/patients/create-patient.dto';
import { UpdatePatientDto } from '../dtos/patients/update-patient.dto';
import { BaseService } from 'src/base/base.service';
import { patients, surgery_states } from '@prisma/client';

@Injectable()
export class PatientsService extends BaseService {
  
  async findAll(): Promise<patients[]> {
    return await this.prismaService.patients.findMany({
      include: {
        surgery_states: true,
        surgery_type: true
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  create(createPatientDto: CreatePatientDto) {
    return 'This action adds a new patient';
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
