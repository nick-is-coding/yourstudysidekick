import React, { useState, useEffect, useRef } from 'react';
import TimerSound from '../assets/timer-done.mp3';
import characters from './characters';


const Timer = ({ onComplete, setIsBreak, setCharacterInfo, characterInfo, isBreak }) => {
  const [seconds, setSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const hasPlayedSoundRef = useRef(false);

  useEffect(() => {
    let intervalId;
    if (isRunning && seconds > 0) {
      intervalId = setInterval(() => setSeconds(prevSeconds => prevSeconds - 1), 1000);
    } else if (seconds === 0 && !hasPlayedSoundRef.current) {
      clearInterval(intervalId);
      onComplete(isBreak);
      const audio = new Audio(TimerSound);
      audio.play();
      hasPlayedSoundRef.current = true;
      audio.addEventListener('ended', () => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
    return () => clearInterval(intervalId);
  }, [isRunning, seconds, onComplete, isBreak]);

  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const takeBreak = () => {
    setIsRunning(false);
    setSeconds(300);
    setIsBreak(true);
    const selectedCharacter = JSON.parse(localStorage.getItem("selectedCharacter"));
    console.log(selectedCharacter);
    const character = characters.find(char => char.id === selectedCharacter);
    console.log(character);
    setCharacterInfo({
      name: character.name,
      image: character.break,
    });
    hasPlayedSoundRef.current = false;
  };
  
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(1500);
    setIsBreak(false);
    const selectedCharacter = JSON.parse(localStorage.getItem("selectedCharacter"));
    console.log(selectedCharacter);
    const character = characters.find(char => char.id === selectedCharacter);
    console.log(character);
    setCharacterInfo({
      name: character.name,
      image: character.normal,
    });
    hasPlayedSoundRef.current = false;
  };
  

  const formattedTime = new Date(seconds * 1000).toISOString().substr(14, 5);

  return (
    <div className='pom-container'>
      <div className="pomodoro-timer">
        <div className='buttons-container'>
          <button className='timer-button' onClick={handleReset}> 
            WORK
          </button>
          <button className='timer-button' onClick={takeBreak}>
            BREAK
          </button>
        </div>
        <h2 className="timer-text">{formattedTime}</h2>
        <div className="buttons-container">
          <button className="timer-button" onClick={handleStartStop}>
            {isRunning ? 'STOP' : 'START'}
          </button>
          <button className="timer-button" onClick={handleReset}>RESET</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
