const bodyParser = require('body-parser') /* Será responsável por fazer um bodyParser do body da requisição, quando, você fizer um request e você mandar esses dados para o request, ele vai receber esses dados e deixar ele pronto para serem manipulados dentro do arquivo server.js */ 
const express = require('express')
const app = express()

// MiddleWare 

app.use(express.static('.')) // Ele vai prover dos arquivos estáticos, a partir da aplicação desse middleware 
app.use(bodyParser.urlencoded({ extended: true })) // submit do formulário, vai ler os dados e transformar em objeto
app.use(bodyParser.json()) // Aqui vai transformar o Json em objeto
 
app.listen(8080, () => console.log('Executando...'))