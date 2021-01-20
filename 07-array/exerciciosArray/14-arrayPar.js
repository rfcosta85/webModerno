const array = [1, 2, 5, 6, 12, 30, 27]

function pairArray(array)
{

    let newArray = []

    for(let i = 0; i < array.length; i++)
    {

        if(array[i] % 2 == 0 && i % 2 == 0)
        {

            newArray.push(array[i])

        }

    }

    return newArray
}

console.log(pairArray(array))