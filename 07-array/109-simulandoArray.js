const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
Object.defineProperty(quaseArray, 'toString', {

    value: function(){return Object.values(this)},
    enumerable: false 

})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray) // >> Repare que o retorno do objeto simulado ficou exatamente igual a um array tradicional [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ] 
