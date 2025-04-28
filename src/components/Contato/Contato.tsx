import React from "react";
import styles from "./Contato.module.css";
import { handleWhatsAppClick } from "../../utils/whatsapp";

const logo = "assets/Logo02.png";
const Contato: React.FC = () => {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <img 
            src={logo}
            alt="Logo RD Arquitetura"
          />
        </div>

        {/* Navegação */}
        <div className={styles.navegacao}>
          <h3 className={styles.titulo}>Navegue pelo site</h3>
          <div className={styles.linha} />
          <ul className={styles.lista}>
            {/* <li className={styles.item}><a href="#inicio" className={styles.link}>Início</a></li> */}
            <li className={styles.item}><a href="#sobre" className={styles.link}>Sobre nós</a></li>
            <li className={styles.item}><a href="#diferencial" className={styles.link}>Nosso diferencial</a></li>
            <li className={styles.item}><a href="#servicos" className={styles.link}>Nossos serviços</a></li>
            <li className={styles.item}><a href="#exemplos" className={styles.link}>Nossos projetos</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div className={styles.contato}>
          <h3 className={styles.titulo}>Contato</h3>
          <div className={styles.linha} />
          <ul className={styles.lista}>
            <li className={`${styles.item}`} onClick={()=>handleWhatsAppClick()}>📞 <span className={styles.link}>(41)99269-6534</span></li>
            <li className={styles.item}>
              ✉️ <a href="mailto:rtralescki@gmail.com" className={styles.link}>E-mail: rtralescki@gmail.com</a>
            </li>
            <li className={styles.item}>📸 <a href="https://www.instagram.com/rtralescki.engcivil/" className={styles.link} target="_blank" rel="noopener noreferrer">@rtralescki.engcivil</a></li>
          </ul>
          {/* <button
            onClick={handleWhatsAppClick}
            className={styles.whatsappButton}
            aria-label="Fale conosco no WhatsApp"
          >
          <img src="/assets/whatsapp.svg" alt="WhatsApp" className={styles.whatsappIcon} />
        </button> */}
        </div>
      </div>

      <div className={styles.copyright}>
        © R Tralescki Arquitetura e Engenharia.
      </div>
    </footer>
  );
};

export default Contato;
