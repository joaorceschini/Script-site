import React from 'react';
import { NavLink } from 'react-router-dom'

// import { Container } from './styles';
import './styles.css';

import Logo from '../../assets/photos/avatar.jpg'

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul>
        <NavLink activeClassName="botao-ativo" to="/"><li>
          <span>Home</span>
        </li></NavLink>
        <NavLink activeClassName="botao-ativo" to="/comandos"><li>
          <span>Comandos</span>
        </li></NavLink>
        <NavLink activeClassName="botao-ativo" to="/sobre"><li>
          <span>Sobre</span>
        </li></NavLink>
        <a rel="noopener" target="_blank" href="https://discord.com/oauth2/authorize?=&client_id=720055229592109187&scope=bot&permissions=8"><li>
          <span>Me adicione</span>
        </li></a>
      </ul>
    </div>
  )
}

export default Header;