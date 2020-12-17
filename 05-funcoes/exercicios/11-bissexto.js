function leap(year)
{
    
    
    if(year <= 0)
    {

        return false

    }else if(year % 400 == 0)    
    {

        return true

    }else if(year % 100 == 0)
    {

        return false

    }else if(year % 4 == 0)
    {

        return true

    }else 
    {

        return false

    }   

}

let isLeap = leap(2042)

if(isLeap == true)
{

    console.log('Ano bissexto')

}else 
{

    console.log('Não é Bissexto')

}

