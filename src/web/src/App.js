import React, { useState } from "react";

import Person from './components/Person';
import Timer from './components/Timer';
import Note from './components/Note';
import TodoWindow from './components/TodoWindow';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from "./components/LoginPage";

import Face from './assets/c1-normal.png';
import BreakFace from './assets/c1-break.png';
import CheerFace from './assets/c1-cheer.png';

import './App.css';

function App() {
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
    <Router>
      <Switch>
        <Route path='/login'>
        <div>
          <LoginPage/>
        </div>
        </Route>
        <Route path='/main'>
          <div className="App">
            <div className='circle'></div>
            <h1 className="title">STUDY BUDDY</h1>
            <Person
              imageSrc={imageSrc}
            />
            <Timer
              onComplete={handleTimerComplete}
              setIsBreak={setIsBreak}
              setImageSrc={setImageSrc}
              isBreak={isBreak}
            />
              <Note/>
              <TodoWindow/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
