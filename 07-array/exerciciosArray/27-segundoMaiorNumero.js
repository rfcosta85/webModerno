function sortFunction(a, b)
{

    return (a + b)

}

function secondLargest(array)
{

    return array[1]

}

let data = [3,5,1,7,3,9,10]
let newData = data.sort(sortFunction)

console.log(`Array ordenado: ${newData}`)
console.log(`Segundo maior elemento do Array Ordenado: ${secondLargest(newData)}`)