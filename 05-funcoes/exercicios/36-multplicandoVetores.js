let array = [2,6,1,9]
let array2 = [3,4,7,5]
let multiplier = 6
let results = []
let results2 = []

function operation(arrayOfNumbers, operator)
{

    for(let i = 0; i < array.length; i++)
    {

        let operations = arrayOfNumbers[i] * operator
        results.push(operations)

    }

    console.log(results)
}

operation(array, multiplier)