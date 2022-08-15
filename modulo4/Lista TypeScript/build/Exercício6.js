console.log("Exercício6");
const clientes = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
const ex6 = (clientes) => {
    clientes.forEach((cliente) => {
        const debito = cliente.debitos.reduce((total, linha) => total + linha, 0);
        cliente.saldoTotal -= debito;
        cliente.debitos = [];
    });
    const devedores = clientes.filter((Clientes) => Clientes.saldoTotal < 0);
    return devedores;
};
console.table(ex6(clientes));
//# sourceMappingURL=Exerc%C3%ADcio6.js.map