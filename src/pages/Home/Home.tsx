import React from 'react';
import './Home.css';
import SaibaMaisButton from '../../components/Button/SaibaMais';
import useScrollToSection from '../../hooks/useSmoothScroll';

const Home: React.FC = () => {
  const scrollToSection = useScrollToSection();

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
