/*function consonants(word)
{

    const vowels = ['a', 'e', 'i', 'o', 'u', 'o']
    

    vowels.forEach(vowels => word = word.replace(vowels, ''))

    return word

}*/

function removeVowels(phrase)
{
    return phrase.replace(/[aeiou]/ig, '')
}

console.log(removeVowels('rodrigo'))