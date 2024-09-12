import { Request, Response, NextFunction } from "express";
import { UsuarioDTO } from "../dto/usuario.dto.js";
import { validate } from "class-validator";
import { getErroresValidacion } from "../shared/getErroresValidacion.js";

export async function loginMiddleware(req: Request, res:Response, next:NextFunction ){

    const {email,password,...extra} = req.body;
    let cantidadExtras = Object.keys(extra).length;
    if (cantidadExtras>0){
        return res.status(400).json({message:"Hubo un error durante el login", errors:{extraData:"Hay datos extra a los solicitados"}})
    }
    const valid = new UsuarioDTO();


    valid.email = email;
    valid.password = password;

    //Validamos que todo esté escrito correctamente
    validate(valid, {groups:["login"]}).then((errors) => {
        if (errors.length > 0){
            const mensajesError = getErroresValidacion(errors);
            return res.status(400).json({"message":"Hubo un error durante el login", "errors": mensajesError});
        }
        else{
            next();
        }
    })



    

    
}