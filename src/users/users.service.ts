import { Injectable } from '@nestjs/common';
import { DTOCreateUser } from '../dtos/users/create-user.dto';
import { UpdateUserDto } from '../dtos/users/update-user.dto';
import { BaseService } from 'src/base/base.service';
import { users } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { badResponse, baseResponse } from 'src/dtos/baseResponse';

@Injectable()
export class UsersService extends BaseService {

  async findAll(): Promise<users[]> {
    return await this.prismaService.users.findMany({
      include: {
        roles: true
      }
    })
  }

  async findOne(id: number): Promise<users> {
    return await this.prismaService.users.findFirst({
      where: {
        id: id
      },
      include: {
        roles: true
      }
    })
  }

  async create(createUserDto: DTOCreateUser): Promise<DtoBaseResponse> {
    const createUser = await this.prismaService.users.create({
      data: {
        op_users: createUserDto.name,
        op_users_password: createUserDto.password,
        op_users_role: Number(createUserDto.role),
        op_users_state: true
      }
    });

    if (!createUser) {
      return badResponse;
    }
    baseResponse.message = 'Usuario creado exitosamente.';
    return baseResponse;
    // this.prismaService.users.create(createUserDto)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
