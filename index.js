const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const lista = ["Mulher maravilha", "Capitã Marvel", "Homem Aranha"];

app.get("/herois", (req, res) => {
    res.send(lista.filter(Boolean));
})


app.get("/herois/:id", (req, res) => {
  const id = req.params.id - 1;

  const item = lista[id];

  res.send(item);
});

app.post("/herois", (req, res) => {
  const name = req.body.name;

  lista.push(name);

  res.send(" Nome adicionado com sucesso");
});

app.put("/herois/:id", (req, res) => {
  const id = req.params.id;

  const name = req.body;

  lista[id] = name.name

  res.send("Nome atualizado com sucesso");
});

app.delete("/herois/:id", (req, res) => {
  const id = req.params.id - 1;

  delete lista[id];

  res.send("Name Removido com sucesso");
});

app.listen(port, () => {
  console.log(`connected at http://localhost:${port}`)
})