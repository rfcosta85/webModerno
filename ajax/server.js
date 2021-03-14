const bodyParser = require('body-parser') /* Será responsável por fazer um bodyParser do body da requisição, quando, você fizer um request e você mandar esses dados para o request, ele vai receber esses dados e deixar ele pronto para serem manipulados dentro do arquivo server.js */ 
const express = require('express')
const app = express()

// MiddleWare 

app.use(express.static('.')) // Ele vai prover dos arquivos estáticos, a partir da aplicação desse middleware 
app.use(bodyParser.urlencoded({ extended: true })) // submit do formulário, vai ler os dados e transformar em objeto
app.use(bodyParser.json()) // Aqui vai transformar o Json em objeto

const multer = require('multer')

const storage = multer.diskStorage ({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    } // Aqui teremos sempre nomes diferentes de arquivos, impedindo que ele seja sobrescrito 

}) // Serve para configurar a pasta em que vc irá mandar o arquivo assim como personalizar o nome do arquivo no momento de salvar ele. O upload de arquivo, normalmente você coloca ele dentro de uma pasta e não de dentro do banco de dados

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => { 
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro')
        }

        res.end('Concluído com Sucesso.')
    })
})
 
app.listen(8080, () => console.log('Executando...'))