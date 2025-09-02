import React from 'react';
import './diferencial.css';
import shield from '../../assets/shield-check-svgrepo-com.svg'
import screwDriver from '../../assets/screwdriver-svgrepo-com.svg'
import leaf from '../../assets/leaf-svgrepo-com.svg'
import desktop from '../../assets/desktop-svgrepo-com.svg'
import { ProjetoUtil } from '../../types';
import Card from '../../components/Cards/Card';

const diferenciais: ProjetoUtil[] = [
  {
    imagem: shield,
    titulo: "Segurança e Experiência",
    descricao: "Empresa com mais de 8 anos no mercado e com profissionais capacitados à ofertar soluções com economia, confiabilidade e eficiência, respeitando acima de tudo segurança."
  },
  {
    imagem: screwDriver,
    titulo: "Normas Técnicas",
    descricao: "Todos os nossos projetos e execuções de serviços na área da Engenharia, seguem rigorosamente as Normas Técnicas Brasileiras da ABNT e normas Internacionais IEC."
  },
  {
    imagem: leaf,
    titulo: "Sustentabilidade",
    descricao: "Com constantes buscas no aprimoramento dos processos de qualidade, segurança e preservação do meio ambiente, buscamos satisfazer o cliente ao agregar valor diferenciado nos serviços prestados."
  },
  {
    imagem: desktop,
    titulo: "Inovação e Tecnologia",
    descricao: "Utilizamos softwares registrados e atualizados. Utilizamos metodologia BIM. Trabalhamos a nível nacional."
  }
]

const Diferencial = () => {
  return (
    <section id="diferencial" className="section"> 
      <div className="container">

      <h1 className='title'>Nosso Diferencial</h1>

        <div className="sobre-cards">
          {diferenciais.map((diferenciais, index) => (
            <Card key={index} title={diferenciais.titulo} src={diferenciais.imagem} description={diferenciais.descricao} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferencial;
