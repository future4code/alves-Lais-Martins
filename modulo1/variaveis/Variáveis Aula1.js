console.log("Olá Mundo!")
/* Exercício de Interpretação de Código:
1. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 10
console.log(b)
b = 5
console.log(a, b)
RESPOSTA: 10, 5

2. Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)
RESPOSTA: 10, 10, 10

3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
RESPOSTAS:
let horarioDetrabalho = prompt("Quantas horas você trabalha por dia?")
let salarioDiario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioDiario/horarioDetrabalho} por hora`)
console.log(horarioDetrabalho, salarioDiario)
*/

const nomeCompleto = prompt("Qual é o seu nome completo?") //null
let idade = Number(prompt("Qual a sua idade?")) //null
typeof nomeCompleto //string
typeof idade //number

//1.d) Foi escrito assim porque um é letra e outro é numero
/*1.f) Notei que é importante notificar number quando for valor numerico e string quando for texto
Tambem notem que usando //null ele some depois de eu digitar oque se pede, limpando a pagina*/

console.log("Olá,", nomeCompleto, "voce tem", idade, "anos.")

// EXERCÍCIO 2

const Nacionalidade = prompt("Você nasceu no Brasil?")
let aluno = prompt("Você é aluno Labenu?")
let compreensão = prompt("Você entendeu até aqui?")
console.log(Nacionalidade, aluno, compreensão)


// EXERCÍCIO 3

let a = 10
let b = 25
let c = 25
 a = c
 c = 25
 b = 10
 console.log(a, b)

//DESAFIO

const numeroUm = Number(prompt("Digite um numero real"))
const numeroDois = Number(prompt("Some com outro numero real"))
const resultado = numeroUm + numeroDois
typeof numeroUm, numeroDois, resultado //number

console.log("Soma:", resultado)

























