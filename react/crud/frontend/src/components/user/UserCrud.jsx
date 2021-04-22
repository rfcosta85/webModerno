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

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}