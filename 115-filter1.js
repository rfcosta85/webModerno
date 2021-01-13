const produtos = [

    {nome: 'Notebook', preco: 2499, fragile: true},
    {nome: 'ipad Pro', preco: 4199, fragile: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragile: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragile: false}

]

console.log(produtos.filter(function(p){

    return p.preco >= 500 && p.fragile == true
}))

