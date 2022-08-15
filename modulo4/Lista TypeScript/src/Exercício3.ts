console.log("Exercício3")

type Filme = {
    nome: string,
    lancamento: number,
    genero: string, 
    ponto?: number
}


enum Genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

enum Ponto {
    UM = 1,
    DOIS = 2,
    TRES = 3,
    QUATRO = 4,
    CINCO = 5
}

type Devolve = Filme & {
    ponto: Ponto
}


const Devolve = {
    nome: "Duna",
    lancamento: 2021,
    genero: "ação",
    ponto: Ponto.TRES
}

