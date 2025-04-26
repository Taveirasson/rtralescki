import React from "react";

interface EquipeMembroProps {
  titulo: string;
  descricao: string;
  imagem: string;
}

const EquipeMembro: React.FC<EquipeMembroProps> = ({ titulo, descricao, imagem }) => (
  <div className="segundoContainer">
    <div className="imagem">
      <img src={imagem} alt={titulo} />
    </div>
    <div className="texto">
      <h2 className="titulo-com-linha">{titulo}</h2>
      <p>{descricao}</p>
    </div>
  </div>
);

export default EquipeMembro;
