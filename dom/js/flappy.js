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

function Passaro(alturaJogo) {
    let voando = false 

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true 
    window.onkeyup = e => voando = false 

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if(novoY <= 0) {
            this.setY(0)
        }else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        }else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}
/*
const barreiras = new Barreiras(700,1200,200,400)
const passaro = new Passaro(700)
const areaDoJogo = document.querySelector('[wm-flappy]')

areaDoJogo.appendChild(passaro.elemento)
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
    passaro.animar()
},20)
*/

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.AtualizarPontos = pontos => { 
        this.elemento.innerHTML = pontos 
    }

    this.AtualizarPontos(0)
}

function FlappyBird() { 
    let pontos = 0

    const areaDoJogo = document.querySelector(`[wm-flappy]`)
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.AtualizarPontos(++pontos))
    const passaro = new Passaro(altura)
    
    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => { 
        // loop do jogo 
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()
        }, 20)
    }
}

new FlappyBird().start()