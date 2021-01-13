Array.prototype.map2 = function(callback)
{

    const newArray = []

    for(let i = 0; i < this.length; i++)
    {

        newArray.push(callback(this[i], i, this))

    }

    return newArray
}

const carrinho = [

    '{"nome": "Borracha", "preço": 3.45}',
    '{"nome":"Caderno", "preço": 13.90}',
    '{"nome": "Kit de Lapis", "preço": 41.22}',
    '{"nome": "Caneta", "preço": 7.50}'

]

// Retornar um array apenas com os preços

// Precisamos chamar um json.parse para transformar as strings em um objeto

const paraObjeto = json => JSON.parse(json)

const precos = precosDoProdutos => precosDoProdutos.preço

const paraDinheiro = e => `${parseFloat(e).toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}`

const resultado = carrinho.map2(paraObjeto).map2(precos).map2(paraDinheiro)

console.log(resultado)