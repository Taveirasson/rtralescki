import React from 'react';
import './ParagrafoComImagem.css'

interface Props {
  titulo: string;
  paragrafos: string[];
  imagemSrc: string;
  imagemAlt: string;
  // conteudoDireita?: boolean;
}

const ParagrafoComImagem: React.FC<Props> = ({ titulo, paragrafos, imagemSrc, imagemAlt}) => {
  return (
    <div className='section'>
      <div className='section-texto fundo'>
        {titulo && <h1>{titulo}</h1>}
        {paragrafos.map((texto, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: texto }} />
        ))}
      </div>
      <div className='section-imagem'>
        <img src={imagemSrc} alt={imagemAlt} />
      </div>
    </div>
  );
};

export default ParagrafoComImagem;
