// Cadeia de protótipos(prototype chain)
const avo = {att1: 'A'} // Aqui o avo terá como prototype o object.prototype
const pai = {__proto__: avo, att2: 'B'} // O pai terá o avo como prototype 
const filho = {__proto__: pai, att3: 'C'} // O filho terá o pai como prototype
console.log(filho.att1) // O resultado será A
console.log(filho.att0) // O resultado será undefined

const carro = {

    velAtual: 0,
    velMax: 200,
    aceleraMAis(delta){

        if(this.velAtual + delta <= this.velMax)
        {
            this.velAtual += delta
        }else 
        {
            this.velAtual = this.velMax
        }
    },
    status()
    {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {

    modelo: 'F40',
    velMax: 324 // Shadowing, aqui a variável vai sombriar variáveis de escopo mais abrangente
}

const volvo = {

    modelo:'V40',
    status(){

        return `${this.modelo}: ${super.status()}` // O super tem uma funcionalidade próxima ao this, a diferença é que ele irá referenciar o seu prototype
    }
}

Object.setPrototypeOf(ferrari, carro) // Aqui estabelecemos uma relação entre ferrari e carro, aqui dizemos que ferrari tem carro como protótipo, esse é um método também é um método especificado pela linguagem.

Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMAis(100)
console.log(volvo.status())

ferrari.aceleraMAis(300)
console.log(ferrari.status()) 