function meuObjeto(){}
console.log(meuObjeto.prototype) // Retorna um objeto vazio

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__===obj2.__proto__) // retornara true e indica que eles apontam para o mesmo protótipo
console.log(meuObjeto.prototype === obj1.__proto__) // retornara true aqui ele ira retornar para o prototype da função

meuObjeto.prototype.nome = 'Anônimo' // Qualquer objeto que for criado por essa função construtora, no pai dele terá o objeto nome e assim estará acessível para todos esses atributo.
meuObjeto.prototype.falar = function()
{
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar() // Aqui como nada sobrescreveu o objeto o retorno será anônimo
obj2.nome = 'Rafael'
obj2.falar() // Aqui obj2 sobrescreveu o objeto pai e assim retornará Rafael 

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype // Aqui mudamos a referência do protótipo do obj3 para sair de object.prototype para meu objeto.prototype
obj3.nome = 'Obj3'
obj3.falar() // retornará obj3

console.log(meuObjeto.__proto__=== Function.prototype) // a função também tem um protótipo que aponta para o prototype da função