// Usando a notação literal 

const obj1 = {}
console.log(obj1)

// Object em JS

console.log(typeof Object, typeof new Object())
const obj2 = new Object
console.log(obj2)

// Funções Construtoras 

function Produto(nome, preco, desconto)
{

    this.nome = nome  // Aqui preço e desconto estão encapsulados e o nome ficou visível para fora do objeto que é possível alterar o valor do nome de forma externa. 

    this.getPrecoComDesconto = () => 
    {

        return preco * (1 - desconto)

    } // Aqui criamos o encapsulamento e assim impedimos que preço e desconto sejam acessados de forma direta, sendo acessados somente dentro do objeto.

}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory - Factory é um padrão de projeto, ele simplesmente é uma função que fabrica alguma coisa

function criarFuncionario(nome, salarioBase, faltas){
    
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){

            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create 

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)