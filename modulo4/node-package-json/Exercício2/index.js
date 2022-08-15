//2.
const var1 = Number(process.argv[2])
const var2 = Number(process.argv[3])

const soma = var1 + var2
const subtracao = var1 - var2
const multiplicacao = var1 * var2
const divisao = var1 / var2

console.log("Considerando", var1, "e", var2, "o resultado da soma é", soma, "da subtração é", subtracao, "da multiplicação é", multiplicacao, "e da divisão é", divisao)