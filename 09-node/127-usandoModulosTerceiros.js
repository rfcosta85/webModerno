const _ = require('lodash') // Esse tipo de importação, por padrão vai dentro de node_modules e dentro de node_module ele vai procurar o arquivo index.js para executar esse import

setInterval(() => console.log(_.random(1, 1000)), 2000) // Aqui a biblioteca irá ficar executando de forma aleatória o sorteio de um número 1 até 1000. Sem ela seria preciso você mesmo criar o seu código.