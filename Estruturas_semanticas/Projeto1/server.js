const express = require("express");
const app = express();
const porta = 8080;

app.use(express.static('.'))
app.listen(porta, () => {
  console.log(`Executando na porta ${porta}`)
})
