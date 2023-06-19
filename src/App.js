import './App.css';
import TaskListComponent from './components/containers/TaskList';
import Ejemplo1 from './hooks/Ejemplo1.jsx'
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<TaskListComponent/>
        <Ejemplo1/>
        <Ejemplo2/>*/}
        <Ejemplo3/>
        <Ejemplo4 
          name="Cristhian"
        >
          <h3>Este es el hijo que se muestra en las props.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
