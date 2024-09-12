import { json, Request, Response } from "express"
import { Usuario } from "../model/usuario.entity.js";
import { orm } from "../shared/orm.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRATION, SALT_ROUNDS } from "../config.js";

const em = orm.em.fork();

async function register(req:Request, res:Response){
    let errorMessages = {};
    const userEmail = await em.findOne(Usuario, {email:req.body.email});
    if (!!userEmail){
        Object.assign(errorMessages, {["email"]:"El email ya se encuentra registrado"})
    }

    const username = await em.findOne(Usuario, {username:req.body.username});
    if (!!username){
        Object.assign(errorMessages, {["username"]:"El username ya se encuentra registrado"})
    }
    if( Object.keys(errorMessages).length >0){
        return res.status(400).json({"message":"Hubo un error con el registro", errors:errorMessages})
    }
   
    //Encriptamos la contraseña
    const salt = await bcryptjs.genSalt(Number.parseInt(SALT_ROUNDS!));
    const hashPassword = await bcryptjs.hash(req.body.password, salt );
    req.body.password = hashPassword;

    //Creamos el usuario y lo guardamos en la base de datos
    let usuario = em.create(Usuario, req.body);
    try{
        await em.flush();
    }
    catch(e){
        return res.status(400).json({message:"Hubo un error con el registro", errors:{"insert":"Hubo un error al guardar el usuario"}})
    }
    res.status(200).json({message:'Se ha registrado', body: req.body});
}

async function login(req:Request, res:Response){ 
    const {email,password} = req.body;

    const usuario = await em.findOne(Usuario, {email:email});
    if (!usuario){
        return res.status(400).json({message:"Hubo un error durante el login"});
    }
    
    
    const loginCorrecto = bcryptjs.compareSync(password, usuario.password! );
    if (!loginCorrecto)
    {
        return res.status(400).json({message:"Hubo un error durante el login"});
    }
    console.log(process.env.JWT_SECRET)
    const token = jsonwebtoken.sign(
        {id:usuario.id, username:usuario.username,},
        JWT_SECRET as string,
        {expiresIn:JWT_EXPIRATION as string}
    )
    return res.cookie('access-token',token, {
            httpOnly: true,

    })
            .status(200)
            .json({message:"El login es correcto"});
}

export {register, login}