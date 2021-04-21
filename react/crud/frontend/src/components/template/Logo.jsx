import './Logo.css'
import logo from '../../assets/imgs/logo.png'
import React from 'react'

/*Definindo que todos os componentes serão funcionais*/ 
export default props => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo"/>
        </a>
    </aside>