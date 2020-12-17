function estacio(grade1, grade2)
{

    let average = (grade1 + grade2) / 2

    if(average % 5 > 2)
    {

        average += (5 - (average % 5))

    }else 
    {

        average = average

    }

    if(average >= 40)
    {

        return `${average.toFixed(2)} Aluno Aprovado!`

    }else 
    {

        return `${average.toFixed(2)} Aluno Reprovado!`

    }

}

let result = estacio(38,38)

console.log(result)