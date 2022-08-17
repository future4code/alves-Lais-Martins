import express, { Request, response, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//Exercício1
app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

//Exercício2
type Afazeres = {
    userId: number,
    id: number | string,
    title: string,
    completed: boolean 
}

//Exercício3
const afazeres = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    }]

//Exercício4
app.get("/completed", (request: Request, response: Response) => {
    // const completed = Boolean(request.params.id)

    const filter: Afazeres[] = afazeres.filter((tarefa) => {
        return tarefa.completed === true
    })

    if (afazeres === filter) {
        response.status(200).send(filter)
    } else {
        response.status(401).send("Nenhum resultado encontrado.")
    }

    response.status(200).send(filter)
})    
