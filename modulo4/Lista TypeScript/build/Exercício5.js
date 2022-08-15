console.log("Exercícios5");
const array = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
];
const arrayEmail = array.filter((objeto) => {
    const { role } = objeto;
    if (role === "admin")
        return array;
}).map(objeto => objeto.email);
console.log(arrayEmail);
//# sourceMappingURL=Exerc%C3%ADcio5.js.map