import { Injectable } from '@nestjs/common';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { badResponse, baseResponse } from 'src/dtos/baseResponse';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MainLoadService {

    constructor(private prismaService: PrismaService) { }

    async mainLoad(): Promise<DtoBaseResponse> {
        const createRoles = await this.prismaService.roles.createMany({
            data: [
                { roles_name: 'Administrador' },
                { roles_name: 'Usuario Estándar' },
            ]
        });

        const createUser = await this.prismaService.users.createMany({
            data: [
                {
                    op_users: 'admin',
                    op_users_password: 'admin',
                    op_users_role: 1,
                    op_users_state: false
                },
                {
                    op_users: 'user',
                    op_users_password: 'user',
                    op_users_role: 2,
                    op_users_state: true
                }
            ]
        });

        const createSurgeryStates = await this.prismaService.surgery_states.createMany({
            data: [
                {surgery_state_name: 'En Reposo'},
                {surgery_state_name: 'En Operación'}
            ]
        });

        const createSurgeryTypes = await this.prismaService.surgery_types.createMany({
            data: [
                {surgery_type_name: 'Cirugía General'}
            ]
        });

        const createPatients = await this.prismaService.patients.createMany({
            data: [
                {
                    patients_name: 'Hector Navarro',
                    patients_surgery_type_id: 1,
                    patients_started_date: new Date('2024-09-19'),
                    patients_updated_date: null,
                    patients_surgery_state_id: 1
                }
            ]
        });

        if(
            !createRoles ||
            !createUser ||
            !createSurgeryStates ||
            !createSurgeryTypes ||
            !createPatients
        ){
            return badResponse;
        }

        baseResponse.message = 'Data cargada exitosamente';
        return baseResponse;
    }
}
