import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Sobre from './components/Sobre/Sobre';
// import Equipe from './components/Equipe/Equipe';
import Contato from './components/Contato/Contato';
import Servicos from './components/Servicos/Servicos';


function App() {
  return (
    <div className="App">
      <Menu />
      <div style={{ paddingTop: '200px' }}>
        <Sobre />
        {/* <Equipe /> */}
        <Servicos />  
        <Contato />
      </div>
    </div>
  );
}

export default App;
