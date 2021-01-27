const fs = require('fs')

const caminho = __dirname + '/137-arquivo.json'

// síncrono... Esperando ler o arquivo por completo para seguir. Um arquivo grande irá travar o eventLoop, portanto, tenha cuidado.

const conteudo = fs.readFileSync(caminho, 'utf-8') //Leia um arquivo de forma síncrona

console.log(conteudo)

// Assíncrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {

    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)

})

const config = require('./137-arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {

    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
