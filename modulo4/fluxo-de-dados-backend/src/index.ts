import express, { Request, Response } from "express";
import cors from "cors";
import { produtos, Produtos} from "./data"


const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//Exercício1
app.get("/test", (req: Request, res: Response) => {
 
    res.end("Ta funcionando")
   })
   
//Exercício2 em /data.ts

//Exercício3

app.post("/criar", (req: Request, res: Response) => {
    try{    
        const { name, price } = req.body
        const novaLista = produtos.push({
            id: Date.now().toString() ,
            name: name,
            price: Number(price)
        })

        res.send(novaLista)
    } catch (error: any) {
               res.status(res.statusCode || 500).send({ message: error.message })
            }
   
})

