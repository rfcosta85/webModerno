function search(word, array)
{

    const resultado = []

    for(let words of word)
    {

        if(words.includes(array))
        {

            resultado.push(words)

        }

    }

    return resultado

}

let arrayOfWords = ['programação', 'mobile', 'profissional']
console.log(search(arrayOfWords, 'pro'))