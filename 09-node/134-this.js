console.log(this === global) // false
console.log(this === module) // false - This é um Objeto que é  exatamente uma referência para module.exports

console.log(this === module.exports) // true
console.log(this === exports) // true

function logThis(){

    console.log('Dentro de uma função...')
    console.log(this === exports) // false
    console.log(this === module.exports) // false
    console.log(this === global) // true

}

logThis() // Dentro de uma função this não aponta para export, então o resultado será false. O mais curioso nisso tudo é que o this dentro de uma função irá apontar para o global