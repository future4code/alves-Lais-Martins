import {Request, Response} from "express"
import { IdGenerator } from "../services/IdGenerator"
import { Recipe } from "../model/Recipe"
import { Recipedatabase } from "../data/Recipedatabase"

export async function createRecipe(req: Request, res: Response) {
    try{
        const {title, description} = req.body

        if(!title || !description ) {
            res.status(422).send("Insira corretamente todas as informações") 
        }
        
        // const recipedatabase = new Recipedatabase()
        // const recipe = await recipedatabase.findRecipeById(id)
        // if(recipe) {
        //    res.status(409).send("Essa receita já foi cadastrado")
        // }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate()

        const data = new Date()

        const newRecipe = new  Recipe(id, title, description, data)
        
        const recipeDadabase = new  Recipedatabase()
        await recipeDadabase.newRecipe(newRecipe)

        res.status(200).send({message:"Receita criada com sucesso", newRecipe})
            
    } catch(error: any) {
        res.status(400).send(error.message)
    }
}