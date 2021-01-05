function arithmeticProgression(termNumber, firstTerm, rate)
{

    for(let i = 0; i < termNumber; i++)
    {

        console.log(firstTerm + rate * i)

    }

    let some = termNumber * (firstTerm + (firstTerm + ((termNumber - 1)* rate))/2) 

    console.log(`Soma: ${some}`)
}

function geometricProgression(termNumber, firstTerm, rate)
{

    for(let i = 0; i < termNumber; i++)
    {

        console.log(firstTerm * (rate ** i))

    }

    let some = (firstTerm * ((rate ** termNumber) - 1)  / (rate - 1))

    console.log(`Soma: ${some}`)
}

console.log(arithmeticProgression(10,10,15))
console.log('\n')
console.log(geometricProgression(10,5,3))