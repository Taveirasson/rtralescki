import React from 'react';
import './TituloSublinhado.css';

interface TituloSublinhadoProps {
  children: React.ReactNode;
  underlineColor?: string; 
}

const TituloSublinhado: React.FC<TituloSublinhadoProps> = ({ children, underlineColor = '#c3a752' }) => {
  return (
    <h1 className="titulo-sublinhado" style={{ textDecorationColor: underlineColor }}>
      <strong>{children}</strong>
    </h1>
  );
};

export default TituloSublinhado;
