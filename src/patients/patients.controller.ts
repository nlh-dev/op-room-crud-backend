import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from '../dtos/patients/create-patient.dto';
import { UpdatePatientDto } from '../dtos/patients/update-patient.dto';
import { patients } from '@prisma/client';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}
  
  @Get()
  async findAll(): Promise<patients[]> {
    return await this.patientsService.findAll();
  }
  @Get('/current')
  async findCurrent(): Promise<patients[]> {
    return await this.patientsService.findCurrent();
  }
  @Get('/prev')
  async findPrev(): Promise<patients[]> {
    return await this.patientsService.findPrev();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id);
  }

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }
}
