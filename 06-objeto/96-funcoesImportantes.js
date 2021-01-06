const pessoa = 
{
    nome: 'Rebeca',
    idade: 2,
    peso: 13

}

console.log(Object.keys(pessoa)) // Pegaremos as chaves do objeto através do Object.keys
console.log(Object.values(pessoa)) // Pegaremos as valores do objeto através do Object.values
console.log(Object.entries(pessoa)) // Vai nos retornar arrays e os subArrays com os valores

Object.entries(pessoa).forEach(element => {

    console.log(`${element[0]}: ${element[1]}`)
    
}); // Aqui vamos percorrer cada elemento do array

// Podemos replicar a situação de forma mais clara da seguinte forma:

Object.entries(pessoa).forEach(([chave, valor]) => {

    console.log(`${chave}: ${valor}`)
    
}); // Utilizamos diretamente 

Object.defineProperty(pessoa, 'dataNascimento', {

    enumerable: true,
    writable: false,
    value: '01/01/2019'
}) // Aqui nós criamos um atributo dentro de pessoa e atribuímos valores a ele como dizer que ele será visível no objeto já criado e não será permitido reescrevê-lo. Por fim atribuamos uma data ao elemento. 

console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)

const dest = {a: 1} // Esse objeto recebe os atributos
const o1 = {b: 2} // Os objetos passados por parâmetro após o dest serão colocados concatenados em dest
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1 ,o2)

console.log(dest)