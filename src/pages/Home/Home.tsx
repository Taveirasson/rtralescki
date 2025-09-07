import React from 'react';
import './Home.css';
import SaibaMaisButton from '../../components/Buttons/SaibaMais';
import scrollToSection from '../../utils/scrollToSection';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <div className="background-image" />
      <div className="overlay" />

      <div className="content-box animated-entry">
        <div className='animated-title'>
          <h1 className='title'>R Tralescki Arquitetura e Engenharia</h1>
        </div>
        <p className='animated-text'>
          Desde 2015, temos trabalhado incansavelmente para agradar nossos clientes.
        </p>
        <div className='animated-button'>
          <SaibaMaisButton onClick={() => scrollToSection('sobre')} />
        </div>
      </div>

      <div className="faixa-inferior" />
    </div>
  );
};

export default Home;
