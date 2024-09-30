import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto, UpdatePatientDto } from '../dtos/patients/create-patient.dto';
import { patients, surgery_states } from '@prisma/client';

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
  @Get('/states')
  async getStatesPatient(): Promise<surgery_states[]> {
    return await this.patientsService.getStatesPatient();
  }
  
  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() updatePatientDto: CreatePatientDto) {
    return this.patientsService.update(Number(id), updatePatientDto);
  }
  @Put('/current/:id')
  updateCurrent(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.updateDate(Number(id), updatePatientDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(Number(id));
  }
}
