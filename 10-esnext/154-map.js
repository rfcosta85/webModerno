const tecnologias = new Map()

tecnologias.set('react', {framework: false})
tecnologias.set('Anglular', {framework: true})

console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([

    [function () {}, 'funcao'],
    [{}, 'Objeto'],
    [123, 'Número'],

])

chavesVariadas.forEach((vl, ch) => {

    console.log(ch, vl)

})

console.log(chavesVariadas.has(123)) // Vai nos dizer se a chave vai estar presente dentro do objeto. Aqui retornará true.

chavesVariadas.delete(123)

console.log(chavesVariadas.has(123)) // O retorno agora será false.

console.log(chavesVariadas.size) 

chavesVariadas.set(123, 'a') // Atenção as chaves não aceitam repetição 