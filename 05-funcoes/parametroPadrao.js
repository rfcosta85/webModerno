// Estratégia 1 para gerar valor padrão 

function soma1(a, b, c)
{

    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c

}

console.log(soma1(), soma1(3), soma1(1, 2 ,3), soma1(0, 0, 0))

// Estratégia 2, 3 e 4 para gerar valor padrão 

function soma2(a, b, c)
{

    a = a !== undefined ? a : 1 // Usamos o valor ternário para dizer que caso seja undefined a receba 1 se não receba a
    b = 1 in arguments ? b : 1 // dentro de arguments existe o índice 1? Se existir pegue o valor de b, senão pegue o valor 1. Aqui b é o segundo indice do array e dessa forma temos q testar b = 1. Se fosse o primeiro teríamos b = 0
    c = isNaN(c) ? 1 : c // Caso c seja um not a number retorne o valor padrão (1), caso contrário retorne c - a estratégia mais segura.
    return a + b + c

}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão do EcmaScript 2015

function soma3(a = 1, b = 1, c = 1)
{

    return a + b + c

}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0 , 0))