import './App.css';
import Projetos from './componentes/projetos';
import Nav from './componentes/navegacao';
import Apresentacao from './componentes/apresentacao';
import Habilidades from './componentes/habilidades';
import Footer from './componentes/footer';


function App() {
  return (
    <div className='app'>
      < Nav className='nav' />
      < Apresentacao  />
      < Projetos />
      < Habilidades />
      < Footer />
    </div>
  );
}

export default App;
