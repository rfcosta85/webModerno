const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // Repetimos aqui para ser mostrado que não podemos adicionar elementos repetidos

console.log(times) // Set { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times.size) // 5
console.log(times.has('Vasco')) // true
times.delete('Flamengo') 
console.log(times.has('Flamengo')) // false

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] // Repare novamente que as repetições serão removidas
const nomesSet = new Set(nomes)
console.log(nomesSet) // Set { 'Raquel', 'Lucas', 'Julia' }