//Object.preventExtensions - Ele não vai permitir que o seu objeto seja estendido, você não consegue adicionar novos atributos a esse objeto, nós podemos excluir, mas não podemos adicionar

const produto = Object.preventExtensions({

    nome:'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // nome mudará de qualquer para borracha
produto.descricao = 'Borracha escolar branca' // Não podemos adicionar objetos
delete produto.tag
console.log(produto)

// Object.seal - Ao utilizar o seal você não consegue adicionar novos atributos, não consegue excluir atributos, mas consegue modificar os atributos já existentes

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // Objeto inexistente logo não será adicionado o atributo, pois não podemos adicionar objetos selados
delete pessoa.nome // Não podemos excluir atributos selados
pessoa.idade = 29 // A idade será alterada 
console.log(pessoa)

// Object.freeze = selado + valores constantes - Aqui não iremos sequer mudar os valores dos objetos

const clube = {nome: 'Fluminense', titulos: 38}
Object.freeze(clube)

console.log('Congelado:', Object.isFrozen(clube))

clube.brasileirao20 = 7 // Não será adicionado um novo objeto
delete clube.nome // Não será deletado
//clube = 'Flamengo' // Ao tentar executar irá ser gerado um erro de tipo

console.log(clube)