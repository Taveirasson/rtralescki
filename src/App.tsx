import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Sobre from './components/Sobre/Sobre';
// import Equipe from './components/Equipe/Equipe';
import Contato from './components/Contato/Contato';
import Servicos from './components/Servicos/Servicos';
import Galeria from './components/Galeria/Galeria';


function App() {
  return (
    <div className="App">
      <Menu />
      <div>
        <Sobre />
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
