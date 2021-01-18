function wageByHoursOfWork(hoursOfWork, wagePerHour)
{

    let salary = hoursOfWork * wagePerHour

    return `Salário igual a ${salary.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

}

let salaryOfMonth = wageByHoursOfWork(160, 6.54)

console.log(salaryOfMonth)