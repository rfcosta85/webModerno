const pessoa = 
{

    nome: 'Ana',
    idade: 5,
    endereco: 
    {
        
        logradouro: 'Rua ABC',
        numero: 1000

    }
}

const { nome, idade } = pessoa // aqui essas chaves representam a sintaxe do destructuring. Aqui estamos dizendo para tirar de dentro do objeto pessoa, o atributo nome e idade. 

console.log(nome, idade)

const { nome: n, idade: i} = pessoa // Aqui retiramos os atributos nome e idade do objeto pessoa e pedimos para criar variáveis n para receber nome e i para receber idade. 

console.log(n, i)

const {endereco: {logradouro, numero}} = pessoa 

console.log(logradouro, numero)