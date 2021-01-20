function creatingAnArray(elements)
{

    let newElements = []

    for(let i = 0; i < elements.length; i++)
    {

        if(typeof elements[i] === 'number')
        {

            newElements.push(elements[i])

        }
    }

    return newElements
}

let OriginalArray = ['Lucrécia', 1, 3, 'Fluminense', 2021]

console.log(creatingAnArray(OriginalArray))