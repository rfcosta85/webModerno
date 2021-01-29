// Arrow Function

const soma = (a, b) => a + b  //Uma função arrow é sempre anonima, você cria uma constante e atribui a função a ela. 
console.log(soma(2, 3)) // 5

// Arron Function (this) --> O this da função arrow está associado ao local em que a função foi escrita. 

const lexico1 = () => console.log(this === exports) 
lexico1() // true

// Parâmetro default 

function log(texto = 'Node')
{

    console.log(texto)

}

log() // node 
log(null) // nulo 
log('Sou mais forte') // Sou mais forte

// Operador rest  >> A ideia é ter parâmetros variáveis e os parâmetros serão agrupados em um array internamente dentro da função. Mas se você estiver trabalhando dentro de um array ou um objeto ele será chamado de spread no sentido de espalhar. 

function total(...numeros)
{

    let total = 0
    numeros.forEach(n => total += n)
    
    return total

}

console.log(total(2, 3, 4, 5)) // 14