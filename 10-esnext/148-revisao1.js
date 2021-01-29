// let e const --> Lançados no ES06

{

    var a = 2 // Se, escopo --> Pode ser acessada de forma global
    let b = 3 // Pertence ao escopo do bloco --> Só poderá ser acessado dentro do bloco

}

// Template String

// O template também considera tab e quebra de linha

const produto = 'ipad'
console.log(`${produto} 
é caro!`) // Aqui o console irá pular uma linha.

// Destructuring 

// É  forma de você tirar de dentro de uma estrutura algo (seja objeto, array, string etc)

const [l, e, ...tras] = "Cod3r" // Aqui a c será atribuída para a variável l, d para a variável e, d3r para a variável tras

console.log(l, e, tras) // C o [ 'd', '3', 'r' ]

const [x, y] = [1, 2]

console.log(x, y) // 1 2

const [z, w] = [1, 2, 3] // Podemos ter um array maior que o destructuring e o retorno continuará sendo 1, 2

console.log(z, w) // 1 2

const [c, ,b] = [1, 2, 3] // Podemo pegar o exemplo que quisermos, pode exemplo abaixo vamos pegar os elementos da posição 0 e 2

console.log(c, b) // 1 3

const { idade, nome } = { nome: 'Ana', idade: 9}  // Podemos desestruturar um objeto, tirando os atributos la de dentro. Nós criamos aqui duas constantes nome e idade,  que foram tirados de dentro de uma estrutura de um objeto o atributo idade e o atributo nome

console.log(idade, nome) // 9 'ana'