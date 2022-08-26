import express, { Request, Response } from "express";
import cors from "cors";
import {users} from './users'
import {Conta, transa} from './data'


const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("LabeBank está rodando na porta http://localhost:3003")
});


//Retorna todos os usuários
app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try{
    res.status(200).send(users)
} catch (error: any) {
    res.status(errorCode).send({ message: error.message })
}
})

//Cria novo usuário +18 que ainda não teve seu CPF cadastrado
app.post("/users", (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const { nome, cpf, nascimento } = req.body
        if (!nome || !cpf || !nascimento) {
            errorCode = 422
            throw new Error('Por favor, cheque os campos preenchidos')
        }

        const [day, month, year] = nascimento.split('/')
        const dataSeparada = new Date(`${year}-${month}-${day}`)

        const nascimentoEmMilisegundos = dataSeparada.getTime()
        const today = new Date().getTime()

        const idade = Math.floor((today - nascimentoEmMilisegundos) / (1000 * 60 * 60 * 24 * 365))

            if (idade < 18) {
               errorCode = 403
               throw new Error('Usuário menor de 18 anos');
            }
        
        const userIndex = users.findIndex(client => client.cpf === cpf)

            if (userIndex >= 0) {
                res.statusCode = 409
                throw new Error("Já existe um cliente cadastrado com esse CPF!")
            }    
            
        const newUser: Conta = {
            dataCadastral: new Date(),
            nome: nome,
            cpf: cpf,
            nascimento: nascimento,
            saldo: 0, 
            resumo: []
        }
        users.push(newUser)
        res.status(201).send({ message: 'Usuário criado com sucesso!' })

    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})  


 //Inserindo o cpf, o cliente consegue ver dados atualizados da sua conta, inclusive o saldo 
app.get("/users/:cpf", (req: Request, res: Response) => {
        let errorCode = 400

        try {
            const cpf: number = Number(req.params.cpf)
            if (isNaN(cpf)) {
                errorCode = 422
                throw new Error("Valor inválido para cpf, Por favor, insira um número")
            }
            const user = users.find((user) => {
                return user.cpf === cpf
            })
            if (!user) {
                errorCode = 404
                throw new Error("User not found")
            }
            res.status(200).send(user)
        } catch (error: any) {
            res.status(errorCode).send({ message: error.message })
        }
    })

//Pagar Conta
    app.post("/users/:cpf/pagarConta", (req: Request, res: Response) => {
        try {
    
            const cpf = req.params.cpf
            const {valor, obs} = req.body
            let {data} = req.body
    
            if (!data) {
                data = Date.now()
            }
    
            const [day, month, year] = data.split('/')
            const dateFormatted = new Date(`${year}-${month}-${day}`)
    
            if (!valor || !obs) {
                res.statusCode = 400
                throw new Error("Não foi possível realizar o pagamento, passou algum dado não preenchido")
            }
    
            const clientIndex = users.findIndex(client => client.cpf === cpf)
            
            // Verifica se o CPF já está cadastrado, se for um valor abaixo de 0, então não existe um cliente com o mesmo CPF, no caso sempre vai retornar -1 se não existir na lista.
            if (clientIndex < 0) {
                res.statusCode = 404
                throw new Error("Cliente não encontrado")
            }
    
            const client = users[clientIndex]
    
            
            const newTransaction: transa = {
                valor,
                data: dateFormatted,
                obs
            }
    
            // O método Math.abs() retorna o valor absoluto de um número, ou seja, o valor sem sinal negativo. Ao se passar um número negativo, o método retorna o valor positivo. Mas se passarmos um número positivo, o método retorna o mesmo número. Por exemplo, o método Math.abs(-10) retorna 10. O método Math.abs(10) retorna 10. Poderiamos ter usado value * -1, mas o método Math.abs() é mais eficiente.
            if (Math.abs(valor) > client.saldo) {
                res.statusCode = 406
                throw new Error("Saldo insuficiente")
            }
    
            client.resumo.push(newTransaction)
            
            res.status(201).send("Pagamento realizado com sucesso")
        } catch (error: any) {
            if (res.statusCode == 200) {
                res.status(500).send(error.message)
            } else {
                res.status(res.statusCode).send(error.message)
            }
        }
    })

    


