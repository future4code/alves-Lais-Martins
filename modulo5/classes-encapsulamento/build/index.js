"use strict";
class UserAccount {
    constructor(cpf, name, age) {
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    getCpf() {
        return this.cpf;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setCPF(cpf) {
        this.cpf = cpf;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}
const usuario = new UserAccount("32565898745", "Maria Delfina Nobre", 72);
console.log(usuario.getName(), usuario.getCpf(), usuario.getAge());
class Bank {
    constructor(accounts) {
        this.accounts = accounts;
    }
    getAccounts() {
        return this.accounts;
    }
    setAccounts(accounts) {
        this.accounts = accounts;
    }
}
const banco = new Bank([usuario]);
console.log(usuario);
//# sourceMappingURL=index.js.map