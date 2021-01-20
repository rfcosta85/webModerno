function drawer(number)
{

    let numberDrawn = Math.floor(Math.random()*10 + 1)

    if(numberDrawn === number)
    {

        return `Seu número: ${number} ${'\n'}Parabéns! O número sorteado foi: ${numberDrawn}`

    }else 
    {

        return `Seu número: ${number}${'\n'}Que pena! O número sorteado foi: ${numberDrawn}`
        
    }

    

}

console.log(drawer(1))