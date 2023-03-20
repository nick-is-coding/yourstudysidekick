import './App.css';
import Person from './components/Person';
import Timer from './components/Timer';
import TodoWindow from './components/TodoWindow';

function App() {
  return (
    <div className="App">
      <div className='circle'></div>
      <h1 class="title">STUDY BUDDY</h1>
      <Person/>
      <Timer/>
      <div>
        <TodoWindow/>
      </div>
    </div>
  );
}

export default App;
