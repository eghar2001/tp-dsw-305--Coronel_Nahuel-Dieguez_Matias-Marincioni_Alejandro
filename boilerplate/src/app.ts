import express, {Request, Response, NextFunction} from 'express';
import { usuarioRouter } from './routes/usuario.routes.js';
import { syncSchema } from './shared/orm.js';
import { PORT } from './config.js';
import cookieParser from 'cookie-parser'

const app = express()

//Middleware que valida de que use un json
app.use(express.json())
app.use(cookieParser())




app.use('/usuario', usuarioRouter)

//Este es el mensaje por defecto en caso de encontrar una URL que no existe como NOB
app.use((req,res)=>{
  return res.status(404).send({message:"Resource not found"})
})


await syncSchema(); //Nunca en produccion

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`)
})