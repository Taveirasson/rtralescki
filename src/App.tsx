import './App.css';
import Menu from './pages/menu/Menu';
import Sobre from './pages/sobre/Sobre';
import Rodape from './pages/rodape/Rodape';
import Servicos from './pages/servicos/Servicos';
import Clientes from './pages/clientes/Clientes';
import Home from './pages/home/Home';
import Diferencial from './pages/diferenciais/Diferencial';
import Projetos from './pages/projetos/Projetos';
import Contatos from './pages/contatos/Contatos';
import WhatsAppFloatingButton from './components/buttons/WhatsAppFloatingButton';


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
