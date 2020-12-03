function rand([min = 0, max = 1000])
{

    if(min > max) [min, max] = [max, min] // Se min > max então o min = max e o max = min

    const valor = Math.random() * (max - min) + min 

    return Math.floor(valor)

}

console.log(rand([50, 40]))