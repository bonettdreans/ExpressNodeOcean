const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const lista = ["Mulher maravilha", "Capitã Marvel", "Homem Aranha"];

app.get("/herois", (req, res) => {
    res.send(lista)
})


app.get("/herois/:id", (req, res) => {
  const id = req.params.id;

  const item = lista[id]

  res.send(item)
})

app.listen(port, () => {
  console.log(`connected at http://localhost:${port}`)
})