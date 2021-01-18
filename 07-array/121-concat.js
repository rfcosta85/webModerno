const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Uoxinton', 'Uesclei']

const todos = filhas.concat(filhos)

console.log(todos) // [ 'Valeskah', 'Cibalena', 'Uoxinton', 'Uesclei' ]

// O concat funciona da mesma forma que o map, retornando um novo array sem alterar o array original, conforme será visto no console abaixo

console.log(todos,filhas,filhos) // [ 'Valeskah', 'Cibalena', 'Uoxinton', 'Uesclei' ] [ 'Valeskah', 'Cibalena' ] [ 'Uoxinton', 'Uesclei' ]

// Podemos ainda adicionar informações que não estavam presentes no array original

const todos2 = filhas.concat(filhos, 'Fulano') // Eu poderia continuar add nomes fora do array sem problemas, não necessariamente se limita a apenas 1 nome adicionado.

console.log(todos2) // [ 'Valeskah', 'Cibalena', 'Uoxinton', 'Uesclei', 'Fulano' ]

//Veja outras possibilidades

console.log([].concat([1, 2], [3, 4], 5, [[6,7]])) // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
