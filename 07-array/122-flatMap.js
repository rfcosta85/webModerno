const escola = [{

    nome: 'Turma M1',
    alunos: [{

        nome:'Gustavo',
        nota: 8.1
    },{

        nome: 'Ana',
        nota: 9.3

    }]
    
},{

    nome:'Turma M2',

    alunos: [{

        nome: 'Rebeca',
        nota: 8.9
    }, {

        nome: 'Roberto',
        nota: 7.3

    }]
}] // Array de objeto, onde cada objeto representa as turmas da escola

// Nosso objetivo é extrair todas as notas do array independente da turma

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) // Por ser array usamos o map para converter do objeto aluno a nota do aluno

const notas1 = escola.map(getNotasDaTurma)

console.log(notas1) // [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

// Vamos agora criar um flatmap para termos o resultado dos array em um único array

Array.prototype.flatMap = function(callback){

    return Array.prototype.concat.apply([], this.map(callback)) // O apply é usado para ser o this

} // Esse método não existe na api padrão e por isso essa estrutura

const notas2 = escola.flatMap(getNotasDaTurma)

console.log(notas2) // [ 8.1, 9.3, 8.9, 7.3 ]