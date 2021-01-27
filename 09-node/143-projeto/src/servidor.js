const porta = 3003 //Porta significa um processo

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {

    res.send(bancoDeDados.getProdutos()) // Converter para JSON, via método send

})

app.get('/produtos/:id', (req, res, next) => {

    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {

    const produto = bancoDeDados.salvarProduto({

        nome: req.body.name,
        preco: req.body.preco
    })

    res.send(produto) //JSON
})

app.listen(porta, () => {

    console.log(`O Servidor está executando na porta ${porta}`)

})