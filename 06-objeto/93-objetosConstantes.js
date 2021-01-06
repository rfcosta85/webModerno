// pessoa -> 123 -> {...}

const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro' // Aqui nós não mudamos a referência da constante, afinal ela não pode ser alterada, o que foi alterado aqui foram os dados que constam nesse endereço, que nesse caso é um objeto.

console.log(pessoa)

Object.freeze(pessoa) // A partir daqui qualquer mudança nos atributos de pessoa não irão ocorrer, pois o objeto encontra-se agora congelado e seus atributos também

pessoa.nome = 'Maria'
delete pessoa.nome 

console.log(pessoa)

// Abaixo nós criamos um objeto já com o seus atributos congelados, pelo qual que qualquer tentativa de mudança não irá ter qualquer efeito.

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)