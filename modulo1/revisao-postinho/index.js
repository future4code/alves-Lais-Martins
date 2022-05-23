
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     return `No comparador de igualdade ${a}===${b} é ${a === b}`
// }
//     console.log(checarIgualdade(3, 3))

// c-)Faça uma função chamada "verificaSeEMaior"
// function verificaSeEMaior (a, b) {
//     return `No comparador de igualdade ${a} < ${b} é ${a < b}`
// }

// console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= undefined
// e-) 0!==null= true (Porque 0 não é vazio?)


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// const nomeDoUsuario = prompt ("Digite seu nome");

// let anoDeNascimento = Number (prompt ( "Em que ano você nasceu?"));

// const senhaDoUsuario = prompt('Digite sua senha');

// const nacionalidadeUsuario = prompt ('Qual sua nacionalidade?')

// function exercicio3 (nome, ano, senha, nacionalidade)  {
    
   
//     if (ano <= 2004 && senha == 1010 && nacionalidade === "brasileira" ) {
//         console.log('Bem vindo!')
//     } else {
//         console.log('Revise seus dados')
//     }
// }
// exercicio3(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidadeUsuario)

// Exercício 4-----------------------------------------------------------------------------------------------

// const senhaUser = Number (prompt('Digite uma senha de 4 números'))
// const senhaFixa = 1010  

// const ex4 = (senhaU, senhaF) => {
//        if (senhaU === senhaF) {
//        console.log('Você está logado')
//     } else {
//        console.log('Senha inválida')
//     }
// }
// ex4(senhaUser, senhaFixa)


// // Exercício 5----------------------------------------------------------------------------------------------------

// const nomeCidadao = prompt("Qual o seu nome?").toLowerCase()
// const vacinaTomada = prompt("Qual vacina você tomou?")
// let dataDehoje = new Date(20/05/2022).toLocaleDateString ()

// const ex5 = (nome, vacina, data) => {
//     if (vacina === "coronavac"){
//         function adicionarDiasData(dias){
//             let novadata    = (data +  dias(28) );
//             return novadata.dia() + "/" + mes()  + "/" + ano();
//           }
//         console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a 28 dias. Compareça no posto na data ${adicionarDiasData}.`)
//     } else if ( vacina === "astrazenica" ) {
//         function adicionarDiasData(dias){
//             var novadata    = (data + (dias * 90 ));
//             return novadata.dia() + "/" + (novadata.mes() + 1) + "/" + novadata.ano();
//           }
//         console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a 90 dias. Compareça no posto na data ${novadata}.`)
//     } else {
//         function adicionarDiasData(dia){
//             var novadata    = (data + ( dia = 90 ));
//             return novadata.dia() + "/" + (novadata.mes() + 1) + "/" + novadata.ano();
//           }
//         console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a 90 dias. Compareça no posto na data ${data}.`)
//     }
// }
// ex5(nomeCidadao, vacinaTomada, dataDehoje)




// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }

                
            
//     ]
// return nomeDoUsuario = usuarios.replaceAll("incompleta", "completa")


// }
// console.log(segundaDose)

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

// if (usuarios.imunizacao === "incompleta"){
// console.log('por favor volte ao postinho para tomar a segunda dose')

// }
// console.log(avisoAosAtrasados());


// // DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastroDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastroDesafio());

// const loginDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(loginDesafio());

// const primeiraDoseDesafio = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDoseDesafio())
// const segundaDoseDesafio = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

// const avisoAosAtrasadosDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasadosDesafio());