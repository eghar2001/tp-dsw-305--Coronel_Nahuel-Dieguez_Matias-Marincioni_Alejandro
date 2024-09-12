import { IsDate, IsDateString, IsEmail, IsNotEmpty, isValidationOptions } from "class-validator";

export class UsuarioDTO{
    @IsNotEmpty({
        message:"El nombre es obligatorio",
        groups:["register"]
    })
    nombre!:string

    @IsNotEmpty({
        message:"El apellido es obligatorio",
        groups:["register"]
    })
    apellido!:string

    @IsNotEmpty({
        message:"El telefono es obligatorio",
        groups:["register"]
    })
    telefono!:string

    @IsNotEmpty({
        message:"La fechaNacimiento es obligatoria",
        groups:["register"]
    })
    @IsDateString({},{
        message: "fechaNacimiento no tiene formato aaaa-mm-dd",
        groups:["register"]
    })
    fechaNacimiento?:Date

    @IsNotEmpty({
        message:"El username es obligatorio",
        groups:["register"]
    })
    username!:string

    @IsNotEmpty({
        message:"El email es obligatorio",
        groups:["register", "login"]
    })
    @IsEmail({},{
        message:"email no tiene formato de mail",
        groups:["register", "login"]
    })
    email!:string



    @IsNotEmpty({
        message:"El password es obligatorio",
        groups:["register", "login"]
    })
    password!:string


}