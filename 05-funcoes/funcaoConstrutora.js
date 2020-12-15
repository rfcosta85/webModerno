function carro(velocidadeMaxima = 200, delta = 5)
{

    // atributo privado

    let velocidadeAtual = 0

    // Método público

    this.acelerar = function()
    {

        if(velocidadeAtual + delta <= velocidadeMaxima)
        {

            velocidadeAtual += delta

        }else 
        {

            velocidadeAtual = velocidadeMaxima

        }

    }

    // método público 

    this.getVelocidadeAtual = function()
    {

        return velocidadeAtual

    }

}

const uno = new carro //Aqui tb poderíamos por o (),está sem pq não estamos passando parâmetro, então podemos omitir o ().
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())