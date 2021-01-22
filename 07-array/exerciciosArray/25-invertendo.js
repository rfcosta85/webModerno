function inverter(object)
{
    const invertedObject = {}

    Object.entries(object).forEach(pairKeyOfValue => {

        const key = 0
        const value = 1

        invertedObject[ pairKeyOfValue[value] ] = pairKeyOfValue[key]

    })

    return invertedObject
}

const object = [

    {a: 1},
    {b: 2},
    {c: 3}

]

console.log(inverter(object))

