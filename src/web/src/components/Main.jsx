import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Person from "./Person";
import Timer from "./Timer";
import Note from "./Note";
import TodoWindow from "./TodoWindow";
import characters from "./characters";
import "../App.css";

const Main = () => {
  const [characterInfo, setCharacterInfo] = useState({});
  const [isBreak, setIsBreak] = useState(false);
  const history = useHistory();

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

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      const removeListeners = () => {
        localStorage.removeItem('selectedCharacter');
        localStorage.removeItem('isLoggedIn');
        history.push('/login');
      };
  
      window.addEventListener('unload', removeListeners);
  
      return () => {
        window.removeEventListener('unload', removeListeners);
      };
    } else {
      const selectedCharacter = localStorage.getItem('selectedCharacter');
      if (!selectedCharacter) {
        history.push('/login');
      }
    }
  }, [history]);

  return (
    <div className="App">
      <div className="circle"></div>
      <h1 className="title">STUDY SIDEKICK</h1>
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
  );
};

export default Main;
