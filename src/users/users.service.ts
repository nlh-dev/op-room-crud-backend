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

  async update(id: number, updateUserDto: DTOCreateUser): Promise<DtoBaseResponse> {
    try{
      await this.prismaService.users.update({
        data:{
          op_users: updateUserDto.name,
          op_users_password: updateUserDto.password,
          op_users_role: Number(updateUserDto.role),
          // op_users_state: true,
        },
        where: {
          id: id
        }
      })
      baseResponse.message = 'Usuario actualizado exitosamente.'
      return baseResponse;
    } catch(err) {
      return badResponse;
    }
  }

  async remove(id: number): Promise<DtoBaseResponse> {
    try {
      await this.prismaService.users.delete({
        where: {
          id: id
        }
      })
      baseResponse.message = 'Usuario eliminado exitosamente.'
      return baseResponse;
    } catch (err) {
      badResponse.message = 'No se pudo eliminar el usuario.'
      return badResponse;
    }
  }
}
