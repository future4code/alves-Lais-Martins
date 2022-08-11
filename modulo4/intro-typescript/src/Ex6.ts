console.log("Ex6")

function exercicio6(um: number, dois: number) {
    const soma: number = um + dois
    const subtracao: number = um - dois
    const multiplicacao: number = um * dois
        
    const imprime = console.log(
    "A soma dos numeros é:",soma, 
    "A subtração dos numeros é:",subtracao, 
    "A multiplicação dos numeros é:", multiplicacao)

    return imprime
   
  }

  exercicio6(15, 15)

  function maior(um: number, dois: number): number | string{ 
     if (um > dois) {
    return um ;
  } else if (um < dois) {
    return dois;
  } else {
    return "São iguais";
  }
}


console.log("O número maior é:",maior(15, 15))