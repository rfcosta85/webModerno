function howManyTimesTheSameWord(string, char)
{

    let totalOfImpressions = 0

    for(let i = 0; i < string.length;i++)
    {

        if(string[i] === char)
        {

            totalOfImpressions += 1

        }

    }

    return totalOfImpressions

}

console.log(howManyTimesTheSameWord('Rodrigo', 'o'))

