const sequencia = 
{
    _valor: 1, //Convenção... Estamos mostrando que é uma variável que é pretendida que seja acessada somente de forma interna. Note que isso não garante que o objeto seja privado.
    get valor(){return this._valor++},
    set valor(valor) {

        if(valor > this._valor)
        {

            this._valor = valor
        } // Aqui a sequência sempre vai para frente.
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // Note que essa chamada não irá surtir efeito devido a condição que criamos acima
console.log(sequencia.valor, sequencia.valor)