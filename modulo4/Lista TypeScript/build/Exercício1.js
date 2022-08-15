console.log("Exercício1");
const ex1 = (nome, data) => {
    const dividida = data.split("/", 3);
    const imprimir = `Olá, me chamo ${nome}, nasci no dia ${dividida[0]} do mês ${dividida[1]} do ano de ${dividida[2]}`;
    return imprimir;
};
console.log(ex1("Maria Laura de Pádua", "18/07/1993"));
//# sourceMappingURL=Exerc%C3%ADcio1.js.map