require('./132-global')

console.log(minhaApp.saudacao()) // Estou em todos os lugares

minhaApp.nome = 'Eita!' //Podemos mudar o nome do nosso app e isso é tenebroso

console.log(minhaApp.nome) //Eita! Podemos resolver utilizando o freeze em nosso arquivo global.js 

/*global.minhaApp = Object.freeze({

    saudacao() {

        return 'Estou em todos os lugares!' 
     },
 
     nome: 'Sistema Legal'
     
 })*/

