import React from "react";
import "./Clientes.css";
import { publicSrc} from "../../utils/publicSrc";


interface Fotos {
  nome: string;
  src: string;
}

const clintes: Fotos[] = [
 {nome: "nome01", src: "/assets/clientes/cliente01.png"}, 
 {nome: "nome02", src: "/assets/clientes/cliente02.png"}, 
 {nome: "nome03", src: "/assets/clientes/cliente03.png"}, 
 {nome: "nome04", src: "/assets/clientes/cliente04.png"}, 
 {nome: "nome05", src: "/assets/clientes/cliente05.png"}, 
 {nome: "nome06", src: "/assets/clientes/cliente06.png"}, 
]

const Clientes: React.FC = () => {
  return (
    <section id="clientes" className="section"> 
      <div className="container">
        <h1 className='title'>Alguns de nossos clientes</h1>
        <div className="esteira">
          <div className="esteira-conteudo">
            {[...clintes, ...clintes, ...clintes].map((cliente, index) => (
              <div key={index} className="cliente-item">
                <img src={`${publicSrc}${cliente.src}`} alt={cliente.nome}></img>
                {/* {cliente.nome || 'Cliente ' + (index + 1)} */}
              </div>
            ))}
          </div>
          </div>
      </div>
    </section>
  );
};

export default Clientes;
