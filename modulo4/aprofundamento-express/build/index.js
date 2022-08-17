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
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓");
});
const afazeres = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    }
];
app.get("/completed", (request, response) => {
    const filter = afazeres.filter((tarefa) => {
        return tarefa.completed === true;
    });
    if (afazeres === filter) {
        response.status(200).send(filter);
    }
    else {
        response.status(401).send("Nenhum resultado encontrado.");
    }
    response.status(200).send(filter);
});
//# sourceMappingURL=index.js.map