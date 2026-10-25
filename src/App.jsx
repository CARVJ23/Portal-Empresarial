


import DatosEmpresa from './componentes/DatosEmpresa';
import Testimonios from './componentes/Testimonios';
import Beneficios from './componentes/Beneficios';
import Tecnologias from './componentes/Tecnologias';
import FormularioContacto from './componentes/FormularioContacto';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Portal Empresarial</h1>
      <DatosEmpresa />
      <Testimonios />
      <Beneficios />
      <Tecnologias />
      <FormularioContacto />
    </div>
  );
}

export default App;
