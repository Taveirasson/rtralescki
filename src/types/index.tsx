export type imageSize = "default" | "large";

export type CardProps = {
  title: string;
  src?: string;
  imageSize?: imageSize;
  description: string;
};


export interface ProjetoUtil {
    imagem: string;
    titulo: string;
    descricao: string;
    imageSize?: imageSize    
  }

export const meusContatos = {
  email: "rtralescki@gmail.com",
  instagram: "https://www.instagram.com/rtralescki.engcivil/",
  formatInstagram: "@rtralescki.engcivil",
  whatsappNumber: "5541992696534",
  formatNumber: "(41) 99269-6534",
  endereco: "Portão, Curitiba - PR, Brasil"
}