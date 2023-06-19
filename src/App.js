import './App.css';
import TaskListComponent from './components/containers/TaskList';
import Ejemplo1 from './hooks/Ejemplo1.jsx'
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<TaskListComponent/>
        <Ejemplo1/>
        <Ejemplo2/>*/}
        <Ejemplo3/>
      </header>
    </div>
  );
}

export default App;
