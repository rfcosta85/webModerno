function whichNumbers(array, number)
{
    let newArray = []

    for(let i = 0; i < array.length; i++)
    {

        
        if(String(array[i]).length == number)
        {
            
            newArray.push(array[i])

        }

    }

    return newArray

}

const array = [24, 1, 0, 19, 645, 3]

console.log(whichNumbers(array, 2))


