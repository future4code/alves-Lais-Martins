import { Basedatabase } from "./Basedatabase"
import { Recipe } from "../model/Recipe"

export class Recipedatabase extends Basedatabase {
    public async newRecipe (recipe: Recipe){
        try{
            await Basedatabase.connection("lbn_recipe").insert({
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                data: recipe.getData()
            })
          
        }catch(error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    
    public async findRecipeByTitle(title: string) {
    try{
        const recipes = await Basedatabase.connection('lbn_recipe')
            .select('*')
            .where( "title", "like", `%${title}%` );
        return recipes   

    } catch(error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
}
}

