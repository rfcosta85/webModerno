function addPositiveSymbols(numberOfSymbols)
{

    let result = ''

    for(let i = 0; i < numberOfSymbols; i++)
    {

        result += '+'

    }

    return `${result}` 

}

console.log(addPositiveSymbols(2))
