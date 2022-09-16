import { Request, Response } from "express"
import { Authenticator } from "../services/Authenticator"

export async function getUsers(req: Request, res: Response) {
    try{
        const token = req.headers.authorization

        if (!token){
            res.status(422).send("Necessário passar autorização nos headers")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token as string)

        if(tokenData.role !== "ADMIN") 
        res.status(401).send("Somente administradores podem acessar esse conteúdo")



    } catch(error: any) {
        res.status(400).send(error.message)
    }
}