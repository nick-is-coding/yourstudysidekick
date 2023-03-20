import './App.css';
import Person from './components/Person';
import Timer from './components/Timer';
import OptionButton from './components/OptionButton';
import Note from './components/Note';
import TodoWindow from './components/TodoWindow';
import React, {useState} from 'react';

function App() {
  const [showNote, setShowNote] = useState(false);
  const [showTodo, setShowTodo] = useState(false);

  return (
    <div className="App">
      <div className='circle'></div>
      <h1 class="title">STUDY BUDDY</h1>
      <Person/>
      <Timer/>
      <OptionButton 
        showNote={() => setShowNote(true)}
        showTodo={() => setShowTodo(true)}
      />
      {showNote && <Note onStop={() => setShowNote(false)} />}
      {showTodo && <TodoWindow />}
    </div>
  );
}

export default App;
