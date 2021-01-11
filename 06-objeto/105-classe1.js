class Lancamento{

    constructor(nome = 'Genérico', valor = 0) {

        this.nome = nome
        this.valor = valor

    } // função que por padrão será chamada quando usamos o operador new

}

class CicloFinanceiro {

    constructor(mes, ano){

        this.mes = mes
        this.ano = ano
        this.Lancamentos = []
    }

    addLancamentos(...lancamentos){

        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {

        let valorConsolidado = 0
        this.Lancamentos.forEach(l => {

            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeluz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeluz)
console.log(contas.sumario())