// Toda função tem um atributo chamado .prototype o que irá permitir que você faça coisas do tipo

String.prototype.reverse = function()
{

    return this.split('').reverse().join('')

}// Nós podemos reverter uma string com o prototype.reverse

console.log('Escola Cod3r'.reverse()) // O retorno será o texto inteiro revertido, assim o retorno seria algo do tipo: "r3doc alocsE" Lembrando que esse método não existe, ele foi criado por nós via função

Array.prototype.first = function()
{
    return this[0]
} // aqui vamos pegar o primeiro elemento do array e retornando

console.log([1, 2, 3, 4, 5].first())