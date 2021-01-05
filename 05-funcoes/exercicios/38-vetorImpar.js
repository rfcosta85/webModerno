function odd(begin, end)
{

    for(let i = begin; i <= end; i++)
    {

        if(i % 2 == 1)
        {

            console.log(i)
        }

    }
}

console.log(odd(0, 100))