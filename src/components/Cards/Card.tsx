import React from 'react';
import './Card.css'
import { CardProps } from '../../types';



const Card: React.FC<CardProps> = ({ title, src, imageSize, description }) => {
  return (
    <div className="card">
        {src && <img src={src} alt={title}
                  className={`card-icon ${imageSize === "large" ? "large-image" : ""}`}
        />}
        <p className='subtitle'>{title}</p>
        <p>{description}</p>
    </div>
  );
};

export default Card;