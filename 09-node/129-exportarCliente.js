const exportar = require('./129-exportar')

console.log(exportar) /*{ a: 1, b: 2, c: 3 }
{ a: 1, b: 2, c: 3 }
{ a: 1, b: 2, c: 3 }*/

// Após a mudança do módulo teremos o seguinte resultado

// { publico: true }