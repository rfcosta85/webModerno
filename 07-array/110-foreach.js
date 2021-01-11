const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array){

    console.log(`${indice + 1} ) ${nome}`)
    console.log(array)

}) // A callback passara pelo próprio elemento e o índice correspondente do elemento por interação

//Dentro do foreach tem um laço for que percorre o array de aprovados, ao executar a função ele vai começar chamando Agatha que é o primeiro elemento do array e o indice que é zero, essa operação será repetida até o final do foreach

// Temos aqui o resultado da execução do código: 1) Agatha
/*2) Aldo
3) Daniel
4) Raquel*/

aprovados.forEach(nome => console.log(nome)) // Aqui não nos importa o índice então o resultado será apenas os nomes contidos no array.

// O array pode ser o terceiro parâmetro passado no forEach Veja

// Uma função callback do foreach recebe sempre o nome, o índice e o array, onde você não precisa passar todos eles e caso você passe um 4° parâmetro ele retornará como undefined