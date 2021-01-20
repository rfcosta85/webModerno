function bissextile(year)
{

    if(year % 4 == 0 && year % 100 != 0)
    {

        return `${year} é bissexto`

    } else if(year % 100 == 0 && year % 400 == 0)
    {

        return `${year} é bissexto`

    }else 
    {

        return `${year} não é bissexto`

    }

}

console.log(bissextile(2004))