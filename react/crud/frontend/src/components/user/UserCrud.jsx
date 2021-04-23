import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

/* Propriedades do cabeçalho */

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = { 
    user: {name:'', email:''},
    list: []
}

export default class USerCrud extends Component { 

    state = { ...initialState }

    clear() {
        this.setState({user: initialState.user}) // Aqui iremos limpar o usuário na tela de cadastro do usuário
    }

    save() {
        const user = this.state.user //Quando queremos incluir um usuário iremos usar o post e quando queremos alterar iremos usar o put
        const method = user.id ? 'put' : 'post' // Se tivermos usuário cadastro o id será true, portanto será usado o put para alterar, senão não temos usuário cadastro e ai iremos usar o post para criar o usuário
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl //Se o id estiver setado iremos passar o baseUrl + o userid, caso contrário iremos passar somente o baserUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({user: initialState.user, list})
            })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event) {
        const user = {... this.state.user } //Iremos clonar o usuário usando o operado spread pois não é interessante alterar o estado do objeto, portanto clonamos o objeto, alteramos e depois setamos o estado usando a fç set state
        user[event.target.name] = event.target.value 
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name" value={this.state.user.name} onChange={e => this.updateField(e)} placeholder="Digite o nome..."/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="text" className="form-control" name="email" value={this.state.user.email} onChange={e => this.updateField(e)} placeholder="Digite o e-mail"/>
                    </div>
                </div>

                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>                            
                            Salvar
                        </button>

                        <div className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                            Cancelar
                        </div>
                    </div>
                </div>
            </div>            
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}