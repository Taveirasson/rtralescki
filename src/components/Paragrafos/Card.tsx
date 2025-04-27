import React from 'react';
import ParagrafoSimples from './ParagrafoSimples';
import styles from './Card.module.css';

interface Props {
    title: string;
    texto: string;
}

const Card: React.FC<Props> = ({title = "", texto}) => {
  return (
    <div className={styles.card}>
      <strong>{title}</strong>
      <ParagrafoSimples texto={texto} />
    </div>
  );
};

export default Card;
