// Exercício 1.

// a)
// O construtor serve para validação de dados, para algum processamento seja necessário com os parâmetros iniciais antes de criar o objeto. Entre esses processamentos podemos incluir a aquisição de recursos externos, como banco de dados, acesso ao sistema de arquivos, redes, etc., para algum processamento seja necessário com os parâmetros iniciais antes de criar o objeto. Entre esses processamentos podemos incluir a aquisição de recursos externos, como banco de dados, acesso ao sistema de arquivos, redes, etc.

// b)
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    // private balance: number = 0;
    // private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    public getCpf(): string{
        return this.cpf
     }
     public getName(){
        return this.name
     }
     public getAge(){
        return this.age
     }
     public setCPF(cpf: string){
        this.cpf = cpf
     }
     public setName(name: string){
        this.name = name
     }
     public setAge(age: number){
        this.age = age
     }
  }

const usuario: UserAccount = new UserAccount("32565898745", "Maria Delfina Nobre", 72)
console.log(usuario.getName(), usuario.getCpf(), usuario.getAge())

//c)
// Criando funções dentro da classe e acessando-as

// Exercício 2

// type Transaction = {
//     description?: string,
//     value: number,
//     date: string
//   }

//   class transaction {
//     private date: string;
//     private value: number;
//     private description?: string;
    
//     constructor(date: string, value: number, description: string) {
//       this.date = date;
//       this.value = value;
//       this.description = description
//     }
//     public getDate(): string{
//         return this.date
//      }
//      public getValue(){
//         return this.value
//      }
//      public getDescription(){
//         return this.description
//      }
//      public setDate(date: string){
//         this.date = date
//      }
//      public setValue(value: number){
//         this.value = value
//      }
//      public setDescription(description: string){
//         this.description = description
//      }
//   }

//   const transacao : transaction = new transaction("03/09/2022", 72000, "exercicio2" )
// console.log(transacao.getDate(), transacao.getValue(), transacao.getDescription())

// Exercício 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }
    public getAccounts(): UserAccount[]{
        return this.accounts
     }
     public setAccounts(accounts: UserAccount[]){
        this.accounts = accounts
     }
  }

const banco: Bank = new Bank([usuario])
console.log(usuario)