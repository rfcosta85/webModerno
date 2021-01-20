function howManyWords(word)
{
    let totalWords = 1

    for(let i = 0; i < word.length; i++)
    {

        if(word[i] == ' ' || word[i] == '/')
        {

            totalWords += 1
        }
    }

    return totalWords
}

let word = 'Fluminense Campeão Brasileiro 2020/2021'
console.log(howManyWords(word))