function ageInDays(age)
{

    return age * 365

}

let myAgeInDays = ageInDays(35)

console.log(`Dias de vida: ${myAgeInDays.toLocaleString('pt-BR')} dias`)