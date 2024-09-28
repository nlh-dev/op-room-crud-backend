import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { DTOCreateUser } from '../dtos/users/create-user.dto';
import { UpdateUserDto } from '../dtos/users/update-user.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(Number(id));
  }

  @Post()
  async create(@Body() createUserDto: DTOCreateUser): Promise<DtoBaseResponse> {
    return await this.usersService.create(createUserDto);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: DTOCreateUser) {
    return await this.usersService.update(Number(id), updateUserDto);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(Number(id));
  }
}
