import {Request, Response} from "express"
import { UserDatabase } from "../data/UserDatabase"
import { HashManager } from "../services/HashMager"
import { Authenticator } from "../services/Authenticator"

export async function login(req: Request, res: Response) {
    try{
        const {email, password} = req.body

        if(!email || !password) {
            res.status(422).send("Insira corretamente todas as informações") 
        }
        
        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)
        if(!user) {
           res.status(404).send("Esse e-mail não está cadastrado")
        }
      
        const hashManager = new HashManager()
        const passwordIsCorrect = hashManager.compare(password, user.getPassword())
       
        if(!passwordIsCorrect){
            res.status(401).send("E-mail ou senha incorretos")
        }
    
        const authenticator = new Authenticator()
        const token = authenticator.generate({id: user.getId(), role: user.getRole()})

        res.status(200).send({message:"Usuário logado com sucesso", token})
            
    } catch(error: any) {
        res.status(400).send(error.message)
    }
}