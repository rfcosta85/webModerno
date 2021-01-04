function annuity(month, value)
{
    
    if(month > 0 && month < 13)
    {

        let monthlyPayment = month - 1

        return (value * ((1 + (5/100))**monthlyPayment)).toFixed(2)

    }else 
    {

        return 'Mês inválido!'

    }
}

let payment = annuity(1, 500)

console.log(payment)