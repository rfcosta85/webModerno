const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // Aqui não poderemos atribuir alguma outra coisa diretamente para pilotos, pq a constante pilotos sempre irá apontar para esse array, nós podemos modificar esse array, contudo não podemos atribuir mais nada para ele por se tratar de uma constante

pilotos.pop() // Massa quebrou o carro! Rs Esse método irá remover o último elemento do array;

console.log(pilotos) // Retornará o array original sem o Massa

pilotos.push('Verstappen') // Adicionamos Verstappen na última posição do array
console.log(pilotos) // Teremos novamente um array com 4 elementos com a inclusão do verstappen na última posição do array

pilotos.shift() // O shift funciona como o pop, só que ele tira o elemento da primeira posição e não da última posição.

console.log(pilotos) // Todos os elementos do array sem o vettel 

pilotos.unshift('Hamilton') // Tem a mesma posição do pop só que adiciona um elemento no início e não no final

console.log(pilotos) // Voltamos a ter 4 elementos no array, com a inclusão do hamilton na primeira posição do array

// splice pode adicionar e remover elementos

// adicionar

pilotos.splice(2,0,'Bottas', 'Massa') // A partir da posição 2 do array, não iremos excluir nada  é o que mostra o (0) e vamos adicionar mais dois elementos, bottas e massa

console.log(pilotos) // Adicionamos, Bottas e Massa

// remover

pilotos.splice(3, 1) // A partir do índice 3 do array, removemos umm elemento

console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // é retornado um novo array, ele pega um array a partir do indice 2 e gera um novo array

console.log(algunsPilotos1) 

const algunsPilotos2 = pilotos.slice(1, 4) // Aqui ele gerar um novo array a partir de pilotos começando do índice 1 e terminando no índice 4, portanto ele não irá incluir o índice 4, apenas parar nele. 