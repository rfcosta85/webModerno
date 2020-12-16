function simpleInterest(inicialAmount, interest, applicationTime)
{

    let factor = interest/100      

    return applicationTime * (inicialAmount * factor) + inicialAmount

}

function compoundInterest(inicialAmount, interest, applicationTime)
{

    factor = interest/100

    return inicialAmount * (1 + factor) ** applicationTime

}

let result = simpleInterest(300000, 6, 3)
let compoundResult = compoundInterest(300000, 10, 3)

console.log(`O rendimento em juros simples será de: ${result.toLocaleString('pt-br', {style:'currency' ,currency: 'BRL'})}`)
console.log(`O rendimento em juros compostos será de: ${compoundResult.toLocaleString('pt-br', {style:'currency' ,currency: 'BRL'})}`)
