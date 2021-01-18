function maximumAndMinimum(userNumber, minimum, maximum, inclusive = false)
{

    if(maximum < minimum)
    {

        return `Operação inválida! ${maximum} < ${minimum}`
    }

    if(inclusive == true && userNumber > minimum && userNumber < maximum)
    {

        return true

    }else 
    {

        return false
    }

}

console.log(maximumAndMinimum(13,5,32,true))