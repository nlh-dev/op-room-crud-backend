import { Injectable } from '@nestjs/common';
import { DTOCreateSpeciality } from '../dtos/specialities/speciality.dto';
import { BaseService } from 'src/base/base.service';
import { surgery_types } from '@prisma/client';
import { badResponse, baseResponse } from 'src/dtos/baseResponse';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';

@Injectable()
export class SpecialitiesService extends BaseService {
  async findAll(): Promise<surgery_types[]> {
    return await this.prismaService.surgery_types.findMany();
  }

  async create(createSpecialityDto: DTOCreateSpeciality): Promise<DtoBaseResponse> {
    try{
      await this.prismaService.surgery_types.create({
        data: {
          surgery_type_name: createSpecialityDto.speciality
        }
      });
  
      baseResponse.message = 'Intervención creada exitosamente.'
      return baseResponse;
    } catch(err){
      return badResponse;
    }
  }

  async remove(id: number): Promise<DtoBaseResponse> {
    try {
      await this.prismaService.surgery_types.delete({
        where: {
          surgery_type_id: id
        }
      })
      baseResponse.message = 'Especialidad eliminada exitosamente.'
      return baseResponse;
    } catch (err) {
      badResponse.message = 'No se pudo eliminar el registro.'
      return badResponse;
    }
  }
}
