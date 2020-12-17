function salesCar(models)
{

    let client = models 

    switch(client)
    {

        case 1: 

            return 'Compra efetuada com sucesso'

            break
        case 2: 

            return 'Tem certeza que não prefere este modelo?'
            
            break

        case 3: 

            return 'Tem certeza que não prefere este modelo?'
            
            break

        case 4: 

            return 'Tem certeza que não prefere este modelo?'
            
            break

        default: 

            return 'Não trabalhamos com esse tipo de automóvel aqui'


    }

}

let someone = salesCar(1)

console.log(someone)