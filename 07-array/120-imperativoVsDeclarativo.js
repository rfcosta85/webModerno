const alunos = [

    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Imperativa 

let total1 = 0

for(let i = 0; i < alunos.length; i++)
{

    total1 += alunos[i].nota

} // Menos condições de usar novamente

console.log(total1 / alunos.length)

// Declarativo --- Mais condições de usar em outras partes do código ou até mesmo outro programa

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual 
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)