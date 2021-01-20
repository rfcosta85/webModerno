const monthExpenses = [

    {name: 'Netflix', category: 'Entretenimento', price: 29.90},
    {name: 'Amazon Prime', category: 'Entretenimento', price: 9.90},
    {name: 'GloboPlay + Disney+', category: 'Entretenimento', price: 34.90},
    {name: 'Xbox GamePass', category: 'Entretenimento', price: 38.90},
    {name: 'Curso em Vídeo', category: 'Educação', price: 19.90},
    {name: 'Estácio', category: 'Educação', price: 280},
    {name: 'Claro', category: 'Serviços', price: 648},
    {name: 'Carrefour', category: 'Alimentação', price: 250}

]

function totalExpenses(array)
{

    let total = 0

    for(let i = 0; i < monthExpenses.length; i++)
    {

        total += array[i].price

    }

    return total

}

function totalEntretenimentoExpensive(array)
{

    let totalEntretenimento = 0
    

    for(let i = 0; i < monthExpenses.length; i++)
    {

        if(array[i].category == 'Entretenimento')
        {

            totalEntretenimento += array[i].price

        }

    }

    return totalEntretenimento
}

function totalEducacaoExpensive(array)
{

    let totalEducacao = 0
    

    for(let i = 0; i < monthExpenses.length; i++)
    {

        if(array[i].category == 'Educação')
        {

            totalEducacao += array[i].price

        }

    }

    return totalEducacao
}

function totalClaroExpensive(array)
{

    let totalclaro = 0
    

    for(let i = 0; i < monthExpenses.length; i++)
    {

        if(array[i].category == 'Serviços')
        {

            totalclaro += array[i].price

        }

    }

    return totalclaro
}

function totalCarrefourExpensive(array)
{

    let totalCarrefour = 0
    

    for(let i = 0; i < monthExpenses.length; i++)
    {

        if(array[i].category == 'Alimentação')
        {

            totalCarrefour += array[i].price

        }

    }

    return totalCarrefour
}



console.log(`${'\n'}Total gasto no mês: ${totalExpenses(monthExpenses).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(`${'\n'}Total gasto com Entretenimento: ${totalEntretenimentoExpensive(monthExpenses).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(`${'\n'}Total gasto com Educação: ${totalEducacaoExpensive(monthExpenses).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(`${'\n'}Total gasto com Serviços: ${totalClaroExpensive(monthExpenses).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log(`${'\n'}Total gasto com Alimentação: ${totalCarrefourExpensive(monthExpenses).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} ${'\n'}`)