export const whatsappNumber = "5541992696534";
export const defaultMessage = "Olá! Eu venho do site Rtralescki e gostaria de informações.";

export const handleWhatsAppClick = (
  number: string = whatsappNumber,
  message: string = defaultMessage
) => {
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
