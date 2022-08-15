console.log("Exercício 1");
let meuNumero = 123;
const pessoa = {
    nome: "José",
    idade: 14,
    corFavorita: "marsala"
};
const pessoa1 = {
    nome: "João",
    idade: 11,
    corFavorita: "dourado"
};
const pessoa2 = {
    nome: "Maria",
    idade: 10,
    corFavorita: "grafite"
};
console.log(pessoa, pessoa1, pessoa2);
var corFavorita;
(function (corFavorita) {
    corFavorita["VIOLETA"] = "violeta";
    corFavorita["ANIL"] = "anil";
    corFavorita["AZUL"] = "azul";
    corFavorita["VERDE"] = "verde";
    corFavorita["AMARELO"] = "amarelo";
    corFavorita["LARANJA"] = "laranja";
    corFavorita["VERMELHO"] = "vermelho";
})(corFavorita || (corFavorita = {}));
const pessoaenum = {
    nome: "Gertrudes",
    idade: 87,
    corFavorita: corFavorita.AMARELO
};
console.log(pessoaenum);
//# sourceMappingURL=Exerc%C3%ADcio1.js.map