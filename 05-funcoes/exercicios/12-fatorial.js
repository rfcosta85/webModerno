function factorial(number)
{

    var result = number
    
    for(let i = number - 1; i >= 1; i--)
    {

        result *= i
       
    }

   return result.toLocaleString('pt-br') 

}

let factorialResult = factorial(10)

console.log(factorialResult)





