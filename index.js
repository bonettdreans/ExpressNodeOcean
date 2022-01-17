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

app.listen(port, () => {
  console.log(`connected at http://localhost:${port}`)
})