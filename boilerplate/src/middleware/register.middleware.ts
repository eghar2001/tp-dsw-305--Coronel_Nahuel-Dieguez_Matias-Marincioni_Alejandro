import { Request, Response, NextFunction } from "express";
import { UsuarioDTO } from "../dto/usuario.dto.js";
import { validate,  } from "class-validator";
import { getErroresValidacion } from "../shared/getErroresValidacion.js";

export async function registerMiddleware(req: Request, res:Response, next:NextFunction ){

    const {nombre,apellido,telefono, fechaNacimiento,username,email,password,...extra} = req.body;
    let cantidadExtras = Object.keys(extra).length;
    if (cantidadExtras> 0){
        return res.status(400).json({message:"Hubo un error durante el registro", errors:{extraData:"Hay datos extra a los solicitados"}})
    }
    const valid = new UsuarioDTO();


    valid.nombre = nombre;
    valid.apellido = apellido;
    valid.email = email;
    valid.fechaNacimiento = fechaNacimiento;
    valid.password = password;
    valid.username = username;
    valid.telefono = telefono;


    //Validamos que todo esté escrito correctamente
    validate(valid, {groups:["register"]}).then((errors) => {
        if (errors.length > 0){
            const mensajesError = getErroresValidacion(errors);
            return res.status(400).json({"message":"Hubo un error durante el registro", "errors": mensajesError});
        }
        else{
            next();
        }
    })



    

    
}