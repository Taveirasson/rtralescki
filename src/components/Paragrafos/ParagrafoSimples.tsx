import React from 'react';
import styles from './ParagrafoSimples.module.css';

interface Props {
  texto: string;
  direita?: boolean;
}

const ParagrafoSimples: React.FC<Props> = ({ texto, direita = false }) => (
  <div className={`${direita ? styles.conteudoDireita : styles.conteudoEsquerda}`}>
    <p dangerouslySetInnerHTML={{ __html: texto }} />
  </div>
);

export default ParagrafoSimples;
