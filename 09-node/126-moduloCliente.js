const moduloA = require('./126-moduloA') // Para importarmos algo dentro do node usamos o comando require, aqui cabe explicar também a utilização do ./ Ele é usado pq estamos referenciando um módulo que está dentro do sistema e para isso precisamos usar um caminho relativo. O ponto quer dizer que estamos na mesma pasta, e estamos importando dela o/ modulo A

const moduloB = require('./126-moduloB')

console.log(moduloA.ola) // Fala pessoal

console.log(moduloA.bemVindo) // Bem vindo ao node 

console.log(moduloA.ateLogo) // Até próximo exemplo

console.log(moduloA) /*{ ola: 'Fala Pessoal',
bemVindo: 'Bem vindo ao node!',
ateLogo: 'Até próximo exemplo.' }*/

console.log(moduloB.bomDia) // Bom dia

console.log(moduloB.boaNoite()) // Bom dia boa noite

console.log(moduloB) // { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }