let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana'] // Forma literal de se atribuir elementos ao array

console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // Aqui em outras linguagens teríamos o erro, mas no js teremos o undefined 

aprovados[3] = 'Paulo' //Aqui criamos um novo atributo para a posição 3 que anteriormente era indefinida. Contudo essa forma é mais utilizada para substituir um elemento já existente
aprovados.push('Abel') // O método push é a forma mais apropriada para adicionar um elemento na última posição de um array.
console.log(aprovados.length) // Iremos ter aqui o total de 5 elementos
aprovados[9] = 'Rafael'  // Aqui é permitido trabalhar dessas formas, tendo os elementos do meio tendo o valor de undefined.

console.log(aprovados[8] === undefined) // Teremos como resultado obviamente true
console.log(aprovados[8] === null) // Sabemos aqui que o elemento não é nulo e assim o resultado deverá ser false.

console.log(aprovados)
aprovados.sort() // Irá alterar o array colocando os elementos em ordem alfabética o famoso método sort.
console.log(aprovados)

delete aprovados[1] // Excluímos o elemento da posição 1 do array, aqui é bom mencionar que o array não será reordenado passando a posição 1 a ter um valor undefined. 

console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Ela serve para add elementos em um determinado índice, também remove elementos de um array e por fim também sever para adicionar e remover elementos ao mesmo tempo. Aqui no primeiro atributo nós estamos dizendo que queremos q a alteração ocorra a partir do índice 1, e no segundo atributo estamos dizendo que na altura do índice 1, nós queremos excluir apenas um elemento, então o único elemento a ser excluído nesse caso é o do índice 1. 

console.log(aprovados) // irá imprimir apenas bia e ana

aprovados = ['Bia', 'Carlos', 'Ana'] // Reatribuímos os valores do array para dar sequência aos exemplos.

aprovados.splice(1, 2) // Aqui iremos excluir a partir do elemento na posição 1, mais dois elementos.

console.log(aprovados) // irá imprimir apenas Ana

aprovados = ['Bia', 'Carlos', 'Ana']

aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // Aqui a partir do índice 1 ele vai excluir dois elementos e adicionais novos dois elementos de nomes elemento1 e elemento2

console.log(aprovados) // Irá imprimir Ana, Elemento1, Elemento2

aprovados = ['Bia', 'Carlos', 'Ana'] 

aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // Aqui iremos Alterar posição Carlos por Elemento1, e ana por Elemento2

console.log(aprovados) // Irá retornar Bia, Elemento1, ELemento2, Carlos, Ana 

