import React from 'react';
import './sobre.css';
import chartBar from '../../assets/chart-bar-svgrepo-com.svg';
import targetIcon from '../../assets/target-svgrepo-com.svg';
import gemIcon from '../../assets/gem-svgrepo-com.svg';

const Sobre: React.FC = () => {
  return (
    <section id="sobre" className="sobre-section">
      <div className="sobre-container">
        <h1 className='title'>Quem Somos</h1>
        <p className="sobre-descricao">
          A Rtralescki Arquitetura e Engenharia é uma empresa experiente que está no mercado para atender seus clientes de maneira satisfatória, buscando sempre o custo benefício com o máximo de qualidade nos serviços.
          Para isso constantemente investimos em qualificação para uma melhoria contínua nos projetos. Desde 2015, temos trabalhado incansavelmente para agradar nossos clientes.
        </p>
        <div className="sobre-cards">
          <div className="sobre-card">
            <img src={chartBar} alt="Objetivo" className="sobre-icon" />
            <p className='subtitle'>Objetivo</p>
            <p>Ser uma empresa de projetos referência na metodologia BIM, reconhecida no mercado nacional buscando objetivos traçados e proporcionando as inovadoras.</p>
          </div>

          <div className="sobre-card">
            <img src={targetIcon} alt="Missão" className="sobre-icon" />
            <p className='subtitle'>Missão</p>
            <p>Oferecer soluções de diferentes situações em projetos de engenharia, contribuindo com o sucesso de nossos clientes buscando sempre tê-los como parceiros.</p>
          </div>

          <div className="sobre-card">
            <img src={gemIcon} alt="Valores" className="sobre-icon" />
            <p className='subtitle'>Valores</p>
            <p>Nossas relações são baseadas em qualidade, melhoria contínua, comprometimento, confiança, inovação e sustentabilidade.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
