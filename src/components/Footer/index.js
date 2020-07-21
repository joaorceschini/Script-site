import React from 'react';
import { NavLink } from 'react-router-dom'

// import { Container } from './styles';
import './styles.css';

import Logo from '../../assets/photos/avatar.jpg'

function Footer() {
  return (
    <footer>
        <div className="links">
        <div className="footer-links">
            <div className="footer-title">Script</div>
            <div className="footer-link">Adicionar Script</div>
            <div className="footer-link">Servidor Oficial</div>
        </div>
        <div className="footer-links">
            <div className="footer-title">Sobre</div>
            <div className="footer-link">Comandos</div>
            <div className="footer-link">Informações</div>
        </div>
        <div className="footer-links">
            <div className="footer-title">Equipe</div>
            <div className="footer-link">Membros</div>
        </div>
        </div>

        <div className="rights">
        <div className="copyright">© Script Bot 2020</div>
        </div>
    </footer>
  )
}

export default Footer;