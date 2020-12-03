function tratarErroELancar(erro)
{

    throw new Error('Error:...Ta zoado!')

}

function imprimirNomeGritado(obj)
{
    try
    {

        console.log(obj.name.toUpperCase() + '!!!')

    }catch(e)
    {

        tratarErroELancar(e)

    }

    finally{

        console.log('Programa finalizado!')
    }
    

}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)