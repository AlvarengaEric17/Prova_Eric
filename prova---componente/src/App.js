import './App.css';
import Noticia from './componente/Noticia';
import Caregoria from './componente/Categoria';

function App() {
  return (
    <div className="App">
      <Noticia />

      <Caregoria fonte="https://g1.globo.com/am/amazonas/noticia/2023/09/16/aviao-cai-no-interior-do-amazonas.ghtml" data="19/09/2023" categoria="Tragédia" />
    </div>
  );
}

export default App;
