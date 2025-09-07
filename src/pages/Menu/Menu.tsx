import React, { useEffect, useState, useRef } from "react";
import "./Menu.css";
import { publicSrc } from "../../utils/publicSrc";
import scrollToSection from "../../utils/scrollToSection";

import closeIcon from '../../assets/close-md-svgrepo-com.svg';
import hamburgerIcon from '../../assets/burger-menu-svgrepo-com.svg';

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

      sections.forEach((section) => {
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

  const handleButton = (section: string) => {
    scrollToSection(section);
    setMenuAberto(!menuAberto);
  }

  return (
    <div className={`menu-wrapper ${isTop ? "at-top" : "scrolled"}`}>
      <nav className="menu-container">
        <img
          className="menu-logo"
          src={`${publicSrc}/assets/Logo04.png`}
          alt="Logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        <button
          className="menu-toggle"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir/fechar menu"
        >
          {menuAberto ? (
            <img src={closeIcon} alt="close" width={32} height={32}/>
          ) : (
            <img src={hamburgerIcon} alt="hamburguer" width={32} height={32}/>
          )}
        </button>

        <div className={`menu-buttons ${menuAberto ? "show" : ""}`}>
          <button
            className={activeSection === "sobre" ? "active" : ""}
            onClick={() => handleButton("sobre")}
          >
            SOBRE
          </button>
          <button
            className={activeSection === "diferencial" ? "active" : ""}
            onClick={() => handleButton("diferencial")}
          >
            DIFERENCIAL
          </button>
          <button
            className={activeSection === "servicos" ? "active" : ""}
            onClick={() => handleButton("servicos")}
          >
            NOSSOS SERVIÇOS
          </button>
          <button
            className={activeSection === "projetos" ? "active" : ""}
            onClick={() => handleButton("projetos")}
          >
            NOSSOS PROJETOS
          </button>
          <button
            className={
              activeSection === "contatos" || activeSection === "clientes"
                ? "active"
                : ""
            }
            onClick={() => handleButton("contatos")}
          >
            NOSSOS CONTATOS
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
