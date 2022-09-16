import { app } from "./app"
import { signup } from "./endpoints/signup"
import { login } from "./endpoints/login"
import { createRecipe } from "./endpoints/createRecipe"
import { getRecipe } from "./endpoints/getRecipe"

app.post("/user", signup)
app.post("/user/login", login)
app.post("/recipe", createRecipe )
app.get("/recipe", getRecipe)
