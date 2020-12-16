function history(min, max) // Um sorteador de números para simular o número de pontos de uma partida
{

    let points = parseInt(Math.random() * (max - min) + min)

    return points 

}

function matches() // Array para armazenar o total de pontos de cada partida
{

    let games = []


    for(let i = 0; i <= 3; i++)
    {
        
        games.push(history(0, 45))

    }

    return games

}

function statistics() // Array com todos os pontos da temporada
{

    const season = matches()
    
    
    return season

}

function bigger() // Contador de quantas vezes o recorde de pontos foi batido na temporada
{

    
    const data = statistics()
    let isBigger = 0
    let overcome = 0

    for(let i = 0; i <= data.length; i++)
    {

        if(data[i + 1] > data[i])
        {

            isBigger = data[i + 1]
            overcome++

        }

    }

    return overcome
    
}

function lessPoints() // Quando foi a partida com menos pontos na temporada
{

    const data = statistics()
    let isLess = 0

    for(let i = 0; i <= data.length; i++)
    {

        if(data[i + 1] < data[i])
        {

            isLess = data[i + 1]
            

        }

    }

    return isLess

}

const arr = [bigger(), lessPoints()]

console.log(arr)