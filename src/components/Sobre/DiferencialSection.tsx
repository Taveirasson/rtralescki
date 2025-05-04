import React from 'react';
// import ParagrafoSimples from '../Paragrafos/ParagrafoSimples';
import Card from '../Paragrafos/Card';
// import styles from './sobre.module.css';

interface Props {
  textos: string[];
  title: string;
}

const DiferencialSection: React.FC<Props> = ({ textos, title }) => {
  return (
    <div className='section'>
      <div className="section-texto">
        <h1>{title}</h1>
      </div>
      <div className="section-grid">
        {textos.map((texto, index) => (
          <Card key={index} title='' texto={texto} />
        ))}
      </div>
    </div>
  );
};

export default DiferencialSection;
