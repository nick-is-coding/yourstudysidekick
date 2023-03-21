import React, { useState, useEffect } from 'react';
import BreakFace from '../assets/face2.png';
import Face from '../assets/face01.png';

const Timer = ({ onComplete, setIsBreak, setImageSrc }) => {
  const [seconds, setSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning && seconds > 0) {
      intervalId = setInterval(() => setSeconds(prevSeconds => prevSeconds - 1), 1000);
    } else if (seconds === 0) {
      clearInterval(intervalId);
      onComplete();
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
  };

  const takeBreak = () => {
    setIsRunning(false);
    setSeconds(300);
    setIsBreak(true);
    setImageSrc(BreakFace);
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
