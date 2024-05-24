import express, {Request, Response, NextFunction} from 'express';

const app = express()

//Middleware que valida de que use un json
app.use(express.json())






app.use('/',(req, res) => {
  return res.status(200).send({message:"Aguante central"})
})
//Este es el mensaje por defecto en caso de encontrar una URL que no existe como NOB
app.use((req,res)=>{
  return res.status(404).send({message:"Resource not found"})
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/")
})