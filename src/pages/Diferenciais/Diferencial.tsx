import React from 'react';
import './diferencial.css';
import shield from '../../assets/shield-check-svgrepo-com.svg'
import screwDriver from '../../assets/screwdriver-svgrepo-com.svg'
import leaf from '../../assets/leaf-svgrepo-com.svg'
import desktop from '../../assets/desktop-svgrepo-com.svg'

const Diferencial = () => {
  return (
    <section id="diferencial" className="diferenciais-section"> 
      <div className="diferencial-container">

      <h1 className='title'>Nosso Diferencial</h1>

        <div className="sobre-cards">

          <div className="sobre-card">
            <img src={shield} alt="Seguranca" className="sobre-icon" />
            <p className='subtitle'>Segurança e Experiência</p>
            <p>Empresa com mais de 8 anos no mercado e com profissionais capacitados à ofertar soluções com economia, confiabilidade e eficiência, respeitando acima de tudo segurança.</p>
          </div>

          <div className="sobre-card">
            <img src={screwDriver} alt="Normas" className="sobre-icon" />
            <p className='subtitle'>Normas Técnicas</p>
            <p>Todos os nossos projetos e execuções de serviços na área da Engenharia, seguem rigorosamente as Normas Técnicas Brasileiras da ABNT e normas Internacionais IEC.</p>
          </div>

          <div className="sobre-card">
            <img src={leaf} alt="Sustentabilidade" className="sobre-icon" />
            <p className='subtitle'>Sustentabilidade</p>
            <p>Com constantes buscas no aprimoramento dos processos de qualidade, segurança e preservação do meio ambiente, buscamos satisfazer o cliente ao agregar valor diferenciado nos serviços prestados.</p>
          </div>

          <div className="sobre-card">
            <img src={desktop} alt="Inovacao" className="sobre-icon" />
            <p className='subtitle'>Inovação e Tecnologia</p>
            <p> Utilizamos softwares registrados e atualizados. Utilizamos metodologia BIM. Trabalhamos a nível nacional.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Diferencial;
