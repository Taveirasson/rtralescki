import React from "react";
import './Icon.css'

type ContatoItemProps = {
  icon: string;
  label: string;
  value: string;
  onClick?: () => void;
};

const IconComponent: React.FC<ContatoItemProps> = ({ icon, label, value, onClick }) => {
    return (
        <div className="contato-item" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
            <img src={icon} alt={label} className="contato-icon" />
            <div className="contato-info">
            <span className="contato-label">{label}</span>
            <span className="contato-value">{value}</span>
            </div>
        </div>
        );
};

export default IconComponent;
