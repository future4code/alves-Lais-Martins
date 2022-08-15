console.log("Exercício7");
const estoqueAtual = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];
const ajustaPreco = (preco) => {
    const valorAjustado = preco.toFixed(2).replace(".", ",");
    return "R$ " + valorAjustado;
};
const ex7 = (estoqueAtual) => {
    estoqueAtual.forEach((index) => (index.valorUnitario = ajustaPreco(index.valorUnitario)));
    const ordem = estoqueAtual.sort((inicio, fim) => inicio.quantidade - fim.quantidade);
    return ordem;
};
console.table(ex7(estoqueAtual));
//# sourceMappingURL=Exerc%C3%ADcio7.js.map