function withdraw(withdrawValue)
{

    let amountOf100 = 0
    let amountOf50 = 0
    let amountOf10 = 0
    let amountOf5 = 0
    let amountOf1 = 0
    let paperCoin = whichPaper(withdrawValue) // Qual nota será retornada conforme o valor restante do saque
    
    while(withdrawValue >= paperCoin)
    {

        switch(paperCoin)
        {

            case 100:

                withdrawValue -= 100
                amountOf100++

            break

            case 50: 

                withdrawValue -= 50
                amountOf50++

            break

            case 10: 

                withdrawValue -= 10
                amountOf10++

            break

            case 5: 

                withdrawValue -= 5
                amountOf5++

            break

            case 1: 

                withdrawValue -= 1
                amountOf1++

            break

        }

        paperCoin = whichPaper(withdrawValue) // Retorna o valor restante de saque

    }
    
    return userScreen(amountOf100, amountOf50, amountOf10, amountOf5, amountOf1) // Retorna a quantidade a sacada em quais notas foram sacadas
}

function whichPaper(withdrawValue) // A função retorna a nota ser utilizada baseada no valor restante do saque
{

    if(withdrawValue >= 100)
    {

        return 100

    }else if(withdrawValue >= 50)
    {

        return 50

    }else if(withdrawValue >= 10)
    {

        return 10

    }else if(withdrawValue >= 5)
    {

        return 5

    }else if(withdrawValue >= 1)
    {

        return 1

    }

}

function userScreen(amountOf100, amountOf50, amountOf10, amountOf5, amountOf1) // A função retorna a quantidade de notas para chegar ao valor de saque
{

    let result = ''

    if(amountOf100 > 0)
    {

        result += `${amountOf100} nota(s) de R$ 100. `

    }

    if(amountOf50 > 0)
    {

        result += `${amountOf50} nota(s) de R$ 50. `

    }

    if(amountOf10 > 0)
    {

        result += `${amountOf10} nota(s) de R$ 10. `

    }

    if(amountOf5 > 0)
    {

        result += `${amountOf5} nota(s) de R$ 5. `

    }

    if(amountOf1 > 0)
    {

        result += `${amountOf1} nota(s) de R$ 1. `

    }

    return result

}

let result = withdraw(77)

console.log(result)
