function multiplicationWithoutOperator(firstNumber, multiplier)
{

    if(firstNumber < 0 || multiplier < 0)
    {

        return 'Por favor insira um número positivo!'

    }else
    {

        let result = 0

        for(let i = 0; i < multiplier; i++)
        {

            result += firstNumber

        }
        
        return result

    }

}

console.log(multiplicationWithoutOperator(10,3))