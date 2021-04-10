import $ from 'jquery' //Ele vai procurar o jquery dentro de node_modules e dentro desse arquivo iremos referenciar o jquery com o $

const loadHtmlSuccessCallbacks = [] //Definimos um array com várias funções

export function onloadHtmlSuccess(callback) { // As funções são registradas uma única vez aqui
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }  //Se a callback não estiver incluída no array e o array será carregado toda vez que carregarmos um html de forma bem sucedida 
}

function loadIncludes(parent) {
    if(!parent) parent = 'body' // Se o parent vier vazio (Ou seja, não estiver setado) estaremos setando um parent para ele procurar no boyd inteiro 
    $(parent).find('[wm-include]').each(function(i, e) {

        const url = $(e).attr('wm-include') // att é o atributo wm-include sendo referenciado em url para que possamos utilizar as propriedades do próprio jquery

        $.ajax({
            url,
            success(data) {

                $(e).html(data) // Pegamos o elemento atual, chamamos a função html e setamos data a ela
                $(e).removeAttr('wm-include') // Excluímos para q não haja mais interpretação dentro dela e não seja interpretada pela segunda vez

                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                loadIncludes(e) // O chamamos pq essa função é recursiva 

            } // a função callback que será feita quando a requisição ajax foi bem sucedida no sentido que ele irá processar todos os includes que ele encontrar.
        })

    }) // Aqui colocamos o parent dentro do jquery para termos todas as funcionalidades dele, o find procura dentro do parent, todos os elementos que possuem a propriedade wm-include e fizemos um foreach para cada elemento encontrado e dentro da função iremos realizar o trabalho  que tem que ser feito para cada um deles, onde primeiro vem o index(i) e depois o elemento(e)

} // Essa função vai ler todos os atributos que sejam wm-include - Assim o parent é a tag que tem as propriedades do wm-include

loadIncludes() // Passamos vazio para ele usar o body como primeiro parent e assim ele vai de forma recursiva realizando os demais includes até finalizar. 