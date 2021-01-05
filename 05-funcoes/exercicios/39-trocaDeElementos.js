function changeValues(vectorA, vectorB)
{

    if(vectorA.length == vectorB.length)
    {

        for(let i = 0; i < vectorA.length; i++)
        {

            vectorA[i] = vectorA[i] + vectorB[i]
            vectorB[i] = vectorA[i] - vectorB[i]
            vectorA[i] = vectorA[i] - vectorB[i]
        }

        console.log(`Novo Vetor A: ${vectorA}`)
        console.log(`Novo Vetor b: ${vectorB}`)

    }else 
    {

        console.log('Vetores de tamanho diferentes.') 
    }
    
}

let vectorA = [1,2,3]
let vectorB = [4,5,6]

changeValues(vectorA, vectorB)