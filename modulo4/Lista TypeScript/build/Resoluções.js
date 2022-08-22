document.getElementById("app").innerHTML = `
<h1>Lista Typescript - Resolução</h1>
<h3>Abra o console e descomente os console.log para ver as respostas </h3>
`;
const funcao1 = (nome, dataNascimento) => {
    const [dia, mes, ano] = dataNascimento.split("/");
    const frase = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
    return frase;
};
const funcao2 = (variavel) => {
};
funcao2(11);
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
const funcao3 = (nome, ano, genero, nota) => {
    if (nota) {
        return {
            nome: nome,
            anoLancamento: ano,
            genero: genero,
            pontuacao: nota
        };
    }
    else {
        return {
            nome: nome,
            anoLancamento: ano,
            genero: genero
        };
    }
};
var SETORES;
(function (SETORES) {
    SETORES["MARKETING"] = "marketing";
    SETORES["VENDAS"] = "vendas";
    SETORES["FINANCEIRO"] = "financeiro";
})(SETORES || (SETORES = {}));
const listaColaboradores = [
    { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
    { nome: "Saulo", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
];
const funcao4 = (lista) => {
    const listaFiltrada = lista.filter((colaborador) => {
        return colaborador.setor === SETORES.MARKETING && colaborador.presencial;
    });
    return listaFiltrada;
};
var ROLE;
(function (ROLE) {
    ROLE["ADMIN"] = "admin";
    ROLE["USER"] = "user";
})(ROLE || (ROLE = {}));
const usersList = [
    { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
    { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
    { name: "Aline", email: "aline@email.com", role: ROLE.USER },
    { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
    { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
    { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
];
const funcao5 = (list) => {
    const emailsList = list
        .filter((user) => user.role === ROLE.ADMIN)
        .map((user) => user.email);
    return emailsList;
};
const listaClientes = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
const funcao6 = (lista) => {
    lista.forEach((cliente) => {
        const totalDebitos = cliente.debitos.reduce((a, b) => a + b, 0);
        cliente.saldoTotal -= totalDebitos;
        cliente.debitos = [];
    });
    const contasNegativas = lista.filter((conta) => conta.saldoTotal < 0);
    return contasNegativas;
};
const estoque = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];
const funcao7 = (lista) => {
    lista.forEach((item) => (item.valorUnitario = ajustaPreco(item.valorUnitario)));
    const listaOrdernada = lista.sort((a, b) => a.quantidade - b.quantidade);
    return listaOrdernada;
};
const funcao8 = (dataNascimento, dataDocumento) => {
    const dataAtualTimestamp = new Date().getTime();
    const [diaNasc, mesNasc, anoNasc] = dataNascimento.split("/");
    const [diaDoc, mesDoc, anoDoc] = dataDocumento.split("/");
    const anoNascTimestamp = new Date(`${anoNasc}-${mesNasc}-${diaNasc}T00:00:00`).getTime();
    const dataDocTimestamp = new Date(`${anoDoc}-${mesDoc}-${diaDoc}T00:00:00`).getTime();
    const idade = dataAtualTimestamp - anoNascTimestamp;
    const ultimaRenovacao = dataAtualTimestamp - dataDocTimestamp;
    const umAnoEmTimestamp = 31556926000;
    if (idade <= 20 * umAnoEmTimestamp) {
        return ultimaRenovacao >= 5 * umAnoEmTimestamp ? true : false;
    }
    else if (idade >= 20 * umAnoEmTimestamp && idade <= 50 * umAnoEmTimestamp) {
        return ultimaRenovacao >= 10 * umAnoEmTimestamp ? true : false;
    }
    else if (idade >= 50 * umAnoEmTimestamp) {
        return ultimaRenovacao >= 15 * umAnoEmTimestamp ? true : false;
    }
    else {
        return "algo deu errado";
    }
};
const funcao9 = (palavra) => {
    const quantidadeLetras = palavra.length;
    if (quantidadeLetras === 0) {
        return 1;
    }
    let resultado = 1;
    for (let i = quantidadeLetras; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
};
const verificaPrimeiroDigito = (digitos) => {
    let multiplicador = 10, somatorio = 0;
    for (var _i = 0; _i < digitos.length - 2; multiplicador--, _i++) {
        var digito = Number(digitos.charAt(_i));
        somatorio += digito * multiplicador;
    }
    let modOnze = somatorio % 11;
    let resultado = 11 - modOnze;
    if (resultado >= 10) {
        resultado = 0;
    }
    return resultado === Number(digitos.charAt(9));
};
const verificaSegundoDigito = (digitos) => {
    let multiplicador = 11, somatorio = 0;
    for (var _i = 0; _i < digitos.length - 1; multiplicador--, _i++) {
        var digito = Number(digitos.charAt(_i));
        somatorio += digito * multiplicador;
    }
    let modOnze = somatorio % 11;
    let resultado = 11 - modOnze;
    if (resultado >= 10) {
        resultado = 0;
    }
    return resultado === Number(digitos.charAt(10));
};
function mesmosDigitos(cpf) {
    var i = cpf.length;
    var char = cpf.charAt(0);
    while (i--) {
        if (cpf[i] !== char) {
            return false;
        }
    }
    return true;
}
const funcao10 = (cpf) => {
    let cpfApenasNumeros = cpf.split(".").join("");
    cpfApenasNumeros = cpfApenasNumeros.replace("-", "");
    if (!mesmosDigitos(cpfApenasNumeros)) {
        if (verificaPrimeiroDigito(cpfApenasNumeros)) {
            if (verificaSegundoDigito(cpfApenasNumeros)) {
                return true;
            }
        }
    }
    return false;
};
const funcao11 = (numeroInicial) => {
    const numRomanos = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let romanos = "", i;
    for (i in numRomanos) {
        while (numeroInicial >= numRomanos[i]) {
            romanos += i;
            numeroInicial -= numRomanos[i];
        }
    }
    return romanos;
};
//# sourceMappingURL=Resolu%C3%A7%C3%B5es.js.map