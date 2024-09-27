import { DtoBaseResponse } from "./base-response.dto";

export const baseResponse: DtoBaseResponse = {
    message: '',
    statusCode: 200,
    success: true
}

export const badResponse: DtoBaseResponse = {
    message: 'Ha ocurrido un error inesperado',
    statusCode: 400,
    success: false
}