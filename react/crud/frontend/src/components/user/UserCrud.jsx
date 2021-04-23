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

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }

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

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
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

    load(user) {
        this.setState({ user })
    }

    remove(user) { 
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {

        console.log(this.state.list)
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}