import React from 'react';
import './Home.css'
import TituloSublinhado from '../../components/TituloSublinado/TituloSublinhado';
import SaibaMaisButton from '../../components/Button/SaibaMais';
import useScrollToSection from '../../hooks/useSmoothScroll';

const Home: React.FC = () => {
  const scrollToSection = useScrollToSection();

  return (
    <div className='Home'>
        <div className="content-box animated-entry">
          <div className='animated-title'>
            <TituloSublinhado>R Tralescki Arquitetura e Engenharia</TituloSublinhado>
          </div>
          
          <p className='animated-text'>Desde 2015, temos trabalhado incansavelmente para agradar nossos clientes.</p>
          <div className='animated-button'>
            <SaibaMaisButton onClick={() => scrollToSection('sobre')}></SaibaMaisButton>
          </div>
          </div>
        <div className="faixa-inferior" />
    </div>
  );
};

export default Home;
