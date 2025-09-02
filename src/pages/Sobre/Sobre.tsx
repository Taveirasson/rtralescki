import React from 'react';
import './sobre.css';
import chartBar from '../../assets/chart-bar-svgrepo-com.svg';
import targetIcon from '../../assets/target-svgrepo-com.svg';
import gemIcon from '../../assets/gem-svgrepo-com.svg';
import { ProjetoUtil } from '../../types';
import Card from '../../components/Cards/Card';

const quemSomos: ProjetoUtil[] = [
  {
    imagem: chartBar,
    titulo: 'Objetivo',
    descricao: 'Ser uma empresa de projetos referência na metodologia BIM, reconhecida no mercado nacional buscando objetivos traçados e proporcionando as inovadoras.'
  },
  {
    imagem: targetIcon,
    titulo: "Missão",
    descricao: "Oferecer soluções de diferentes situações em projetos de engenharia, contribuindo com o sucesso de nossos clientes buscando sempre tê-los como parceiros."
  },
  {
    imagem: gemIcon,
    titulo: "Valores",
    descricao: "Nossas relações são baseadas em qualidade, melhoria contínua, comprometimento, confiança, inovação e sustentabilidade."
  }
];

const Sobre: React.FC = () => {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <h1 className='title'>Quem Somos</h1>
        <p className='description'>
          A Rtralescki Arquitetura e Engenharia é uma empresa experiente que está no mercado para atender seus clientes de maneira satisfatória, buscando sempre o custo benefício com o máximo de qualidade nos serviços.
          Para isso constantemente investimos em qualificação para uma melhoria contínua nos projetos. Desde 2015, temos trabalhado incansavelmente para agradar nossos clientes.
        </p>
        <div className="sobre-cards">
          {quemSomos.map((el, index) => (
                <Card key={index} title={el.titulo} src={el.imagem} description={el.descricao} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
