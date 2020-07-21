import React from 'react';

// import { Container } from './styles';
import Header from '../../components/Header';

import './styles.css';

function Home() {
  return (
    <div className="content">
      <Header />
      <main id="home">

      <div className="prime-hero">
        <div className="img">
          <div className="border"></div>
        </div>
        <div className="text">
          <h1>Script</h1>
          <div className="prime-description">
            <div className="desc">
              Um simples bot para discord com o obejtivo de te ajudar. Adicione agora mesmo em seu servidor!
            </div>
          </div>
          <div className="buttons">
            <div className="buttons-hero">
              <a rel="noopener" target="_blank" href="https://discord.com/oauth2/authorize?=&client_id=720055229592109187&scope=bot&permissions=8"><div className="button" id="button-add">Me adicione</div></a>
              <a rel="noopener" target="_blank" href="https://discord.gg/76TpGMn"><div className="button" id="button-support">Servidor oficial</div></a>
            </div>
            
          </div>  
        </div>
      </div>

    </main>
    </div>
  );
}

export default Home;