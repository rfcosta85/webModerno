const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios') // o axios é um cliente http. Ele faz requisições para obter informações de algo que está remoto. Aqui estamos obtendo o arquivo json do link para obter as informações contidas nele

const chineses = chineseWorks => chineseWorks.pais === 'China'
const mulheres = chineseWorks => chineseWorks.genero === 'F'
const menorSalario = (func, funcAtual) => {

    return func.salario < funcAtual.salario ? func : funcAtual 

}

axios.get(url).then(response => {

    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)

}) // Aqui vamos fazer uma requisição em cima da url e vamos obter o conteúdo do arquivo no código