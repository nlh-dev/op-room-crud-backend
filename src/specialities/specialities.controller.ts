import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpecialitiesService } from './specialities.service';
import { DTOCreateSpeciality } from '../dtos/specialities/speciality.dto';
import { surgery_types } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
@Controller('specialities')
export class SpecialitiesController {

  constructor(private readonly specialitiesService: SpecialitiesService) { }

  @Get()
  async findAll(): Promise<surgery_types[]> {
    return await this.specialitiesService.findAll();
  }

  @Post()
  async create(@Body() createSpecialityDto: DTOCreateSpeciality): Promise<DtoBaseResponse> {
    return await this.specialitiesService.create(createSpecialityDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.specialitiesService.remove(Number(id));
  }
}
