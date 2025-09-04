import React from "react";
import "./Projetos.css";
import { publicSrc} from "../../utils/publicSrc";
import Card from "../../components/Cards/Card";
import { ProjetoUtil } from "../../types";


const projetos: ProjetoUtil[] = [
  {
    imagem:`${publicSrc}/assets/projetos/projeto01.png`, 
    imageSize:'large',
    titulo: 'Projeto estrutural',
    descricao: 'Projeto estrutural localizado no litoral do Paraná. Dimensionamento e detalhamento dos elementos contemplando memorial de cálculo e memorial descritivo.',
  },
  {
    imagem:`${publicSrc}/assets/projetos/projeto02.png`,
    imageSize:'large',
    titulo: 'Projeto bombeiro',
    descricao: 'Projeto para aprovação do Corpo de Bombeiros para Santa casa de Misericórdia - Ponta Grossa - PR. Projeto dimensionado, detalhado e aprovado.',
  },
  {
    imagem:`${publicSrc}/assets/projetos/projeto03.png`,
    imageSize:'large',
    titulo: 'Projeto hidrossanitário',
    descricao: 'Comércio de 700m². Projeto contemplou aprovação da Concessionária, detalhamento, dimensionamento e execução.',
  },
];


const Projetos: React.FC = () => {
  return (
    <section id="projetos" className="section" >
      <div className="container">
        <h1 className='title'>Nossos Projetos</h1>
        <div className="card-grid" >
            {projetos.map((projeto, index) => (
                <Card key={index} title={projeto.titulo} src={projeto.imagem} imageSize={projeto.imageSize} description={projeto.descricao} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
