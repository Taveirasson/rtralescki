import React from 'react';
import styles from './ParagrafoSimples.module.css';

interface Props {
  texto: string;
  direita?: boolean;
  title: string;
}

const ParagrafoSimples: React.FC<Props> = ({ texto, direita = false, title }) => (
  <div className='section-texto'>
    <strong>{title}</strong>
    <p dangerouslySetInnerHTML={{ __html: texto }} />
  </div>
);

export default ParagrafoSimples;
