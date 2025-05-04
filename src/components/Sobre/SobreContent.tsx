import React from 'react';
import styles from './sobre.module.css';
import ParagrafoComImagem from '../Paragrafos/ParagrafoComImagem';

interface Props {
  titulo: string;
  paragrafos: string[];
  imagemSrc: string;
  imagemAlt: string;
}

const SobreContent: React.FC<Props> = ({ titulo, paragrafos, imagemSrc, imagemAlt }) => {
  return (
    <div>
      <div>
        {/* <h1 className={styles.title}>{titulo}</h1> */}
        <ParagrafoComImagem
          titulo= {titulo}
          paragrafos={paragrafos}
          imagemSrc={imagemSrc}
          imagemAlt={imagemAlt}
          // conteudoDireita={false}
        />
      </div>
    </div>
  );
};

export default SobreContent;
