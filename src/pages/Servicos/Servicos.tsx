import React from "react";
import './Servico.css';
import Card from "../../components/Cards/Card";

const servicos = [
  {
    titulo: "Projeto Arquitetônico",
    descricao: "Desenvolvimento de projetos arquitetônicos personalizados, respeitando normas técnicas, legislação vigente e as necessidades do cliente. Inclui plantas baixas, cortes, fachadas e detalhamentos."
  },
  {
    titulo: "Projetos Complementares",
    descricao: "Elaboração de projetos complementares de engenharia, como estrutural, elétrico, hidráulico e prevenção contra incêndio, garantindo a integração e compatibilização com o projeto arquitetônico."
  },
  {
    titulo: "Laudos Técnicos",
    descricao: "Emissão de laudos técnicos para avaliação estrutural, vistorias prediais, análise de patologias construtivas, regularizações e atendimento a exigências de órgãos públicos e privados."
  },
  {
    titulo: "Estudos Técnicos",
    descricao: "Realização de estudos de viabilidade técnica e econômica, levantamentos topográficos, análise de solo, e outros estudos necessários para embasar projetos e execuções de obras."
  },
  {
    titulo: "Regularização e Acompanhamento de Obras",
    descricao: "Serviços de regularização de imóveis junto aos órgãos competentes e acompanhamento técnico de obras, assegurando o cumprimento dos projetos, prazos, qualidade e segurança exigidos."
  },
  {
    titulo: "Projeto de Elementos de Subestrações e Usinas Fotovotáicas",
    descricao: "Desenvolvimento de projetos civis e estruturais para a implantação de subestações elétricas e usinas de energia solar fotovoltaica, considerando eficiência, durabilidade e normas regulamentadoras."
  },
  {
    titulo: "Reforma",
    descricao: "Execução de reformas em edificações existentes, incluindo adaptações funcionais, estéticas e estruturais, com foco em modernização, segurança e atendimento às normas técnicas e regulamentações vigentes."
  },
  {
    titulo: "Execução de Obra",
    descricao: "Realização de obras civis desde a fundação até a finalização, com controle técnico, gerenciamento de recursos e cumprimento de prazos, garantindo qualidade, eficiência e conformidade com os projetos e legislações aplicáveis."
  }
];

const Servicos: React.FC = () => {
  return(
    <section id="servicos" className="section">
      <div className="container">
        <h1 className='title'>Nossos Serviços</h1>

        <div className="card-grid">
            {servicos.map((servico, index) => (
              <Card key={index} title={servico.titulo} description={servico.descricao} />
            ))} 
        </div>
      </div>
    </section>
  );};

export default Servicos;
