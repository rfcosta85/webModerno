function average(code, note1, note2, note3)
{

    let weightedNote1
    let weightedNote2
    let weightedNote3
    let weightedAverage

    if(note1 >= note2 && note1 > note3)
    {

        weightedNote1 = note1 * 4
        weightedNote2 = note2 * 3   
        weightedNote3 = note3 * 3
        weightedAverage = (weightedNote1 + weightedNote2 + weightedNote3) / (4 + 3 + 3)    

    }else if(note2 >= note1 && note2 > note3)
    {

        weightedNote1 = note1 * 3
        weightedNote2 = note2 * 4
        weightedNote3 = note3 * 3
        weightedAverage = (weightedNote1 + weightedNote2 + weightedNote3) / (3 + 4 + 3)   

    }else 
    {

        weightedNote1 = note1 * 3
        weightedNote2 = note2 * 3
        weightedNote3 = note3 * 4
        weightedAverage = (weightedNote1 + weightedNote2 + weightedNote3) / (3 + 3 + 4)   

    }    
    
    if(weightedAverage >= 5)
    {

        console.log('\n')
        console.log(`Código do Aluno: ${code}`)
        console.log('\n')
        console.log(`1° nota: ${note1.toFixed(2)}`)
        console.log('\n')
        console.log(`2° nota: ${note2.toFixed(2)}`)
        console.log('\n')
        console.log(`3° nota: ${note3.toFixed(2)}`)
        console.log('\n')
        console.log(`Média do Aluno: ${weightedAverage.toFixed(2)}`)
        console.log('Situação: APROVADO')
        console.log('\n')

    }else 
    {

        
        console.log('\n')
        console.log(`Código do Aluno: ${code}`)
        console.log('\n')
        console.log(`1° nota: ${note1.toFixed(2)}`)
        console.log('\n')
        console.log(`2° nota: ${note2.toFixed(2)}`)
        console.log('\n')
        console.log(`3° nota: ${note3.toFixed(2)}`)
        console.log('\n')
        console.log(`Média do Aluno: ${weightedAverage.toFixed(2)}`)
        console.log('Situação: REPROVADO')
        console.log('\n')

    }
}

let studentAverage = average(1, 9, 1.5, 2.9)
console.log(studentAverage)