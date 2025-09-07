import { meusContatos } from "../types";

const whatsappNumber = meusContatos.whatsappNumber;

export const defaultMessage = "Olá! Eu venho do site Rtralescki e gostaria de informações.";


interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

export const handleWhatsAppClick = () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
  window.open(url, "_blank");
};

export const handleWhatsAppMensage = (mensage: string) => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensage)}`;
  window.open(url, "_blank");
};

export const handleWhatsAppForm = (form: FormData) => {
  const { nome, email, mensagem } = form;
  let texto: string = "Olá!"; // defaultMessage

  if (mensagem) {
    texto += `${nome ? ` Meu nome é ${nome}` : ""}${email ? ` com email de contato ${email}` : ""} e venho pelo site Rtralescki para saber sobre: ${mensagem}`;
  } else if (nome || email) {
    texto += `${nome ? ` Meu nome é ${nome}` : ""}${nome && email ? " e" : ""}${email ? ` meu email de contato é ${email}` : ""}. Venho pelo site Rtralescki e gostaria de saber mais informações.`;
  } else {
    texto = defaultMessage;
  }
  handleWhatsAppMensage(texto);
}