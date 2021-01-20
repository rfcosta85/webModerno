function average(array)
{

    let total = 0
    let average = 0

    for(let i = 0; i < numbers.length; i++)
    {

        total += array[i]

    }

    average = total/numbers.length

    return average

}

let numbers = [6, 4, 2]

console.log(average(numbers))


