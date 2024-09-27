import { Injectable } from '@nestjs/common';
import { DTOCreateSpeciality } from '../dtos/specialities/create-speciality.dto';
import { UpdateSpecialityDto } from '../dtos/specialities/update-speciality.dto';
import { BaseService } from 'src/base/base.service';
import { surgery_types } from '@prisma/client';

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

  remove(id: number) {
    return `This action removes a #${id} speciality`;
  }
}
