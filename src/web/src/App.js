import React, {useState} from 'react';

import Person from './components/Person';
import Timer from './components/Timer';
import OptionButton from './components/OptionButton';
import Note from './components/Note';
import TodoWindow from './components/TodoWindow';

import Face from './assets/face01.png';
import BreakFace from './assets/face2.png';
import CheerFace from './assets/face3.png';

import './App.css';

function App() {
  const [showNote, setShowNote] = useState(false);
  const [showTodo, setShowTodo] = useState(false);
  const [imageSrc, setImageSrc] = useState(Face);
  const [isBreak, setIsBreak] = useState(false);

  const handleTimerComplete = (isBreak) => {
    if (isBreak) {
      setImageSrc(BreakFace);
    } else {
      setImageSrc(CheerFace);
    }
    setIsBreak(prevIsBreak => !prevIsBreak);
  };

  return (
    <div className="App">
      <div className='circle'></div>
      <h1 class="title">STUDY BUDDY</h1>
      <Person
      imageSrc={imageSrc}
      />
      <Timer
        onComplete={handleTimerComplete}
        setIsBreak={setIsBreak}
        setImageSrc={setImageSrc}
        isBreak={isBreak}
      />
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
