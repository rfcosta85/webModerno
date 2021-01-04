let vectorInteger = [2,9,16,24]
let vectorString = ['Fred', 'Alan', 'Jessica', 'Pedro']
let vectorDouble = [1.2, 3.7, 4.8, 26.9]

function concatenate(...args)
{

    result = []
    
    for(i = 0; i < args.length; i++)
    {

        result = result.concat(arguments[i])
    }

    return result

}

console.log(concatenate(vectorInteger, vectorDouble))
console.log(concatenate(vectorDouble,vectorString))