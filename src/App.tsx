import React from 'react';
import './App.css';
import Menu from './Pages/Menu/Menu';
import Sobre from './Pages/Sobre/Sobre';
import Contato from './Pages/Contato/Contato';
import Servicos from './Pages/Servicos/Servicos';
import Galeria from './Pages/Galeria/Galeria';
import Home from './Pages/Home/Home';
import Diferencial from './Pages/Diferenciais/Diferencial';
import Projetos from './Pages/Projetos/Projetos';


function App() {
  return (
    <div className="App">
      <Menu />
      <div className='sections'>
        <Home />
        <Sobre />
        <Diferencial />
        {/* <Equipe /> */}
        <Servicos />  
        <Projetos />
        <Galeria />
        <Contato />
        <section></section>
      </div>
    </div>
  );
}

export default App;
