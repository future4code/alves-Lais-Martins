// 1.a) usando o process.argv acessamos os valores passados via terminal

// 1.b)

console.log("Olá", process.argv[2], "você tem", process.argv[3], "anos" )

// 1.c) 
const valor = Number(process.argv[3])
const soma = valor + 7

console.log("Em sete anos você terá", soma)

// 2.
// const var1 = Number(process.argv[2])
// const var2 = Number(process.argv[3])

// const soma = var1 + var2
// const subtracao = var1 - var2
// const multiplicacao = var1 * var2
// const divisao = var1 / var2

// console.log("Considerando", var1, "e", var2, "o resultado da soma é", soma, "da subtração é", subtracao, "da multiplicação é", multiplicacao, "e da divisão é", divisao)

//3.
// const nova = process.argv[2]

// console.log("Tarefa", nova, "adicionada com sucesso!")

// console.log("Lista de tarefas: dar banho no cachorro, lavar panos de prato,", nova)