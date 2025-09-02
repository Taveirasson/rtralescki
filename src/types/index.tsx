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
