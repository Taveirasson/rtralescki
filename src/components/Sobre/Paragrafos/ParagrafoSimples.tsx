import React from "react";

interface Props {
  texto: string;
  direita?: boolean;
}

const ParagrafoSimples: React.FC<Props> = ({ texto, direita = false }) => (
  <div className={`paragrafo-diferencial ${direita ? "conteudo-direita" : "conteudo-esquerda"}`}>
    <p dangerouslySetInnerHTML={{ __html: texto }} />
  </div>
);

export default ParagrafoSimples;