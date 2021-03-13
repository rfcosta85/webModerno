function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
} // Função para criar um elemento

function Barreira(reversa = false) { 
    this.elemento = novoElemento('div', 'barreira') //Aqui definimos quem adicionamos primeiro, o corpo a borda etc
    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda) // se for falso primeiro eu vou colocar a borda e depois o corpo
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
} // Função construtora  para criar uma barreira

/*
const b = new Barreira(true) // Barreira normal
b.setAltura(200)
document.querySelector('[wm-flappy]').appendChild(b.elemento)
*/

function parDeBarreiras(altura,abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true) // Para transformar esse atributo privado e acessível dentro do próprio método, basta trocarmos o this por const
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento) // Estamos adicionando dentro da div par de barreiras um elemento superior
    this.elemento.appendChild(this.inferior.elemento) 

    this.sortearAbertura = () => { 
        const alturaSuperior = Math.random() * (altura - abertura) // O math.random vai de 0 a 1
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    // Vamos definir em que posição o par de barreira está 

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) 
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

/*const b = new parDeBarreiras(700, 200, 400)
document.querySelector(`[wm-flappy]`).appendChild(b.elemento) // b é o objeto criado da função construtora e dentro dela temos o elemento dom criado na função barreira 
*/

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new parDeBarreiras(altura, abertura, largura), 
        new parDeBarreiras(altura, abertura, largura + espaco),
        new parDeBarreiras(altura, abertura, largura + espaco * 2),
        new parDeBarreiras(altura,abertura, largura + espaco * 3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // quando o elemento sair da área do jogo

            if(par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()

            } // Se o par.getX for menor que a largura do par de barreiras, significa q ele sumiu completamente do jogo

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            if(cruzouOMeio) notificarPonto()

        })
    }
}

const barreiras = new Barreiras(700,1200,200,400)
const areaDoJogo = document.querySelector('[wm-flappy]')
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
},20)