function writing(number)
{

    let writingNumber = number

    switch(writingNumber)
    {

        case 0: 

            return 'zero'

            break

        case 1: 

            return 'um'

            break

        case 2: 

            return 'dois'

            break 

        case 3: 

            return 'três'

            break 

        case 4: 

            return 'quatro'

            break 

        case 5:

            return 'cinco'

            break

        case 6: 

            return 'seis'

            break

        case 7: 

            return 'sete'

            break

        case 8: 

            return 'oito'

            break 

        case 9: 

            return 'nove'

            break

        case 10: 

            return 'dez'

            break 

        default: 

            return 'Por favor escolha um número dentro do intervalo de 0 - 10'

            break

    }
    
}

let choice = writing(11)

console.log(choice)