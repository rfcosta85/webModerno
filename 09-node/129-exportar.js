console.log(module.exports === this) // O this é uma referência ára module.exports, pelo qual o retorno desse console deverá ser true

console.log(module.exports === exports) // o module exports aponta para exports, pelo qual o retorno também deverá ser true

this.a = 1 // Significa agora que o "a" está visível para fora do arquivo
exports.b = 2 // Significa agora que o "b" está visível para fora do arquivo
module.exports.c = 3 // Significa agora que o "c" está visível para fora do arquivo

exports = null
console.log(module.exports) // { a: 1, b: 2, c: 3 } >>> Repare que mesmo exports recebendo null, ainda temos o resultado de a, b e c sendo exibido no console. Isso acontece porque exports é simplesmente uma outra variável que aponta para um mesmo objeto. Então tanto faz como você faz a exportação, elas serão apontados para o mesmo objeto

exports = {

    nome: 'Teste'
} 

console.log(module.exports) // Aqui continuaremos retornando { a: 1, b: 2, c: 3 }, pois na verdade quem pe retornado é o module.exports, mesmo que você tenha mudado a referência duas vezes.

// Então para mudarmos os dados de exports deveremos agir da seguinte maneira:

module.exports = { publico: true }

// Então para atribuir um novo objeto para ser exportado, você obrigatoriamente deverá usar o module.exports