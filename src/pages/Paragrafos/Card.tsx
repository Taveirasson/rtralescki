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
      {/* <strong className='title'>{title}</strong> */}
      <ParagrafoSimples title={title} texto={texto} />
    </div>
  );
};

// export default Card;
