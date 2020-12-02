function rand({min = 0, max = 1000}) // Aqui significa que vamos passar um objeto para uma função, a função já tira de dentro do objeto o atributo min e max e me entregar prontos
{

    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)

}

const obj = {max: 50, min: 40}
console.log(rand(obj))