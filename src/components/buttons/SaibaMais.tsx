import React from 'react';
import './SaibaMais.css'

type ButtonProps = {
  onClick?: () => void;
  label?: string;
};

const SaibaMaisButton: React.FC<ButtonProps> = ({ onClick, label = 'Saiba mais' }) => {
  return (
    <button 
      className="saibaMais"
      type='button'
      aria-label={label}
      onClick={onClick} 
    >
      {label}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        fill="none" 
        stroke="#D9822B" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        viewBox="0 0 24 24"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  );
};

export default SaibaMaisButton;