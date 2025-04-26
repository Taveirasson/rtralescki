import React from "react";

interface Props {
    titulo?: string;
    paragrafos: string[];
    imagemSrc?: string;
    imagemAlt? : string;
    conteudoDireita?: boolean;
}

const ParagrafoComImagem: React.FC<Props> = ({
    titulo, paragrafos, imagemSrc, imagemAlt, conteudoDireita = false,
}) => {
    return (
        <div className={`sobre-container ${conteudoDireita ? "conteudo-direita" : "conteudo-esquerda"}`}>
            <div className="sobre-texto texto-menor">
                {titulo && <h2>{titulo}</h2>}
                {paragrafos.map((texto, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: texto }} />
                    ))}
            </div>
            {imagemSrc && (
                <div className="sobre-imagem">
                    <img src={imagemSrc} alt={imagemAlt} />
                </div>
            )}
        </div>
    );
};


export default ParagrafoComImagem