const pai = {

    nome: 'Pedro',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai) // Aqui criamos um objeto novo, tendo como protótipo o objeto pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai, {

    nome: {value: 'Bia', writable: false, enumerable: true}
}) // Aqui já como segundo parâmetro após o pai, definimos todos os atributos que queremos ter no objeto filha2. Note também que colocamos um atributo impedido de ser alterado e permitindo que ele seja listado 

console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log(Object.keys(filha1)) // Note que aqui pedimos para o console exibir os atributos de filha1

for(let key in filha2)
{
    filha2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por herança ${key}`)
}// O método hasOwnProperty vai nos dizer se a propriedade pertence ao objeto em questão, o for irá percorrer pelo objeto retornara o atributo caso ele pertença a filha, caso não ele retornará com uma mensagem auxiliar o atributo pertencente ao protótipo em questão. Você pode por exemplo com isso, determinar que seja utilizado apenas os atributos do seu próprio objeto, usando o hasOwnProperty retornando true como condição, deixando de lado os atributos do protótipo.