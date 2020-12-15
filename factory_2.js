function criarProduto(nome, preco)
{

    return{

        nome, 
        preco,
        desconto: 0.1

    }
}

console.log(criarProduto('Playstation 5', 4999.90))
console.log(criarProduto('Xbox Series X', 4999.90))
console.log(criarProduto('Notebook Dell 8gb', 8789.65))