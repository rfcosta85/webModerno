function aula(nome,videoID)
{
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula('Bem Vindo', 123)
const aula2 = new aula('Até Breve', 456)

console.log(aula1, aula2)

// simulando o new 

function novo(f,...params)
{

    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(aula, 'Bem vindo', 123)
const aula4 = novo(aula, 'Até Breve', 456)

console.log(aula3, aula4) // A simulação do new funciona de forma perfeita e assim irá retornar o mesmo resultado apresentado em aula1 e aula2;