// Adiciona saldo
app.put("/users/:cpf/adiciona", (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const cpf = req.params.cpf
        const {valor, obs} = req.body
        
        if (!cpf || !valor || !obs ) {
            errorCode = 400
            throw new Error("Dados inválidos. Por favor, verifique")
        }
        
         const cliente = cpf.includes(cpf) 
         if(!cliente){
            errorCode = 404
            throw new Error("Cliente inexistente")
         }

         const clientIndex = users.findIndex(user => user.cpf === cpf)
         users[clientIndex].resumo.push({
            valor,
            obs,
            data: new Date()
        })
                
        res.status(200).send("Depósito feito" && cliente)
        
    } catch (error:any) {
           res.status(errorCode).send({ message: error.message })
        }    
})

// Atualiza saldo 
app.put("/users/:cpf/:name/saldo", (req: Request, res: Response) => {
    try {

        const {cpf, nome} = req.params

        if (!cpf || !nome) {
            res.statusCode = 400
            throw new Error("Não foi possível atualizar o cliente, passou algum dado não preenchido")
        }

        const clientIndex = users.findIndex(client => client.cpf === cpf && client.nome.toLowerCase() === nome.toLowerCase())

        // Verifica se o CPF e o name já está cadastrado, se for um valor abaixo de 0, então não existe um cliente com o mesmo CPF, no caso sempre vai retornar -1 se não existir na lista.
        if (clientIndex < 0) {
            res.statusCode = 404
            throw new Error("Não foi possível atualizar o cliente, não existe um cliente cadastrado com esse CPF e nome")
        }

        let newBalance = users[clientIndex].saldo

        users[clientIndex].resumo.forEach(saldo => {
            newBalance += saldo.valor
        }
        )

        users[clientIndex].saldo = newBalance

        res.status(200).send("Saldo atualizado com sucesso")
    } catch (error:any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

// Transferência Interna
app.post("/users/:cpf/:nome/transfer", (req: Request, res: Response) => {
    try {

        const {cpf, nome} = req.params
        const {nameDestination, cpfDestination} = req.body
        const {resumo} = req.body
        const {valor, obs} = resumo
        let {data} = resumo

        const [day, month, year] = data.split('/')
        const dateFormatted = new Date(`${year}-${month}-${day}`)

        if (!cpf || !nome || !nameDestination || !cpfDestination) {
            res.statusCode = 400
            throw new Error("Não foi possível realizar a transferência, passou algum dado não preenchido")
        }
        
        const clientIndex = users.findIndex(client => client.cpf === cpf && client.nome.toLowerCase() === nome.toLowerCase())

        // Verifica se o CPF e o name já está cadastrado, se for um valor abaixo de 0, então não existe um cliente com o mesmo CPF, no caso sempre vai retornar -1 se não existir na lista.
        if (clientIndex < 0) {
            res.statusCode = 404
            throw new Error("Não foi possível realizar a transferência, não existe um cliente cadastrado com esse CPF e nome")
        }

        const client = users[clientIndex]

        // O método Math.abs() retorna o valor absoluto de um número. O valor absoluto de um número é o valor sem sinal.
        if (Math.abs(valor) > client.saldo) {
            res.statusCode = 406
            throw new Error("Saldo insuficiente")
        }

        const clientDestinationIndex = users.findIndex(client => client.cpf === cpfDestination)

        // Verifica se o CPF, se for um valor abaixo de 0, então não existe um cliente com o mesmo CPF, no caso sempre vai retornar -1 se não existir na lista.
        if (clientDestinationIndex < 0) {
            res.statusCode = 404
            throw new Error("Não foi possível realizar a transferência, não existe um cliente cadastrado com esse CPF")
        }

        const clientDestination = users[clientDestinationIndex]

        const newTransaction: transa = {
            valor: - valor,
            data: new Date(),
            obs: `Transferência de ${client.nome} para ${nameDestination}`
        }

        const newTransaction2: transa = {
            valor: valor,
            data: new Date(),
            obs: `Transferência de ${client.nome} para ${nameDestination}`
        }

        client.resumo.push(newTransaction)
        clientDestination.resumo.push(newTransaction2)

        res.status(200).send("Transferência realizada com sucesso")
    } catch (error:any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})
