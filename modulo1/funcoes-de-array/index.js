// Exercícios de interpretação de código

// 1.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//inter.1
//RESPOSTA: Vai imprimir o item no array, o índice (posição que se encontra na lista), e reimprimiu o array com essas infos.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// inter.2
//RESPOSTA: Vai imprimir somente os nomes da array


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  //inter.3
  // RESPOSTA>: Esta imprimindo item diferente de Chijo, ou seja, as linhas da Amanda e Laís

  //Exercícios de escrita de código

  // 1.

  
// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]

//a.
// const doguinhos = pets.map((nomes) => {
//     return nomes.nome
// })

// console.log(doguinhos)

//b.
// const salsicha = pets.filter((raca1) => {
//     return raca1.raca == "Salsicha"
// })

// console.log(salsicha)

//c.
// const poodle = pets.filter((raca1) => {
//     return raca1.raca == "Poodle"
// }).map((raca1) =>{
//     console.log(raca1.nome)
//           return "Você ganhou um cupom de desconto de 10% para tosar o(a) " + raca1.nome
// })

// console.log(poodle)

// 2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  //a.
// //  const soNomes = produtos.map((nomes) => {
// //     return nomes.nome
// // })

// // console.log(soNomes)

// b.
//  const desconto = produtos.map((nomes) => {
//     return nomes.nome + " " + (( nomes.preco * 0.75).toFixed(2))
// })
// console.log(desconto)

// c.
// const doisC  = produtos.filter((pOdRuTo) => {
//     return pOdRuTo.categoria == "Bebidas"
// })

// console.log(doisC)

// //d.
// const oYpe = produtos.filter((item1,index) => {
//      item1 === produtos.includes("Ype")
  
// })

// console.log(oYpe)

// Buguei total daqui pra baixo. SOcorro!