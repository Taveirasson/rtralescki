import React from 'react';
import './App.css';
import Menu from './Pages/Menu/Menu';
import Sobre from './Pages/Sobre/Sobre';
import Rodape from './Pages/Rodape/Rodape';
import Servicos from './Pages/Servicos/Servicos';
import Clientes from './Pages/Clientes/Clientes';
import Home from './Pages/Home/Home';
import Diferencial from './Pages/Diferenciais/Diferencial';
import Projetos from './Pages/Projetos/Projetos';
import Contatos from './Pages/Contatos/Contatos';
import WhatsAppFloatingButton from './components/Buttons/WhatsAppFloatingButton';


function App() {
  return (
    <div className="App">
      <Menu />
      <WhatsAppFloatingButton />
      <div className='sections'>
        <Home />
        <Sobre />
        <Diferencial />
        {/* <Equipe /> */}
        <Servicos />  
        <Projetos />
        <Contatos />
        <Clientes />
        <Rodape />
      </div>
    </div>
  );
}

export default App;
