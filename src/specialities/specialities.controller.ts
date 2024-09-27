import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpecialitiesService } from './specialities.service';
import { DTOCreateSpeciality } from '../dtos/specialities/create-speciality.dto';
import { UpdateSpecialityDto } from '../dtos/specialities/update-speciality.dto';
import { surgery_types } from '@prisma/client';
@Controller('specialities')
export class SpecialitiesController {

  constructor(private readonly specialitiesService: SpecialitiesService) { }

  @Get()
  async findAll(): Promise<surgery_types[]> {
    return await this.specialitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specialitiesService.findOne(+id);
  }

  @Post()
  create(@Body() createSpecialityDto: DTOCreateSpeciality) {
    return this.specialitiesService.create(createSpecialityDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpecialityDto: UpdateSpecialityDto) {
    return this.specialitiesService.update(+id, updateSpecialityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specialitiesService.remove(+id);
  }
}
