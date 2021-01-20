function removeElement(object, name)
{
    
    const copy = Object.assign({}, object)
    delete copy[name]

    return copy

}

const carrinho = [

    '{"name": "Borracha", "preço": 3.45}',
    '{"name":"Caderno", "preço": 13.90}',
    '{"name": "Kit de Lapis", "preço": 41.22}',
    '{"name": "Caneta", "preço": 7.50}'

]

let result = removeElement(carrinho, 'Kit de Lapis')

console.log(result)
//console.log(carrinho)