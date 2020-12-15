function triangle(a, b, c)
{

    if(a == b && b == c)
    {

        return console.log('Esse triângulo é Equilátero!')

    }else if(a == b && b != c || a != b && b == c)
    {

        return console.log('Esse triângulo é Escaleno!')

    }else 
    {

        return console.log('Esse triângulo é isósceles!')

    }

}

triangle(1, 6, 2)