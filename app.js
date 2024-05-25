const express = require("express");

// Criando uma instância do Express
const app = express();
const port = 3000;

// Rota GET padrão
app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
