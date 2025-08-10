import React, { useEffect, useState, useRef } from "react";
import './menu.css'
import { handleWhatsAppClick } from "../../utils/whatsapp";
import { publicSrc} from "../../utils/publicSrc";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";


const Menu: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuAberto, setMenuAberto] = useState(false);
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
      const offset = -20;
      const top = section.getBoundingClientRect().top + window.pageYOffset + offset;
      
      window.scrollTo({
        top,
        behavior: "smooth"
      });

      // section.scrollIntoView({behavior: "smooth" });
      setActiveSection(id); 
      setMenuAberto(false);
      ignoreObserver.current = true;
      setTimeout(() => {
        ignoreObserver.current = false;
      }, 1000);
    }
  };

  return (
    <>
    <div className={`menu-wrapper ${isTop ? 'at-top' : 'scrolled'}`}>
      {/* <nav className={`menu-top`}>
      </nav> */}
    
      <nav className={`menu-container`}>
        <img className="menu-logo" src={`${publicSrc}/assets/Logo04.png`} alt="Logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        <button className="menu-toggle" onClick={() => setMenuAberto(!menuAberto)}>
          {menuAberto ? (
            <CloseIcon size={32} color="var(--cor-texto-claro)" />
          ) : (
            <MenuIcon size={32} color="var(--cor-texto-claro)" />
          )}
        </button>
        <div className={`menu-buttons ${menuAberto ? 'show' : ''}`}>
          <button className={activeSection === "sobre" ? "active" : ""} onClick={() => scrollToSection("sobre")}>SOBRE</button>
          <button className={activeSection === "diferencial" ? "active" : ""} onClick={() => scrollToSection("diferencial")}>DIFERENCIAL</button>
          <button className={activeSection === "servicos" ? "active" : ""} onClick={() => scrollToSection("servicos")}>NOSSOS SERVIÇOS</button>
          <button className={activeSection === "exemplos" ? "active" : ""} onClick={() => scrollToSection("exemplos")}>NOSSOS PROJETOS</button>
        
        </div>
        <div className="contato" onClick={() => handleWhatsAppClick()} style={{ cursor: 'pointer' }}>
          <div className="whatsappIconWrapper">
            <img src={`${publicSrc}/assets/whatsapp.svg`} alt="WhatsApp" className="whatsappIcon" />
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
