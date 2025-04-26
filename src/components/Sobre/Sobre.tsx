import React from "react";
import './sobre.css';

import ParagrafoComImagem from './Paragrafos/ParagrafoComImagem';
import ParagrafoSimples from './Paragrafos/ParagrafoSimples';

const textos = {
  sobre: `A Rtralescki Arquitetrura e Engenharia é uma empresa
          experiente que está no mercado para atender seus clientes
          de maneira satisfatória, buscando sempre o
          custo/benefício com o máximo de qualidade nos serviços.
          Para isso constantemente investe em qualificação para
          uma melhoria continua nos projetos. Desde 2021, temos trabalhado incansavelmente para
          agradar nossos clientes.`,

  objetivo: `Ser uma empresa de projetos referência na metodologia BIM,
            reconhecida no mercado nacional buscando objetivos traçados e
            proporcionando as inovadoras`,

  missao: `Oferecer soluções de diferentes situações em projetos
          de engenharia, contribunido com o sucesso de nossos
          clientes buscando sempre tê-los como parceiros.`,

  valores: `Nossas relações são baseadas em: Qualidade, Melhoria Continua,
            comprometimento, Confiança, Inovação e Sustentabilidade.`,
  
  diferencial: {
    d1: `A Empresa com de 8 anos no mercado e com
        profissionais capacitados à ofertar soluções com
        economia, confiabilidade e eficiência, respeitando acima
        de tudo segurança.`,
    d2: `Todos os nossos projetos e execuções de serviços na
        área da Engenharia, seguem rigorosamente as Normas
        Técnicas Brasileiras da ABNT e normas Internacionais
        IEC;`,
    d3: `Com constantes buscas no aprimoramento dos
        processos de qualidade, segurança e preservação do
        meio ambiente, buscamos satisfazer o clientes ao
        agregar valor diferenciado nos serviços prestados`,
    d4: `Utilizamos software registrados e atualizados.
        Utilizamos metodologia BIM;
        Trabalhamos a nível nacional;`,
  }
};

const Sobre: React.FC = () => {
  return (
  <section id="sobre" className="section sobre-secao">
    <h1>R Tralescki Arquitetura e Engenharia</h1>
    <ParagrafoComImagem
        imagemSrc="/assets/foto01.png"
        imagemAlt="Logo R Tralescki"
        conteudoDireita
        paragrafos={[
          `<strong>Sobre : </strong> ${textos.sobre} `,
          `<strong>Objetivo : </strong> ${textos.objetivo}`,
          `<strong>Missão : </strong> ${textos.missao}`,
          `<strong>Valores : </strong> ${textos.valores}`,
        ]}
      />
    <h1>Nosso Diferencial</h1>
    <div className="diferencial-container">
      <ParagrafoSimples texto={textos.diferencial.d1} direita={false} />
      <ParagrafoSimples texto={textos.diferencial.d2} direita />
      <ParagrafoSimples texto={textos.diferencial.d3} direita={false} />
      <ParagrafoSimples texto={textos.diferencial.d4} direita />
    </div>
  </section>
)};

export default Sobre;
