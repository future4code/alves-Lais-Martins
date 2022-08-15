console.log("Ex6");
function exercicio6(um, dois) {
    const soma = um + dois;
    const subtracao = um - dois;
    const multiplicacao = um * dois;
    const imprime = console.log("A soma dos numeros é:", soma, "A subtração dos numeros é:", subtracao, "A multiplicação dos numeros é:", multiplicacao);
    return imprime;
}
exercicio6(15, 15);
function maior(um, dois) {
    if (um > dois) {
        return um;
    }
    else if (um < dois) {
        return dois;
    }
    else {
        return "São iguais";
    }
}
console.log("O número maior é:", maior(15, 15));
//# sourceMappingURL=Ex6.js.map