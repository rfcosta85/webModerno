class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends Avo{
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) // Para instanciar sobrenome do protótipo avo e assim usamos o super
        this.profissao = profissao
    }

} // O extends mostra que uma classe ou funçao tem um protótipo gerado da classe avo

class Filho extends pai {

    constructor() {

        super('Silva') // Esse silva passa o pai que passa para o avô
    }
}

const filho = new Filho

console.log(filho)
