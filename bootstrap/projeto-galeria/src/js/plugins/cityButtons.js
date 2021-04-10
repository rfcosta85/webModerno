import $ from 'jquery'

const duration = 400 

function filterByCIty(city) {
    $([`[wm-city]`]).each(function(i, e) {
        const isTarget = $(this).attr('wm-city') === city || city === null // Se nulo ele irá exibir todos os elementos, se não ele passará somente os elementos relacionados ao atributo passado como parâmetro
        if(isTarget) {
            $(thins).parent().removeClass('d-none') // d-none é a classe display none, e ela só será removida quando tivermos o fadeIn válido
            $(this).fadeIn(duration)
        }else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function () {    
    const cities = new Set // Usamos o set por ele não criar o elemento duas vezes, ou seja, em NY será criado apenas um botão, mesmo tendo 4 fotos da cidade. 
    $('[wm-city]').each(function(i, e) {
        cities.add($(e).attr('wm-city')) // Aqui ele vai pegar os nomes das cidades para por dentro de cities
    })

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)
        btn.click(e => filterByCIty(city))
        return btn
    })

    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info','active']).html('Todas')
    btnAll.click(e => filterByCIty(null))
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup)
    return this
}

$('[wm-city-buttons]').cityButtons() // A partir dessa propriedade o HTML será injetado 