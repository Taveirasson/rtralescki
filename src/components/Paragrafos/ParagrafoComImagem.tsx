import React from 'react';
import styles from './ParagrafoComImagem.module.css';
import { publicSrc} from "../../utils/publicSrc";

interface Props {
  titulo: string;
  paragrafos: string[];
  imagemSrc: string;
  imagemAlt: string;
  conteudoDireita?: boolean;
}

const ParagrafoComImagem: React.FC<Props> = ({ titulo, paragrafos, imagemSrc, imagemAlt, conteudoDireita = false }) => {
  return (
    <div className={`${styles.sobreContainer} ${conteudoDireita ? styles.conteudoDireita : styles.conteudoEsquerda}`}>
      <div className={styles.sobreTexto}>
        {titulo && <h2>{titulo}</h2>}
        {paragrafos.map((texto, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: texto }} />
        ))}
      </div>
      <div className={styles.sobreImagem}>
        <img src={`${publicSrc}${imagemSrc}`} alt={imagemAlt} />
      </div>
    </div>
  );
};

export default ParagrafoComImagem;
