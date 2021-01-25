const contadorA = require('./131-instanciaUnica')
const contadorB= require('./131-instanciaUnica')

const contadorC = require('./131-instanciaNova')()
const contadorD = require('./131-instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor) // Aqui o valor de B vai mudar, pois o node faz cache a partir dos objetos que é retornado a partir de um require. Assim o que for feito no contador A, o contador B também vai saber. 

// O valor retornado 3, lembre-se que o valor original era 1

contadorC.inc()
contadorC.inc()

console.log(contadorD.valor) // Aqui o valor de D não será alterado, pois alteramos apenas o valor de c. Isso só acontece graças ao factory.