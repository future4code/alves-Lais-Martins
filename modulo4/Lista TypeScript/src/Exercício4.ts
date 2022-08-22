console.log("Exercício4")

enum Setor {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type Pessoas = {
    nome: string,
    salario: number,
    presencial: boolean 
}

type Array1 = Pessoas & {setor: Setor}

const array1 = [
	{ nome: "Marcos", salário: 2500, setor: Setor.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Setor.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Setor.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Setor.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Setor.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Setor.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Setor.MARKETING, presencial: true }
]
  
const arrayFiltrado = array1.filter((objeto) => {
    const {setor} = objeto;
    const {presencial} = objeto;
    
    if (setor === "marketing" && presencial === true)
    return array1 
  })
  
  console.table(arrayFiltrado)
