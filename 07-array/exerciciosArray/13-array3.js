const innominatum =
[

    {name: 'Jackson Júnior', occupation: 'Back-End Developer', country: 'Portugal'},
    {name: 'Rodrigo Costa', occupation: 'Front-End Developer', country: 'Brasil'},
    {name: 'Bruner Andrade', occupation: 'Sales Person', country: 'Portugal'}
]

function innominatumWorkers(object)
{

    let names = []

    for(let workers in object)
    {

        names.push([workers, object[workers]])

    }

    return names

}

console.log(innominatumWorkers(innominatum))