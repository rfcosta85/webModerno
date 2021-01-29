// ES8: Object.values/Object.entries

const obj = {a: 1, b: 2, c: 3}

console.log(Object.values(obj)) // [ 1, 2, 3 ]

console.log(Object.entries(obj)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ] >> Array de arrays de chave e valor

// Melhorias na Notação Literal 

const nome = 'Carla'
const pessoa = {

    // Atualmente
    nome,
    opa(){

        return 'Opa!'
    },

    // Antigamente 

    //idade: idade, 
    ola: function(){

        return 'Ola!'

    }

}

console.log(pessoa.nome, pessoa.ola()) // Carla Ola!
console.log(pessoa.nome, pessoa.opa()) // Carla Opa! 

// class 

class Animal{}
class Cachorro extends Animal {

    falar(){

        return 'au au!'
    }
}

console.log(new Cachorro().falar()) // au au!