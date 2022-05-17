// Exercícios de interpretação de código
// 1.

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// RESPOSTA: Está testando se o número digitado dividido por 2 sobre resto, ou seja, se é par.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// RESPOSTA: Imprime "Passou no teste" se o número for par e "Não passou no teste." se for ímpar

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// REPOSTA: Para números ímpar

// 2.

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)



// a) Para que serve o código acima?
//  RESPOSTA: Para mostrar o preço da fruta ao usuário

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// RESPOSTA: O preço da fruta Maçã é R$ 2,25

// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// RESPOSTA: Ele imprimiria o valor 5 do default

// 3.

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// RESPOSTA: Está pedindo um número ao usuário

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// RESPOSTA: Esse número passou no teste.   Se - 10 dá erro

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// RESPOSTA: Sim

// Exercícios de escrita de código


// 1.

// const idadeUsuario = Number (prompt ("Quantos anos você tem?"))

// function validadora(a) {
//     if (a >= 18){ 
//         console.log("Você pode dirigir")
//     } else {
//         console.log("Você não pode dirigir.")
//     }
//   }
   
//   validadora(idadeUsuario)
  
// 2.

// const periodo = (prompt ('Digite M se você estuda no período matutino, V se é do Vespertino ou N se estuda no Noturno)'));


// function infoperiodo (x) {
//     if (x === "M"){  
//         console.log("Bom dia!")
//     } else if(x === "V") {
//         console.log("Boa tarde!")
//     } else {
//         console.log("Boa noite!")
//     }
//   }
//   infoperiodo(periodo)

// 3.

// const periodo = (prompt ('Digite M se você estuda no período matutino, V se é do Vespertino ou N se estuda no Noturno)'));


// function infoComSwi (Y) {
//     switch(Y) {
//         case "M":
//             console.log("Bom dia!")
//             break
//         case "V":
//             console.log("Boa tarde!")
//             break
//     default:
//         console.log("Boa noite!")
//             break  
//     }
// }    

  
// infoComSwi(periodo)

// 4.

// const generoDofilme = prompt('O gênero desse filme é fantasia? Responda com sim ou não')
// const valor = Number(prompt ('Qual o valor do ingresso?'))

// function vaiRolar (gen, golpe) {

//     if((gen==="sim")&&(golpe<=15)) {  
//         console.log("Bom filme!")
//     } 
//     else {
//         console.log("Escolha outro filme :(")
//     }
//   }
  
//   vaiRolar(generoDofilme, valor)

// DESAFIO

1//

// const generoDofilme = prompt('O gênero desse filme é fantasia? Responda com sim ou não')
// const valor = Number(prompt ('Qual o valor do ingresso?'))

// function vaiRolar (gen, golpe) {

//     if((gen==="sim")&&(golpe<=15)) { 
//         brinde = prompt("Escolha refrigerante, bolo ou chocolate")
//         console.log("Bom filme!")
//         console.log(`Aproveite seu ${brinde}`)
//     } 
//     else {
//         console.log("Escolha outro filme :(")
//     }
//   }
  
//   vaiRolar(generoDofilme, valor)

2//

const nome = prompt('Digite seu nome completo')
const tipo = prompt('Digite IN se estiver comprando ingressos para um jogo internacional e DO para jogo doméstico').toUpperCase()
const etapa = prompt('Digite SF se o jogo for uma semi-final, DT para decisão de terceiro lugar ou FI se é uma final').toUpperCase()
const categoria = Number (prompt('Escolha uma das categorias: 1, 2, 3 ou 4'))
const quantidade = Number (prompt('Quantos ingressos você quer comprar?')) 

let valorIngresso 



    if((tipo == "DO") && (etapa == "SF"))
        switch (categoria) {
            case "1" :
               valorIngresso = 1320
            break
            case "2" : 
                valorIngresso = 880
            break
            case "3" : 
                valorIngresso = 550
            break
            default : 
                valorIngresso = 220
            break
        }
    
     if((tipo == "DO") && (etapa == "DT")) {
        switch (categoria) {
            case "1" : 
            valorIngresso = 660
            break
            case "2" : 
            valorIngresso = 440
            break
            case "3" : 
            valorIngresso = 330
            break
            default : 
            valorIngresso = 170
            break
        }
        if((tipo == "DO") && (etapa == "FI")) {
            switch (categoria) {
                case "1" : 
                valorIngresso = 1980
                break
                case "2" : 
                valorIngresso = 1320
                break
                case "3" : 
                valorIngresso = 880
                break
                default : 
                valorIngresso = 330
                break
            }
    } 
     
}

if((tipo == "IN") && (etapa == "SF"))
switch (categoria) {
    case 1 :
       valorIngresso = 1320 * 4.10
    break
    case "2" : 
        valorIngresso = 880 * 4.10
    break
    case "3" : 
        valorIngresso = 550 * 4.10
    break
    default : 
        valorIngresso = 220 * 4.10
    break
}

if((tipo == "IN") && (etapa == "DT")) {
switch (categoria) {
    case "1" : 
    valorIngresso = 660 * 4.10 
    break
    case "2" : 
    valorIngresso = 440 * 4.10
    break
    case "3" : 
    valorIngresso = 330 * 4.10
    break
    default : 
    valorIngresso = 170 * 4.10
    break
}
if((tipo == "IN") && (etapa == "FI")) {
    switch (categoria) {
        case "1" : 
        valorIngresso = 1980 * 4.10
        break
        case "2" : 
        valorIngresso = 1320 * 4.10
        break
        case "3" : 
        valorIngresso = 880 * 4.10
        break
        default : 
        valorIngresso = 330 * 4.10
        break
    }
} 

}


console.log("Nome do solicitante:", nome, "\n","Tipo de Jogo:", tipo, "\n","Etapa do Campeonato:", etapa, "\n","Categoria:", categoria, "\n","Valor do ingresso unitário:", valorIngresso)

console.log("Valor final do pedido:", (valorIngresso * quantidade))