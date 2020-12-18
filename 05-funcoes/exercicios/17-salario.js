function wage(plan, ActualSalary)
{

    let choice = plan 
    let newSalary = 0
    let increase = 0
    let newPlan = ''

    switch(choice)
    {

        case 1:

            increase = 0.10
            newSalary =  (increase * ActualSalary) + ActualSalary

            newPlan = 'A'

            return `Plano ${newPlan} o que representa aumento de ${increase * 100}% em seu salário atual, sendo assim o seu novo salário será de: ${newSalary.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`

            break

        case 2: 

            increase = 0.15
            newSalary = (increase * ActualSalary) + ActualSalary

            newPlan = 'B'

            return `Plano ${newPlan} o que representa aumento de ${increase * 100}% em seu salário atual, sendo assim o seu novo salário será de: ${newSalary.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`

            break

        case 3: 

            increase = 0.20
            newSalary = (increase * ActualSalary) + ActualSalary

            newPlan = 'C'

            return `Plano ${newPlan} o que representa aumento de ${increase * 100}% em seu salário atual, sendo assim o seu novo salário será de: ${newSalary.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`

            break

        default:

            return 'Esse plano não é válido!'

    }

}

let labelInformation = wage(4, 3500)

console.log(labelInformation)