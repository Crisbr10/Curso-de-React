import logo from './logo.svg';
import './App.css';
import Contacto from './components/Contacto';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contacto
          nombre="Cristhian"
          apellido="Borges"
          email="borgescristhian1@gmail.com"
          conectado={false}
        />
      </header>
    </div>
  );
}

export default App;
