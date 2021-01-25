const moduloA = require('../../126-moduloA') // Aqui saímos da pasta B para a no primeiro ../ depois saímos da pasta a para a pasta node no segundo ../ e por fim entramos na pasta 126-moduloA. Usamos aqui a técnica de caminhos relativos.

console.log(moduloA.ola)

const http = require('http') // Aqui é um módulo interno do node e assim podemos passar direito o nome do módulo, sem ter que informar o caminho relativo do mesmo.
http.createServer((req, res) => {

    res.write('Bom dia!')
    res.end()

}).listen(8080) // Rode no seu navegador
