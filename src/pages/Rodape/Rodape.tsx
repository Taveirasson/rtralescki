import React from "react";
import "./Rodape.css";
import { handleWhatsAppClick } from "../../utils/whatsapp";
import { publicSrc} from "../../utils/publicSrc";
import scrollToSection from "../../utils/scrollToSection";
import { meusContatos } from "../../types";

const logo = `${publicSrc}/assets/Logo02.png`;

const Rodape: React.FC = () => {
  return (
    <footer id="contato" className="footer">
      <div className="footerContainer">
        {/* Logo */}
        <div className="logo">
          <img 
            src={logo}
            alt="Logo RD Arquitetura"
          />
        </div>

        {/* Navegação */}
        <div className="navegacao">
          <h3 className="titulo">Navegue pelo site</h3>
          <div className="linha" />
          <ul className="lista">
            <li className="item link" onClick={() => scrollToSection("sobre")}>Sobre nós</li>
            <li className="item link" onClick={() => scrollToSection("diferencial")}>Nosso diferencial</li>
            <li className="item link" onClick={() => scrollToSection("servicos")}>Nossos serviços</li>
            <li className="item link" onClick={() => scrollToSection("projetos")}>Nossos projetos</li>
            <li className="item link" onClick={() => scrollToSection("contatos")}>Nossos Contatos</li>
            <li className="item link" onClick={() => scrollToSection("clientes")}>Nossos Clientes</li>
          </ul>
        </div>

        <div className="contato">
          <h3 className="titulo">Contato</h3>
          <div className="linha" />
          <ul className="lista">
            <li className="item link" onClick={()=>handleWhatsAppClick()}>WhatsApp: {meusContatos.formatNumber}</li>
            <li className="item">
              <a href="mailto:rtralescki@gmail.com" className="link">E-mail: {meusContatos.email}</a>
            </li>
            <li className="item"><a href="https://www.instagram.com/rtralescki.engcivil/" className="link" target="_blank" rel="noopener noreferrer"> Instagram: {meusContatos.formatInstagram}</a></li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        © R Tralescki Arquitetura e Engenharia.
      </div>
    </footer>
  );
};

export default Rodape;
