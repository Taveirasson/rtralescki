import React from 'react';
import './App.css';
import Menu from './pages/Menu/Menu';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';
import Servicos from './pages/Servicos/Servicos';
import Galeria from './pages/Galeria/Galeria';
import Home from './pages/Home/Home';
import Diferencial from './pages/Diferenciais/Diferencial';


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
        <Galeria />
        <Contato />
        <section></section>
      </div>
    </div>
  );
}

export default App;
