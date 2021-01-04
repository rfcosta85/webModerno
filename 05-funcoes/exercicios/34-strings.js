function equal(string1, string2)
{

    let phrase1 = string1
    let phrase2 = string2
    let upperPhrase1 = phrase1.toUpperCase()
    let upperPhrase2 = phrase2.toUpperCase()

    if(upperPhrase1 === upperPhrase2)
    {

        return true

    }else
    {

        return false
    }

}

let phrases = equal('Fluminense', 'fluminense')
console.log(`As frases são iguais? ${phrases}`)