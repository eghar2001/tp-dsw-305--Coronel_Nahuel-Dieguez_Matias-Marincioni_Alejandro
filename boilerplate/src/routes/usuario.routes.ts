import { Router } from "express";
import { register, login } from "../controller/usuario.controller.js";
import { registerMiddleware } from "../middleware/register.middleware.js";
import { loginMiddleware } from "../middleware/login.middleware.js";

export const usuarioRouter = Router();

usuarioRouter.post('/register',registerMiddleware ,register);
usuarioRouter.post('/login', loginMiddleware,login)