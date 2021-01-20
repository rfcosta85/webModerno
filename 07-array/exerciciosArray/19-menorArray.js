function lessNumberOfAnArray(array)
{

    let lessNumber = array[0]

    for(let i = 0; i < array.length; i++)
    {

        if(array[i] < lessNumber)
        {

            lessNumber = array[i]

        }

    }

    return lessNumber
    
}

let arrayOfNumbers = [10, 5, 35, 65]

console.log(lessNumberOfAnArray(arrayOfNumbers))