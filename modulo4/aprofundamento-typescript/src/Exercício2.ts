// console.log("Exercício 2")

//a) Entrada: numeros e saída: estatisticas

function obterEstatisticas(numeros: number []) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
// numeros: number[], a e b: number, soma: number, maior, menor e media: number

// // c) Crie um *type* chamado **amostra** de dados, 
// // isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. 

type NumerosOrdenados = {
    a: number,
    b: number,
}

type Soma = {
    soma: number
}

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

type Amostra = {
    numeros: number,
    obterEstatisticas: (numeros: number) => Estatisticas
}