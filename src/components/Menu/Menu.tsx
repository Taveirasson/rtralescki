import React, { useEffect, useState, useRef } from "react";
import './menu.css'
import { handleWhatsAppClick } from "../../utils/whatsapp";

const Menu: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("");
  const ignoreObserver = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);      
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
  
    const handleScroll = () => {
      if (ignoreObserver.current) return;
  
      let currentSectionId = "";
      const centerY = window.innerHeight / 2;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= centerY && rect.bottom >= centerY) {
          currentSectionId = section.getAttribute("id") || "";
        }


        // if (rect.top <= window.innerHeight / 2) {
        //   currentSectionId = section.getAttribute("id") || "";
        // }
      });
  
      if (currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({behavior: "smooth" });
      setActiveSection(id); 
      ignoreObserver.current = true;
      setTimeout(() => {
        ignoreObserver.current = false;
      }, 1000);
    }
  };

  return (
    <>
    <div className={`menu-wrapper ${isTop ? 'at-top' : 'scrolled'}`}>
      <nav className={`menu-top`}>
      </nav>
    
      <nav className={`menu-container`}>
        <img className="menu-logo" src="/assets/Logo04.png" alt="Logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        <div className="menu-buttons">
          <button className={activeSection === "sobre" ? "active" : ""} onClick={() => scrollToSection("sobre")}>SOBRE</button>
          <button className={activeSection === "diferencial" ? "active" : ""} onClick={() => scrollToSection("diferencial")}>DIFERENCIAL</button>
          <button className={activeSection === "servicos" ? "active" : ""} onClick={() => scrollToSection("servicos")}>NOSSOS SERVIÇOS</button>
          <button className={activeSection === "exemplos" ? "active" : ""} onClick={() => scrollToSection("exemplos")}>NOSSOS PROJETOS</button>
        
        </div>
        <div className="contato" onClick={() => handleWhatsAppClick()} style={{ cursor: 'pointer' }}>
          <div className="whatsappIconWrapper">
            <img src="/assets/whatsapp.svg" alt="WhatsApp" className="whatsappIcon" />
          </div>
          <div className="textos">
            <span>Entre em contato</span>
            <strong>(41) 99269-6534</strong>
          </div>
      </div>
      </nav>
    </div>
  </>
  );
};

export default Menu;
