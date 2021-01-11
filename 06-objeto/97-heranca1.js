const ferrari = {

    modelo: 'F40',
    velMax: 340

}

const volvo = {

    modelo: 'V40',
    velMax: 200

}

console.log(ferrari.__proto__) // A partir daqui conseguimos acessar o protótipo de um objeto
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)