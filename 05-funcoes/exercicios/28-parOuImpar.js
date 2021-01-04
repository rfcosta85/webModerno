function evenOrOdd(number1, number2, number3, number4, number5, number6)
{

    let even = 0
    let odd = 0
    let array = []

    array.push(number1)
    array.push(number2)
    array.push(number3)
    array.push(number4)
    array.push(number5)
    array.push(number6)

    for(index = 0; index < 6; index++)
    {

        if(array[index] % 2 == 0)
        {

            even += 1

        }else 
        {

            odd += 1
        }

    }

    console.log(`Total de números pares: ${even}`)
    console.log('\n')
    console.log(`Total de números ímpares: ${odd}`)

}

console.log(evenOrOdd(2,5,9,12,9,18))