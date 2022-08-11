console.log("Ex9");
function labenu(idade, emcompleto, horas, intnot) {
    if (intnot === "integral" && idade >= 18 && emcompleto === "sim" && horas >= 40) {
        return "Bem- vindo(a) ao curso Integral da Labenu";
    }
    else if (intnot === "noturno" && idade >= 18 && emcompleto === "sim" && horas >= 20) {
        return "Bem- vindo(a) ao curso Noturno da Labenu";
    }
    else {
        return "Você não foi aprovado para o curso Labenu. Tente outra vez!";
    }
}
console.log(labenu(21, "sim", 52, "integral"));
//# sourceMappingURL=Ex9.js.map