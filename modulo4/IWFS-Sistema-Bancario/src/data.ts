export type transa = {
    valor: number,
    data: any,
    obs: string
}

export type Conta = {
    dataCadastral: any,
    nome: string,
    cpf: string | number,
    nascimento: string | number,
    saldo: number,
    resumo: transa[]
}



