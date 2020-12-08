function soma()
{

    let soma = 0 

    for(i in arguments)
    {

        soma += arguments[i]

    }

    return soma

}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log('somamos 0', ' somamos 1', ' somamos 1.1 + 2.2 + 3.3 ', ' Criamos também um array de string')