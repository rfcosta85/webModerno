import React from 'react'
import { Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

// Componente funcional que terá o mapeamento entre a URL e os nossos componentes

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />  {/* Sempre que o usuário navegar para o / ele irá renderizar o componente Home */}
        <Route path='/users' component={UserCrud} /> {/* Navegou para o / ele vai p o UserCrud. Acima usamos o exact antes do path para ele ir para home somente quando o caminho for exatamente uma / e nada mais. */}
        <Redirect from='*' to='/' /> {/* Aqui se o usuário digitar uma url inexistente ele será encaminhado para Home*/}
    </Switch>