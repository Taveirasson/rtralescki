import React from 'react';
import './Card.css'
import { CardProps } from '../../types';



const Card: React.FC<CardProps> = ({ title, src, imageSize, description }) => {
  return (
    <div className="card">
        {src && <img src={src} alt={title}
                  className={imageSize === "large" ? "large-image" : "card-icon"}
        />}
        <div className='content'>
          <p className='subtitle'>{title}</p>
          <p className='description'>{description}</p>
        </div>
    </div>
  );
};

export default Card;