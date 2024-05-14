const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Conexao Inicializando")
});

app.listen(5000, () => {
    console.log("Inicializando na Porta: 5000")
});