import React from "react";
import styles from './Servico.module.css';
import Card from "../Paragrafos/Card";

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
  }
];

const Servicos: React.FC = () => {
  return(
    <section id="servicos" className="section">
      <br /><br /><br /><br />
      <div className="divMain">
        <div className={styles.title}>
          <h1>Nossos Serviços</h1>
        </div>
        <div className={styles.servicoContainer}>
            {servicos.map((servico, index) => (
                  <Card key={index} title={servico.titulo} texto={servico.descricao} />
            ))} 
        </div>
      </div>
    </section>
  );};

export default Servicos;
