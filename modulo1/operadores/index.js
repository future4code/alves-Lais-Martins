/* Exercícios de interpretação de código

EXERCÍCIO 1
const bool1 = true
const bool2 = false
const bool3 = !bool2
RESPOSTA: const bool3 = true

let resultado = bool1 && bool2
console.log("a. ", resultado)
RESPOSTA: a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
RESPOSTA: b. false 

resultado = !resultado && (bool1 || bool2) 
console.log(resultado)
RESPOSTA: c. true

console.log("d. ", typeof false)
RESPOSTA: d. boolean


EXERCÍCIO 2 e 3 

let primeiroNumero = (Number(prompt("Digite um numero!")))
let segundoNumero = (Number(prompt("Digite outro numero!")))

const soma = primeiroNumero + segundoNumero
console.log(soma) 

RESPOSTA 2 e 3: Importante tirar de string e colocar em Number */

//Exercícios de escrita de código

console.log("1) RESPOSTA:") 

usuarioIdade = (Number(prompt("Idade do Usuário")))
idadeAmiga = (Number(prompt("Idade da melhor amiga do Usuário")))

quemEmaisVelho = usuarioIdade > idadeAmiga
console.log("Minha idade é maior que do meu amigo", quemEmaisVelho)

const diferencaDeidade = usuarioIdade - idadeAmiga 
console.log("Nossa diferença de idade", diferencaDeidade)


console.log("2) RESPOSTA:") 

insiraPar = (Number(prompt("Insira um número par")))
letNumerodividido = insiraPar / 2
console.log(insiraPar % 2)

//c) Todos os números pares % 2 o resultado será 0
//d) Todos os números ímpares % 2 o resultado será 1

console.log("3) RESPOSTA:") 

insiraSuaIdade = (Number(prompt("Quantos anos você tem?")))

console.log("Você tem", insiraSuaIdade*12, "meses")

console.log("Você tem", insiraSuaIdade*365, "dias")

console.log("Você tem", insiraSuaIdade*8760, "horas")

console.log("4) RESPOSTA:")

numeroRealum = (Number(prompt("Digite um número Real")))
numeroRealdois = (Number(prompt("Digite outro número Real")))

qualEmaior = numeroRealum > numeroRealdois
console.log("O primeiro numero é maior que segundo?", qualEmaior)

saoIguais = numeroRealum === numeroRealdois
console.log("O primeiro numero é igual ao segundo?", saoIguais)

doisDivideUm = numeroRealdois % numeroRealum 
console.log("O primeiro numero é divisível pelo segundo?", doisDivideUm === 0)

umDivideDois = numeroRealum % numeroRealdois
console.log("O segundo numero é divisível pelo primeiro?", umDivideDois === 0)


console.log("DESAFIO")

console.log("DESAFIO 1.")


exercicioA = 24.75 + 273.15
console.log("a)", exercicioA,"K")

exercicioB = 176
console.log("b)", exercicioB,"ºF")

exercicioCf = 86
exercicioCk = 302.85
console.log("c)", exercicioCf,"ºF", "&", exercicioCk,"k" )

console.log("DESAFIO 2.")

doisA = 280 * 0.05
console.log("2.a.", "R$",doisA)

doisB = doisA - 15/100
console.log("2.b.", "R$", doisB)


console.log("DESAFIO 3.")

// 1 libra = 0,453 quilos

tresA = 20 * 0.453
console.log("20lb equivalem a", tresA,"kg")

// 1 oz = 0.028 quilos

tresB = 10.5 * 0.28
console.log("10.5oz equivalem a", tresB,"kg")

// 1 milha = 1609.34 metros

tresC = 100 * 1609.34
console.log("100mi equivalem a", tresC,"m")

// 1ft = 0.3048m

tresD = 50 * 0.3048
console.log("50ft equivalem a", tresD,"m")

// 1gal = 4.546l

tresE = 103.56 * 4.546
console.log("103.56gal equivalem a", tresE,"l")

// 1x = 0.24l

tresF = 450 * 0.24
console.log("450xic equivalem a", tresF,"l")


