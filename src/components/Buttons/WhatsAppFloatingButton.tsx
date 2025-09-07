import React from 'react';
import './WhatsAppFloatingButton.css'
import { handleWhatsAppClick } from '../../utils/whatsapp';
import whatsAppIcon from '../../assets/whatsapp.svg';



const WhatsAppFloatingButton: React.FC = () => {
  return (
    <button
        onClick={handleWhatsAppClick}
        className="whatsappButton"
        aria-label="Fale conosco no WhatsApp"
    >
    
        <img src={whatsAppIcon} alt="WhatsApp" className="whatsappIcon" />
    
    </button> 
  );
};

export default WhatsAppFloatingButton;