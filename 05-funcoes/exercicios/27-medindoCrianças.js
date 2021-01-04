function growth(kid1, kid2, kidAverage1, kidAverage2)
{

    if(kid1 == kid2)
    {

        if(kidAverage1 > kidAverage2)
        {

            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'

        }else if(kidAverage1 < kidAverage2)
        {

            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'

        }else 
        {

            return `As crianças tem igual altura e crescimento.`
        }

    }else 
    {

        if(kid1 > kid2)
        {

            if(kidAverage1 >= kidAverage2)
            {

                return 'A criança menor não ultrapassará a maior.'

            }else 
            {

                return averageTime(kid2, kidAverage2, kid1, kidAverage1)

            }

        }else 
        {

            if(kidAverage2 >= kidAverage1)
            {

                return 'A criança menor não ultrapassará a maior.'

            }else 
            {

                return averageTime(kid1, kidAverage1, kid2, kidAverage2)

            }
        }

    }

}

function averageTime(shorterHeight, taxShorterHeight, biggerHeight, taxBiggerHeight)
{

    let years = 0

    while(shorterHeight < biggerHeight)
    {

        shorterHeight += taxShorterHeight
        biggerHeight += taxBiggerHeight

        years++

    }
    
    return years
}

let isBigger = growth(150, 140, 2, 4)

console.log(isBigger)