import React from 'react';
import SobreContent from './SobreContent';
import DiferencialSection from './DiferencialSection';
import { publicSrc } from '../../utils/publicSrc';

const textos = {
  sobre: `A Rtralescki Arquitetrura e Engenharia é uma empresa experiente que está no mercado para atender seus clientes de maneira satisfatória, buscando sempre o custo/benefício com o máximo de qualidade nos serviços. Para isso constantemente investe em qualificação para uma melhoria contínua nos projetos. Desde 2021, temos trabalhado incansavelmente para agradar nossos clientes.`,

  objetivo: `Ser uma empresa de projetos referência na metodologia BIM, reconhecida no mercado nacional buscando objetivos traçados e proporcionando as inovadoras.`,

  missao: `Oferecer soluções de diferentes situações em projetos de engenharia, contribuindo com o sucesso de nossos clientes buscando sempre tê-los como parceiros.`,

  valores: `Nossas relações são baseadas em: Qualidade, Melhoria Contínua, Comprometimento, Confiança, Inovação e Sustentabilidade.`,

  diferencial: [
    `A Empresa com de 8 anos no mercado e com profissionais capacitados à ofertar soluções com economia, confiabilidade e eficiência, respeitando acima de tudo segurança.`,
    `Todos os nossos projetos e execuções de serviços na área da Engenharia, seguem rigorosamente as Normas Técnicas Brasileiras da ABNT e normas Internacionais IEC.`,
    `Com constantes buscas no aprimoramento dos processos de qualidade, segurança e preservação do meio ambiente, buscamos satisfazer o cliente ao agregar valor diferenciado nos serviços prestados.`,
    `Utilizamos softwares registrados e atualizados. Utilizamos metodologia BIM; Trabalhamos a nível nacional.`
  ]
};

const Sobre: React.FC = () => {
  return (
    <div className='divMain'>
      <section id="sobre">
        <br /><br />
        <SobreContent
          titulo="R Tralescki Arquitetura e Engenharia"
          paragrafos={[
            `<strong>Sobre:</strong> ${textos.sobre}`,
            `<strong>Objetivo:</strong> ${textos.objetivo}`,
            `<strong>Missão:</strong> ${textos.missao}`,
            `<strong>Valores:</strong> ${textos.valores}`,
          ]}
          imagemSrc={`${publicSrc}/assets/foto01.PNG`}
          imagemAlt="Logo R Tralescki"
        />
      </section>
      <section id='diferencial'>
        <br /><br /><br /><br />
        <DiferencialSection title="Nosso Diferencial" textos={textos.diferencial} />
    </section>
</div>
  );
};

export default Sobre;
