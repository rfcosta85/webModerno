function firstAndLastElements(array)
{

    let lastElementOfArray = array.pop()
    let firstElementOfArray = array.shift()

    return `Primeiro elemento do array: ${firstElementOfArray} ${'\n'}Último elemento do Array: ${lastElementOfArray}`

}

let elements = [1,4,8,10]

console.log(firstAndLastElements(elements))