"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//Exercício1
app.get("/test", (req, res) => {
    res.end("Ta funcionando");
});
//Exercício2 em /data.ts
//Exercício3
app.post("/criar", (req, res) => {
    try {
        const { name, price } = req.body;
        const novaLista = data_1.produtos.push({
            id: Date.now().toString(),
            name: name,
            price: Number(price)
        });
        res.send(novaLista);
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
//# sourceMappingURL=index.js.map