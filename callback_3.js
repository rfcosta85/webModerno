// Exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function(event)
{

    console.log('O evento ocorreu!')

} // A resposta dessa função é um array, o [0] é para indicar que queremos acessar o primeiro body do nosso documento. Normalmente nós só temos um body mas pode existir sim uma situação específica onde será necessário a inclusão de um segundo body

