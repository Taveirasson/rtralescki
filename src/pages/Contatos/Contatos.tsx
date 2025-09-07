import React, { useState } from "react";
import {handleWhatsAppForm, handleWhatsAppClick } from "../../utils/whatsapp";
import "./Contatos.css";
import IconComponent from "../../components/Icon/Icon";

import envelope from '../../assets/envelope-svgrepo-com.svg';
import instagramIcon from '../../assets/icons8-instagram.svg';
import whatsAppIcon from '../../assets/icons8-whatsapp.svg';
import localIcon from '../../assets/location-svgrepo-com.svg'
import { meusContatos } from "../../types";


const Contatos: React.FC = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsAppForm(form);
  };

  return (
    <section id="contatos" className="section"> 
      <div className="container">
        <div className="contato-grid">
          <div className="direita">
            <h1 className="title">Entre em contato</h1>
            <p>            
              Nossa equipe está pronta para ajudar no
              seu próximo projeto. Fale conosco pelos canais abaixo ou envie uma
              mensagem pelo formulário.
            </p>
            <div className="icon-list">
              <IconComponent onClick={() => window.open(meusContatos.instagram, "_blank")} icon={instagramIcon} label="Instagram" value={meusContatos.formatInstagram}  />
              <IconComponent onClick={handleWhatsAppClick} icon={whatsAppIcon} label="WhatsApp" value={meusContatos.formatNumber}  />
              <IconComponent icon={envelope} label="Email" value={meusContatos.email}  />
              <IconComponent icon={localIcon} label="Endereço" value={meusContatos.endereco} />
            </div>
          </div>

          <div className="esquerda">
            <h1 className="title">Envie uma mensagem por aqui!</h1>
            <form>  
              <label>Nome<input type="text" name="nome" value={form.nome} onChange={handleChange} maxLength={50} required/></label>
              <label>Email<input type="email" name="email" value={form.email} onChange={handleChange} maxLength={50} required/></label>
              <label>Mensagem<textarea name="mensagem" value={form.mensagem} onChange={handleChange} rows={4} maxLength={210} required/></label>
              
              <button type="submit" onClick={handleWhatsApp} className="button-whatsapp">Entrar em contato por WhatsApp</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contatos;
