import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Sobre from './components/Sobre/Sobre';
import Equipe from './components/Equipe/Equipe';
import Contato from './components/Contato';
import Servicos from './components/Servicos';
// import WideIcon from './components/WideIcon';

function App() {
  return (
    <div className="App">
      <Menu />
      <div style={{ paddingTop: '200px' }}>
        {/* <WideIcon /> */}
        <Sobre />
        <Equipe />
        <Servicos />  
        <Contato />
      </div>
    </div>
  );
}

export default App;
