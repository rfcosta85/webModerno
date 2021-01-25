this.ola = 'Fala Pessoal' // Dentro de um módulo node existe uma palavra this, indica que essa frase pode ser acessada por outro arquivo. É possível acessar também, através do exports, veja:

exports.bemVindo = 'Bem vindo ao node!' // Note que tanto this, quando exports são um objeto. Sabemos também que o objeto em JS é uma coleção de chaves e valores dinâmicas. Isso significa dizer que o olá acabou de ser criado dentro de this e o Bem vindo... acabou de ser criado dentro de exports. A 3° forma é a forma mais clássica e usada.

module.exports.ateLogo = 'Até próximo exemplo.'