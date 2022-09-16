import {Request, Response} from "express"
import { Recipedatabase } from "../data/Recipedatabase"


export async function getRecipe(req: Request, res: Response) {
    try{
        const {title} = req.body

        if(!title) {
            res.status(404).send("Não temos esse título") 
        }
        
        
        const vaitomarnocu = Recipedatabase
        console.log(vaitomarnocu)
        
        // await recipeDadabase.findRecipeByTitle()

        // const recipeDadabase = new  Recipedatabase()
        // await recipeDadabase.newRecipe(newRecipe)

        res.status(200).send(vaitomarnocu)
            
    } catch(error: any) {
        res.status(400).send(error.message)
    }
}