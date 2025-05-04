import React from "react";
import "./Galeria.css";
import { publicSrc} from "../../utils/publicSrc";

interface Projeto {
  imagem: string;
  titulo: string;
  descricao: string;
}

interface Fotos {
  nome: string;
  src: string;
}

const projetos: Projeto[] = [
  {
    imagem: '/assets/projetos/projeto01.png',
    titulo: 'Projeto estrutural',
    descricao: 'Projeto estrutural localizado no litoral do Paraná. Dimensionamento e detalhamento dos elementos contemplando memorial de cálculo e memorial descritivo.',
  },
  {
    imagem: '/assets/projetos/projeto02.png',
    titulo: 'Projeto bombeiro',
    descricao: 'Projeto para aprovação do Corpo de Bombeiros para Santa casa de Misericórdia - Ponta Grossa - PR. Projeto dimensionado, detalhado e aprovado.',
  },
  {
    imagem: '/assets/projetos/projeto03.png',
    titulo: 'Projeto hidrossanitário',
    descricao: 'Comércio de 700m². Projeto contemplou aprovação da Concessionária, detalhamento, dimensionamento e execução.',
  },
];

const clintes: Fotos[] = [
 {nome: "nome01", src: "/assets/clientes/cliente01.png"}, 
 {nome: "nome02", src: "/assets/clientes/cliente02.png"}, 
 {nome: "nome03", src: "/assets/clientes/cliente03.png"}, 
 {nome: "nome04", src: "/assets/clientes/cliente04.png"}, 
 {nome: "nome05", src: "/assets/clientes/cliente05.png"}, 
 {nome: "nome06", src: "/assets/clientes/cliente06.png"}, 
]

const Galeria: React.FC = () => {
  return (
    <section id="exemplos" > 
    <div className="section" >     
      <div className="section-texto">
        <h1>Nossos projetos</h1>
      </div>
        <div className="galeria-cards-wrapper" >
        {projetos.map((projeto, index) => (
            <div key={index} className="card-projeto">
            <img src={`${publicSrc}${projeto.imagem}`} alt={projeto.titulo} />
            <div className="info-card">
                <h2>{projeto.titulo}</h2>
                <p>{projeto.descricao}</p>
            </div>
            </div>
        ))}
        </div>
        <br /><br />
        <div className="section-texto">
          <h1>Alguns de nossos clientes</h1>
        </div>
        <div className="esteira">
          <div className="esteira-conteudo">
            {[...clintes, ...clintes].map((cliente, index) => (
              <div key={index} className="cliente-item">
                <img src={`${publicSrc}${cliente.src}`} alt={cliente.nome}></img>
                {/* {cliente.nome || 'Cliente ' + (index + 1)} */}
              </div>
            ))}
          </div>
      </div>
    </div>
    </section>
  );
};

export default Galeria;
