// tagged templates - processa o template string dentro de uma função 

function tag(partes, ...valores)
{

    console.log(partes)
    console.log(valores)
    return 'Outra String'

}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`) // Se tirarmos a palavra tag e executarmos irá surgir no console apenas Gui está aprovado, com o teremos o seguinte retorno.

/*

[ '', ' está ', '.' ]
[ 'Gui', 'Aprovado' ]
Outra String

*/

// O que aconteceu aqui, foi que foi passada a template String para a função tag, as partes será o array