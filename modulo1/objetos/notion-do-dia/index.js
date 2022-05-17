// // const filme = {
// // 	nome: "Auto da Compadecida", 
// // 	ano: 2000, 
// // 	elenco: [
// // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// // 		"Virginia Cavendish"
// // 		], 
// // 	transmissoesHoje: [
// // 		{canal: "Telecine", horario: "21h"}, 
// // 		{canal: "Canal Brasil", horario: "19h"}, 
// // 		{canal: "Globo", horario: "14h"}
// // 		]
// // }

// // console.log(filme.elenco[0])
// // console.log(filme.elenco[filme.elenco.length - 1])
// // console.log(filme.transmissoesHoje[2])

// // 1. a) O que vai ser impresso no console?
// // RESPOSTA: Matheus Nachtergaele
// // Virginia Cavendish
// // Globo 14h */


// // const cachorro = {
// // 	nome: "Juca", 
// // 	idade: 3, 
// // 	raca: "SRD"
// // }

// // const gato = {...cachorro, nome: "Juba"}

// // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// // console.log(cachorro)
// // console.log(gato)
// // console.log(tartaruga)


// // 2.a) O que vai ser impresso no console?
// // RESPOSTA: nome: Juca idade: 3 raca: SRD
// // nome: Juba idade: 3 raca: SRD
// // nome: Jubo idade: 3 raca: SRD

// // 2.b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// // RESPOSTA: Pega todas as informações do local de referência (no caso a variável cachorro) como base de informações de um novo objeto
// // */


// // function minhaFuncao(objeto, propriedade) {
// // 	return objeto[propriedade]
// // }

// // const pessoa = {
// //   nome: "Caio", 
// //   idade: 23, 
// //   backender: false
// // }

// // console.log(minhaFuncao(pessoa, "backender"))
// // console.log(minhaFuncao(pessoa, "altura"))

// // 3.a) O que vai ser impresso no console?
// // RESPOSTA: false
// // undefinined 

// // 3.b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// // RESPOSTA: Não foi declatada a altura na variável pessoa 


// // // Exercícios de escrita de código


// // //1.A

// // const objetoA = {
// //     nome: "Laís",
// //     apelidos: ["Lála", "Lai", "Lis"]
// // }

// // function umA(stringA, arrayA){
// //     stringA = objetoA.nome,
// //     arrayA = objetoA[apelidos],
// //     console.log(objetoA)
// // }

// // console.log(`Meu nome é ${objetoA.nome} mas pode me chamar de ${objetoA.apelidos}.`)

// // //1.B

// // const objetoB ={
// //     ...objetoA,
// //     apelidos: ["louca","louca", "louca"]
// // }

// // console.log("novo objeto", objetoB) 


// // // 2.A



// // const objetoDoisA = {
// //     nome: "Zoe",
// //     idade: 20,
// //     profissão: "estudante"
// // }

// // const objetoDoisB = {
// //     nome: "James",
// //     idade: 50,
// //     profissão: "dentista"
// // }

// // //2.B
 

// // function retornoDeObjetos(parDoisA) {
// //              const  array = [parDoisA.nome, parDoisA.nome.length, parDoisA.idade, parDoisA.profissão]
// //     console.log(array)
// // }

// // retornoDeObjetos(objetoDoisA) 
// // retornoDeObjetos(objetoDoisB) 


// // // 3

// // const carrinho = []

// // const fruta1 = {
// //     nome: "abacate",
// //     disponibilidade: true
// // }

// // const fruta2 = {
// //     nome: "melancia",
// //     disponibilidade: true
// // }
    
// // const fruta3 = {
// //     nome: "tangerina",
// //     disponibilidade: true
// // }

// // function aSerexibida(parametro1){
// //   const carrinho = []
// //   carrinho.push(fruta1, fruta2, fruta3)
// //   console.log(carrinho)
// //   }

// // aSerexibida(carrinho)


// // //desafio 1.


// // function perguntaUser(par) {
// //     const nomeuser = prompt("Digite seu nome")
// //     const idadeUser = Number(prompt("Digite sua idade"))
// //     const profissaoUser = prompt("Digite sua profissao")
// //     console.log(nomeuser, idadeUser, profissaoUser)
// // }

// // perguntaUser(`Nome:nomeuser, idade:idadeUser, profissao:profissaoUser`)



// // // desafio 2.

// // const filme1 = {
// //     nomeDofilme: "Titanic",
// //     anoDeLancamento: 1998
// // }

// // const filme2 = {
// //     nomeDofilme2: "Lagoa Azul",
// //     anoDeLancamento2: 1980
// // }

// // function dofilme(anof) {
// //     const valor = anof
// //     console.log(valor)
// // }

// // dofilme(`${filme1.anoDeLancamento} < ${filme2.anoDeLancamento2}`)

// // // não sei como imprimir a resposta desse exercicio

// const fruta3 = {
//         nome: "tangerina",
//         disponibilidade: true
//     }
    
//     function aSerexibidaDesafio(parametroDesafio){
//         const respostaDoDesafio = !parametroDesafio.disponibilidade
//         console.log(respostaDoDesafio)
//      }
    
//     aSerexibidaDesafio(fruta3)