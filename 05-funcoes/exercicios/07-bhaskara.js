function bhaskara(ax2, bx, c)
{

    let delta = (bx ** 2) - 4 * ax2 * c

    if(delta <= 0)
    {

        return 'Delta é negativo'

    }else 
    {

        let x = (-bx + (delta) ** 0.5) / 2 * ax2
    
        let y = (-bx - (delta) ** 0.5) / 2 * ax2

        let vector = [x.toFixed(2) , y.toFixed(2)]

        return vector

    }    

}

let result = bhaskara(3, 25, 12)

console.log(result)