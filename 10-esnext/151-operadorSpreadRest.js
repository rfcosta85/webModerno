// Usar rest com parâmetro de função 

// Usar Spread como objeto

const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } //criando um outro objeto usando o spread, aqui pegamos todos os atributos de funcionário. clone terá ativo como atributo e tudo de obj funcionário e aqui temos a imutabilidade funcionando

console.log(clone) // { ativo: true, nome: 'Maria', salario: 12348.99 }

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal) // [ 'Maria', 'João', 'Pedro', 'Gloria', 'Rafaela' ] // Repare a inclusão dos nomes de grupoA em grupoFinal

