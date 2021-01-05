let array = [2,6,1,9]
let multiplier = 6
let results = []

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