Array.prototype.filter2 = function(callback)
{

    const newArray = []

    for(let i = 0; i < this.length; i++)
    {

        if(callback(this[i], i, this))
        {

            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [

    {nome: 'Notebook', preco: 2499, fragile: true},
    {nome: 'ipad Pro', preco: 4199, fragile: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragile: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragile: false}

]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragile

console.log(produtos.filter2(caro).filter2(fragil))
