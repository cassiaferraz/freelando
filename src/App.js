import Estilos from "./componentes/EstilosGlobais/Estilos";
import Card from "./Card/Card";
import ProvedorTema from "./componentes/ProvedorTema/ProvedorTema";

function App() {
  return (
    <ProvedorTema>
      <Estilos/>
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
