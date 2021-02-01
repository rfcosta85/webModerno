function falarDepoisDe(segundos, frase)
{
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(frase)

        }, segundos * 1000)

    })

} // Criamos uma função que recebe dois parâmetros e retorna uma promessa.  Essa promessa receba um setTimeout só para simular um delay. Quando essa promessa é atendida, ele chama a função resolve. 

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // Tratamento de erro

//A promise aceita apenas um parâmetro. Para passar mais coisas é necessário passar via objeto