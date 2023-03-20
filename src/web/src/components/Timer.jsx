import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning && seconds > 0) {
      intervalId = setInterval(() => setSeconds(prevSeconds => prevSeconds - 1), 1000);
    } else if (seconds === 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);

  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(1500);
  };

  const formattedTime = new Date(seconds * 1000).toISOString().substr(14, 5);

  return (
    <div className='pom-container'>
      <div className="pomodoro-timer">
        <h2 className="timer-text">{formattedTime}</h2>
        <div className="buttons-container">
          <button className="timer-button" onClick={handleStartStop}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button className="timer-button" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
