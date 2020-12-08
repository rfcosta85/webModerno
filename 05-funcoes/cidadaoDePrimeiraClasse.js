// Criando uma função de forma literal

function fun1() { }

// Armazenar em uma variável

const fun2 = function ()
{


}

// Armazenar em um array 

const array = [function(a,b) {return a + b}]

// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function () {return 'Opa'}

// Passar função como parâmetro

function run(fun)
{

    fun()

}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma função 

function soma(a, b)
{

    return function (c)
    {

        console.log(a + b + c)

    }

}

soma(2, 3)(4)