const porta = 3003 //Porta significa um processo

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {

    res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON, via método send

})

app.listen(porta, () => {

    console.log(`O Servidor está executando na porta ${porta}`)

})