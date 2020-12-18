function calculator(number1, number2, choice)
{

    let userChoice = choice

    switch(userChoice)
    {


        case 1: 

            return `${number1} + ${number2} = ${number1 + number2}`

            break

        case 2: 

            return `${number1} - ${number2} = ${number1 - number2}`

            break

        case 3: 

            return `${number1} * ${number2} = ${number1 * number2}`

            

        case 4:

            let division = number1 / number2
            return `${number1} / ${number2} = ${division.toFixed(2)}`

            break

        default:

            return 'Operação inválida'

            break

    }        

}

let result = calculator(2, 4, 5)

console.log(result)