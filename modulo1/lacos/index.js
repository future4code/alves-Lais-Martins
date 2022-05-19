// Exercícios de interpretação de código

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//1.
// RESPOSTA: Variavel Valor = 0. 
// No for"()"": o índice inicial é 0 e; enquanto esse índice for menor que 5; ele vai add o índice (0) +1
// Dentro do for"{}"": quando o for atingir 5, ele vai somar o indice 0
// Fora do for, o console log ta imprimindo os valores reais a cada loop e o valor boolerano
// Então o valorimpresso vai ser 10, que é a quantidade de passos feitos


// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }


//2.

// a) Vai imprimir todos os números da lista que forem maiores que 18

// b) for (let i =0; i < lista.length; i++) {
//    console.log(lista) }


// 3.

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// // RESPOSTA:
// *
// **
// ***
// ****


// Exercícios de escrita de código

//1.

// let qddPets = Number (prompt ('Quantos bichinhos de estimação você tem?'))

// // 1.a

// if (qddPets === 0) {
//     console.log('Ah, que pena! Mas você pode adotar!')
// } if (qddPets === 1) {
//     console.log(cadastro = prompt('Digite o nome completo do seu Pet aqui') )
// } else {
//     console.log(cadastro = prompt('Digite o nome completo do seu Pet aqui') )
//        let arrayCadastros = []
//         while (arrayCadastros.length < qddPets - 1) {
//          console.log(cadastroBis = prompt('Digite o nome do seu outro Pet aqui') )

//         arrayCadastros.push(cadastroBis)
//      }
//      console.log(arrayCadastros)
// }

// 2.

// const arrayOriginal = [11, 15, 18, 14, 12, 13]

//2.a

// function impressao(array){
//     console.log(array)
// }
// impressao(arrayOriginal)

// 2.b
// const divisao = [arrayOriginal[0] / 10, arrayOriginal[1] / 10, arrayOriginal[2] / 10, arrayOriginal[3] / 10, arrayOriginal[4] / 10, arrayOriginal[5] / 10,]
// console.log(divisao)

// 2.c

// const i = arrayOriginal[0]


// if (i % 2 === 0) {
//     console.log(i)

// }

// Eu não sei usar arrays. Como eu a colocaria o "i" declarado dentro de uma função ?


// 2.d
// Se eu soubesse acessar com i eu faria o exercício anterior :(

//2.e

// const arrayDeNumeros = [11, 15, 18, 14, 12, 13]

// function retornaMaiorNumero(array) {
//     let maior = -Infinity
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maior) {
//             maior = array[i]
//         }
//     }
//     return maior
// }

// console.log("o maior numero do array é", retornaMaiorNumero(arrayDeNumeros))

// function retornaMenorNumero(array2) {
//     let menor = 0
//         for (let i2 = 6; i2 < array2.length; i2++) {
//              if (array2[i2] < maior) {
//             menor = array2[i2]
            
//         }
//     } return menor
   
// }
// console.log("o menor numero do array é", retornaMenorNumero(arrayDeNumeros))

// AAAAAAAAAAAA não sei usar o array


// DESAFIO

let numeroInicial = Number (prompt('Joagdor 1: Insira sua idade e não conte a ninguém'))

console.log('Vamos jogar!')

let chute = Number (prompt('Joagdor 2: Palpite a idade do Jogador 1'))


if (chute === numeroInicial){
    console.log('Acertou!')
} else if ( chute > numeroInicial){
    console.log('Errou. Ele não é tão velho!')
    console.log(chute)
    let oschutesMenores = []
    oschutesMenores.push(chute)    
        
} else {
    console.log('Errou. Ele não é tão novo!')
   }


