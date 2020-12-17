function fair(fruit)
{

    let cart = fruit

    switch(cart)
    {

        case 1: 

            return 'Maçã!!?? Nós não vendemos essa fruta aqui'

            break

        case 2: 

            return 'Kiwi! Estamos com escassez de kiwis'

            break

        case 3: 

            return 'Melancia! Aqui está, são 3 reais o quilo'

            break 

        default: 

            return 'Infelizmente não possuímos esse tipo de produto aqui...'

            break

    }

}

let myCart = fair(3)

console.log(myCart)