console.log("Exercício 1")

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?

// let minhaString: string = 123
// O TypeScript da erro em "minhaString"


// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. 
// Como fazer para que essa variável também aceite strings? 
// Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

let meuNumero: number | string = 123

// c) Agora crie um novo objeto. 
// Este objeto é uma pessoa, 
// e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. 
// Utilize um `enum` para isso.

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string 
}

const pessoa: Pessoa = {
    nome: "José",
    idade: 14,
    corFavorita: "marsala"
}

const pessoa1: Pessoa = {
    nome: "João",
    idade: 11,
    corFavorita: "dourado"
}

const pessoa2: Pessoa = {
    nome: "Maria",
    idade: 10,
    corFavorita: "grafite"
}

console.log(pessoa, pessoa1, pessoa2)

enum corFavorita {
    VIOLETA = "violeta", 
    ANIL = "anil", 
    AZUL = "azul", 
    VERDE = "verde", 
    AMARELO = "amarelo", 
    LARANJA = "laranja",
    VERMELHO = "vermelho"
 }

type PessoaEnum =  Pessoa & corFavorita;


const pessoaenum = {
    nome: "Gertrudes",
    idade: 87,
    corFavorita: corFavorita.AMARELO
}

console.log(pessoaenum)



