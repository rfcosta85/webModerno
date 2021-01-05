let stack = [1,2,3,4,5]
let add = [6,7,8,9,10]

function addElements(inicialVector, addVector)
{

    for(let i = 0; i < add.length; i++)
    {

        console.log(add[i])
        inicialVector.push(addVector[i])

    }

    console.log(`Vetor adicionado: ${addVector}`)
    console.log(`Vetor Resultado: ${inicialVector}`)

}

addElements(stack, add)