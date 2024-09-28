import { Injectable } from '@nestjs/common';
import { DTOCreateSpeciality } from '../dtos/specialities/create-speciality.dto';
import { UpdateSpecialityDto } from '../dtos/specialities/update-speciality.dto';
import { BaseService } from 'src/base/base.service';
import { surgery_types } from '@prisma/client';
import { badResponse, baseResponse } from 'src/dtos/baseResponse';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';

@Injectable()
export class SpecialitiesService extends BaseService {
  async findAll(): Promise<surgery_types[]> {
    return await this.prismaService.surgery_types.findMany();
  }


  findOne(id: number) {
    return `This action returns a #${id} speciality`;
  }
  create(createSpecialityDto: DTOCreateSpeciality) {
    return 'This action adds a new speciality';
  }

  update(id: number, updateSpecialityDto: UpdateSpecialityDto) {
    return `This action updates a #${id} speciality`;
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
