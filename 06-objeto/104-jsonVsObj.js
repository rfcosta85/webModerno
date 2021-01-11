const obj = {a: 1, b: 2, c:3 , soma() {return a + b + c} } 
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) Não é um formato válido de Json

//console.log(JSON.parse("{ 'a':1, 'b':2, 'c': 3 ")) Não é um formato válido de Json Todos os atributos em Json precisa ser delimitado por "".

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Aqui temos um objeto gerado a partir de um Json

console.log('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }') // Formatos permitidos no JSON