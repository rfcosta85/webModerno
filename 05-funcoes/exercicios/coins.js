function real(value)
{

    return console.log(`${value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)
    
}

real(1870.93)