//console.log(global) >> Tenha cuidado ao usar

global.minhaApp = {

    saudacao() {

       return 'Estou em todos os lugares!' 
    },

    nome: 'Sistema Legal'
}// Quando esse módulo for lido, isso de fato foi add no global, qualquer outro arquivo no sistema terá acesso a esse app.



