import { ValidationError } from "class-validator";

export function getErroresValidacion(errors:ValidationError[]){
    let mensajesError:{} = {};
            errors.forEach((err) => {
                
                if ( err.constraints){
                    Object.assign(mensajesError, {[err.property]:Object.values(err.constraints)})
                }
            })
    return mensajesError;
}