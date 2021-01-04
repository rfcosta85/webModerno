function biggerAndSmaller(arrayOfNumbers)
{

    let bigger = arrayOfNumbers[0]
    let smaller = arrayOfNumbers[0]

    for(i = 0; i < arrayOfNumbers.length; i++)
    {

        if(arrayOfNumbers[i] > bigger)
        {
            
            bigger = arrayOfNumbers[i]

        }

        if(arrayOfNumbers[i] < smaller)
        {

            smaller = arrayOfNumbers[i]

        }

    }

    console.log('\n')
    console.log(`Maior número do vetor: ${bigger}`)
    console.log(`Menor número do vetor: ${smaller}`)
}

let array = [27, 4, 8, 106, 13, 17, 29, 53]
console.log(biggerAndSmaller(array))