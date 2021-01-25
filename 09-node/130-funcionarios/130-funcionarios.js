const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios') // o axios é um cliente http. Ele faz requisições para obter informações de algo que está remoto. Aqui estamos obtendo o arquivo json do link para obter as informações contidas nele

axios.get(url).then(response => {

    const funcionarios = response.data
    console.log(funcionarios)
    
}) // Aqui vamos fazer uma requisição em cima da url e vamos obter o conteúdo do arquivo no código