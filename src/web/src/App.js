import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Person from "./components/Person";
import Timer from "./components/Timer";
import Note from "./components/Note";
import TodoWindow from "./components/TodoWindow";
import characters from "./components/characters";
import GoBack from "./components/GoBack";
import "./App.css";

const App = () => {
  const [characterInfo, setCharacterInfo] = useState({});
  const [isBreak, setIsBreak] = useState(false);

  const handleTimerComplete = (isBreak) => {
    const selectedCharacter = JSON.parse(localStorage.getItem("selectedCharacter"));
    const character = characters.find(char => char.id === selectedCharacter);
    setCharacterInfo({
      name: character.name,
      image: character.break,
    });

    console.log(selectedCharacter);
    if (isBreak) {
      setCharacterInfo({
        name: character.name,
        image: character.break
      });
    } else {
      setCharacterInfo({
        name: character.name,
        image: character.cheer
      });
    }
    setIsBreak(isBreak);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
        {localStorage.getItem('isLoggedIn') ? <Redirect to="/main" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <LoginPage setCharacterInfo={setCharacterInfo} characters={characters} />
        </Route>
        <Route path="/main">
          <div className="App">
            <div className="circle"></div>
            <h1 className="title">STUDY SIDEKICK</h1>
            <GoBack/>
            <Person characterInfo={characterInfo} />
            <Timer
              onComplete={handleTimerComplete}
              setIsBreak={setIsBreak}
              setCharacterInfo={setCharacterInfo}
              characterInfo={characterInfo}
              setBreakImg={setCharacterInfo}
              isBreak={isBreak}
            />
            <Note />
            <TodoWindow />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
