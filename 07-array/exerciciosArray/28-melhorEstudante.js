let some = 0
let result = []
let average = 0
let resultOfAverage = []
let names = []

const students = {

    turma:{
        
        alunos: [

            {nome: 'Rodrigo', nota: [9.4, 8.4, 10]},
            {nome: 'André', nota: [8, 7.6, 6.7]},
            {nome: 'Jackson', nota: [10, 9.8, 9.3]}            

        ]

    }

}

function getStudents(array)
{

    for(let i = 0; i < array.turma.alunos.length; i++)
    {
    
        names.push(array.turma.alunos[i].nome)
    
    }

    return names 

}

function getSomeOfNotes(array)
{


    for(let i = 0; i < array.turma.alunos.length; i++, some = 0)
    {

        for(let j = 0; j < array.turma.alunos[i].nota.length; j++)
        {

            some += array.turma.alunos[i].nota[j]

        }

        result.push(some)

    }

    return result

}

function getAverage(array)
{
    

    for(let i = 0; i < result.length; i++)
    {

        average = array[i] / result.length

        resultOfAverage.push(average)

    }

    return resultOfAverage

}

function betterAverage(arrayOfStudents, arrayOfAverage)
{


    if(arrayOfAverage[0] > arrayOfAverage[1] && arrayOfAverage[0] > arrayOfAverage[2])
    {
        
        console.log(` O aluno ${arrayOfStudents.turma.alunos[1].nome} obteve a melhor média da turma com a média de: ${arrayOfAverage[1].toFixed(2)}`)

    }else if(arrayOfAverage[1] > arrayOfAverage[0] && arrayOfAverage[1] > arrayOfAverage[2])
    {
       
        console.log(` O aluno ${arrayOfStudents.turma.alunos[1].nome} obteve a melhor média da turma com a média de: ${arrayOfAverage[1].toFixed(2)}`)

    }else 
    {
        
        console.log(` O aluno ${arrayOfStudents.turma.alunos[2].nome} obteve a melhor média da turma com a média de: ${arrayOfAverage[2].toFixed(2)}`)

    }
    
}

getStudents(students)
getSomeOfNotes(students)
getAverage(result)
        
console.log(betterAverage(students, resultOfAverage))
