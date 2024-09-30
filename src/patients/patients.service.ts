import { Injectable } from '@nestjs/common';
import { CreatePatientDto, UpdatePatientDto } from '../dtos/patients/create-patient.dto';
import { BaseService } from 'src/base/base.service';
import { patients, surgery_states } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { badResponse, baseResponse } from 'src/dtos/baseResponse';

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

  async findCurrent(): Promise<patients[]> {
    return await this.prismaService.patients.findMany({
      include: {
        surgery_states: true,
        surgery_type: true
      },
      where: {
        patients_updated_date: {
          not: null
        }
      }
    });
  }

  async findPrev(): Promise<patients[]> {
    return await this.prismaService.patients.findMany({
      include: {
        surgery_states: true,
        surgery_type: true
      },
      where: {
        patients_updated_date: null
      }
    });
  }

  async getStatesPatient(): Promise<surgery_states[]> {
    return await this.prismaService.surgery_states.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  async create(createPatientDto: CreatePatientDto): Promise<DtoBaseResponse> {
    try {
      await this.prismaService.patients.create({
        data: {
          patients_name: createPatientDto.fullName,
          patients_started_date: createPatientDto.date_start,
          patients_surgery_state_id: Number(createPatientDto.state),
          patients_surgery_type_id: Number(createPatientDto.speciality)
        }
      })
      baseResponse.message = 'Paciente agregado exitosamente.'
      return baseResponse;
    } catch (err) {
      return badResponse;
    }
  }

  async update(id: number, updatePatientDto: CreatePatientDto): Promise<DtoBaseResponse> {
    try{
      await this.prismaService.patients.update({
        data:{
          patients_name: updatePatientDto.fullName,
          patients_started_date: updatePatientDto.date_start,
          patients_surgery_state_id: Number(updatePatientDto.state),
          patients_surgery_type_id: Number(updatePatientDto.speciality)
        },
        where: {
          patients_id: id
        }
      })
      baseResponse.message = 'Paciente actualizado exitosamente.'
      return baseResponse;
    } catch(err) {
      return badResponse;
    }
  }

  async updateDate(id: number, updatePatientDto: UpdatePatientDto): Promise<DtoBaseResponse> {
    try{
      await this.prismaService.patients.update({
        data:{
          patients_updated_date: updatePatientDto.date_end,
        },
        where: {
          patients_id: id
        }
      })
      baseResponse.message = 'Paciente actualizado exitosamente.'
      return baseResponse;
    } catch(err) {
      return badResponse;
    }
  }

  async remove(id: number): Promise<DtoBaseResponse> {
    try {
      await this.prismaService.patients.delete({
        where: {
          patients_id: id
        }
      })
      baseResponse.message = 'Paciente eliminado exitosamente.'
      return baseResponse;
    } catch (err) {
      badResponse.message = 'No se pudo eliminar el paciente.'
      return badResponse;
    }
  }
}
