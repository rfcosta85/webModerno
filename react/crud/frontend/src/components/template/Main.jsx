// O main terá tanto o conteúdo como tb uma referência ao Header, visto que esse ficará mudando de status (vai mudar o título o subtítulo etc. Eles irão mudar de acordo com o component que estivermos no momento)

import './Main.css'
import React from 'react'
import Header from './Header'

// Função de componentes funcionais 

export default props => 
    <React.Fragment>
        <Header />
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>