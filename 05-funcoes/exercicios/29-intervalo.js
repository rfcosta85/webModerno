function interval(arrayOfNumbers)
{

    let isOn = 0
    let isOut = 0

    for(i = 0; i < arrayOfNumbers.length; i++ )
    {

        if(arrayOfNumbers[i] >= 10 && arrayOfNumbers[i] <= 20)
        {

            isOn += 1

        }else 
        {

            isOut += 1

        }

    }

    console.log(`Dentro do Intervalo: ${isOn}`)
    console.log('\n')
    console.log(`Fora do Intervalo: ${isOut}`)
}

let array = [11,29,18,10,12,45,10,94]
console.log(interval(array))