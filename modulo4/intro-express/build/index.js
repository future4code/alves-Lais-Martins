"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    console.log("Hello from Express");
});
app.listen(3003, () => {
    console.log("Servidor rodando na porta http://localhost:3003");
});
const ex3 = [
    {
        id: '00',
        name: "Ana Laura Pimentel",
        phone: 11957184719,
        email: "alpimentel@labenu.com.br",
        website: "https://www.google.com"
    },
    {
        id: '01',
        name: "Juliana Conceição",
        phone: 11987594715,
        email: "c.juli@labenu.com.br",
        website: "https://www.google.com"
    },
    {
        id: '02',
        name: "Carmelita Lins Gouveia",
        phone: 11964987858,
        email: "camelins@labenu.com.br",
        website: "https://www.google.com"
    },
    {
        id: '03',
        name: "Lorena Simbal Machado",
        phone: 11985203698,
        email: "lo.simbal@labenu.com.br",
        website: "https://www.google.com"
    },
    {
        id: '04',
        name: "Cordélia MacBell",
        phone: 11948592648,
        email: "macdelia@labenu.com.br",
        website: "https://www.google.com"
    }
];
app.get("/user3", (req, res) => {
    const usuarios = ex3.map((user) => {
        return user;
    });
    res.send(usuarios);
    res.end();
});
const ex6 = [
    {
        id: '00',
        title: "Brócolis",
        body: "Brócolis é bom demais",
        userId: "labeuser",
    },
    {
        id: '01',
        title: "Gema",
        body: "Por que a carioca não pode ser da Clara?",
        userId: "labeuser",
    },
    {
        id: '02',
        title: "Pomodoro",
        body: "Para espaguete e tdah",
        userId: 100,
    },
    {
        id: '03',
        title: "Estricnina",
        body: "Soa melhor como proparoxitona",
        userId: 100
    },
    {
        id: '04',
        title: "Bee",
        body: "Se joga, abelhinha!",
        userId: "ultimo"
    }
];
app.get("/posts6", (req, res) => {
    const posts = ex6.map((post) => {
        return post;
    });
    res.send(posts);
    res.end();
});
app.get("/ex3/:idUser", (req, res) => {
    const idUsuario = ex3.filter((id) => {
        return id.id;
    });
    res.send(idUsuario);
    res.end();
});
