import {Request, Response} from 'express'
import app from './app'
import connection from './connection'

app.post ("/usuarios", async (req: Request, res: Response) : Promise <void> => {
    try {
        await connection.raw (`
            insert into usuarios
            (nome, apelido, email)
            values (
                "${req.body.nome}",
                "${req.body.apelido}",
                "${req.body.email}",
            )    
        `)
        res.status(201).send("Usuário Criado!")
    } catch(error) {
        res.status(500).send("Ocorreu um erro")
    }
})