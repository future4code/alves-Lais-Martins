console.log("Exercício3");
var Genero;
(function (Genero) {
    Genero["ACAO"] = "a\u00E7\u00E3o";
    Genero["DRAMA"] = "drama";
    Genero["COMEDIA"] = "com\u00E9dia";
    Genero["ROMANCE"] = "romance";
    Genero["TERROR"] = "terror";
})(Genero || (Genero = {}));
var Ponto;
(function (Ponto) {
    Ponto[Ponto["UM"] = 1] = "UM";
    Ponto[Ponto["DOIS"] = 2] = "DOIS";
    Ponto[Ponto["TRES"] = 3] = "TRES";
    Ponto[Ponto["QUATRO"] = 4] = "QUATRO";
    Ponto[Ponto["CINCO"] = 5] = "CINCO";
})(Ponto || (Ponto = {}));
const Devolve = {
    nome: "Duna",
    lancamento: 2021,
    genero: "ação",
    ponto: Ponto.TRES
};
//# sourceMappingURL=Exerc%C3%ADcio3.js.map