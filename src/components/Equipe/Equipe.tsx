import React from "react";
import './equipe.css';
// import EquipeMembro from "./EquipeMembro";
import { publicSrc} from "../../utils/publicSrc";


const Equipe: React.FC = () => (
  <section id="equipe" className="section equipe-secao">
    <div className="titulo">
      <h3>Nossa Equipe</h3>
      <hr className="linha-divisoria" />
    </div>
    <div className="segundoContainer">
      <div className="imagem">
        <img src={`${publicSrc}/assets/panel.png`} alt="Icon"></img>
      </div>
      <div className="texto">
        <h2 className="titulo-com-linha">Engenheiro Civil</h2>
        <p>
          Contamos com uma equipe multidisciplinar formada por engenheiros civis, arquitetos
          e técnicos especializados. Contamos com uma equipe multidisciplinar formada por engenheiros civis, arquitetos
          e técnicos especializados. Contamos com uma equipe multidisciplinar formada por engenheiros civis, arquitetos
          e técnicos especializados. Contamos com uma equipe multidisciplinar formada por engenheiros civis, arquitetos
          e técnicos especializados.
        </p>
      </div>
    </div>

    <div className="segundoContainer">
      <div className="imagem">
        <img src={`${publicSrc}/assets/panel.png`} alt="Icon"></img>
      </div>
      <div className="texto">
        <h2 className="titulo-com-linha">Arquiteto</h2>
        <p>
          Contamos com uma equipe multidisciplinar formada por engenheiros civis, arquitetos
          e técnicos especializados. Contamos com uma equipe multidisciplinar formada por engenheiros civis, arquitetos
          e técnicos especializados. Contamos com uma equipe multidisciplinar formada por engenheiros civis, arquitetos
          e técnicos especializados. Contamos com uma equipe multidisciplinar formada por engenheiros civis, arquitetos
          e técnicos especializados.
        </p>
      </div>
    </div>

    
  </section>
);

export default Equipe;
