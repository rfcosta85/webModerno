const nums = [1, 2, 3, 4, 5]

// O map é um for com propósito - Ele tem internamente um for e transforma o array original para o array resultante

let resultado = nums.map(function(e){

    return e * 2

}) // ela pode receber o próprio valor atual, o índice ou um array completo; Em let resultado, significa que passamos o array nums e dentro do map a função recebe e como argumento, que seria o nosso array nums e multiplica todos os elementos do array por 2.

console.log(resultado) // [2,4,6,8,10]

// Cabe lembrar que o map não altera o array original, veja:

console.log(resultado, nums) // [ 2, 4, 6, 8, 10 ] [ 1, 2, 3, 4, 5 ]

const soma10 = e => e + 10 // soma 10 para cada elemento do array
const triplo = e => e * 3 // multiplica por 3 cada elemento do array 
const paraDinheiro = e => `${parseFloat(e).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}` // Transforma o resultado do array em dinheiro padrão real brasileiro.

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // Aqui usamos 3 funções associadas ao map para manipularmos os arrays. 

console.log(resultado) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]