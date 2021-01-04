function isNegative(arrayOfNumbers)
{

    let negative = 0

    for(i = 0; i < arrayOfNumbers.length; i++)
    {

        if(arrayOfNumbers[i] < 0)
        {

            negative += 1

        }

    }

    console.log(`Total de números negativos: ${negative}`)
}

let array = [29,87,13,54,43,-2,-34,76,-12]
console.log(isNegative(array))