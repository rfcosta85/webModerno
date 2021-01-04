function average(arrayOfNumbers)
{

    let average
    let some = 0

    for(i = 0; i < arrayOfNumbers.length; i++)
    {

        some += arrayOfNumbers[i]

    }

    average = some / arrayOfNumbers.length

    return average
}

let array = [27,65,94,134,26,19]
let result = average(array)
console.log(`Média: ${result.toFixed(2)}`)