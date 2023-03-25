import React, { useState, useEffect, useRef } from 'react';
import BreakFace from '../assets/c1-break.png';
import Face from '../assets/c1-normal.png';
import TimerSound from '../assets/timer-done.mp3';


const Timer = ({ onComplete, setIsBreak, setImageSrc, setBreakImg }) => {
  const [seconds, setSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const hasPlayedSoundRef = useRef(false);

  useEffect(() => {
    let intervalId;
    if (isRunning && seconds > 0) {
      intervalId = setInterval(() => setSeconds(prevSeconds => prevSeconds - 1), 1000);
    } else if (seconds === 0 && !hasPlayedSoundRef.current) {
      clearInterval(intervalId);
      onComplete();
      const audio = new Audio(TimerSound);
      audio.play();
      hasPlayedSoundRef.current = true;
      audio.addEventListener('ended', () => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
    return () => clearInterval(intervalId);
  }, [isRunning, seconds, onComplete]);


  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(1500);
    setIsBreak(false);
    setImageSrc(Face);
    hasPlayedSoundRef.current = false;
  };

  const takeBreak = () => {
    setIsRunning(false);
    setSeconds(300);
    setIsBreak(true);
    setImageSrc(BreakFace);
    hasPlayedSoundRef.current = false;
  }

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
