function healthCare(age)
{

    let baseValue = 100
    let children = baseValue + 80
    let youngs = baseValue + 50
    let middleAge = baseValue + 95
    let thirdAge = baseValue + 130
    let planValues = '' 
    
    if(age <= 10)
    {
        
        planValues = 'Plano Children' + '\n' + 'Valor do plano: ' + children.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        return planValues

    }

    if(age <= 30)
    {
        
        planValues = 'Plano youngs' + '\n' + 'Valor do plano: ' + youngs.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        return planValues

    }

    if(age <= 60)
    {
        
        planValues = 'Plano middleAge' + '\n' + 'Valor do plano: ' + middleAge.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        return planValues

    }

    if(age > 60)
    {
        
        planValues = 'Plano thirdAge' + '\n' + 'Valor do plano: ' + thirdAge.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        return planValues

    }

}

let howMuch = healthCare(67)

console.log(howMuch)