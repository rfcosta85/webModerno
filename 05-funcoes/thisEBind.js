const pessoa = 
{

    saudacao: 'Bom dia!',
    
    falar()
    {

        console.log(this.saudacao) // Aqui estamos usando o this para referenciar o dono desse objeto que é o objeto pessoa e assim ele acessa o atributo saudacao

    }

}

pessoa.falar()

const falar = pessoa.falar

falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // pessoa é o objeto this que queremos referenciar 

falarDePessoa()

