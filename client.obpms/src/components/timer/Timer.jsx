import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [targetTime, setTargetTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);

  const handleTimeChange = (event) => {
    const inputTime = new Date(event.target.value).getTime();
    setTargetTime(inputTime);
    console.log(inputTime)
  };

  useEffect(() => {
    const updateRemainingTime = () => {
      if (targetTime) {
        const currentTime = new Date().getTime();
        const remainingSeconds = Math.floor((targetTime - currentTime) / 1000);

        if (remainingSeconds <= 0) {
          setRemainingTime(0);
        } else {
          setRemainingTime(remainingSeconds);
        }
      }
    };

    const timer = setInterval(updateRemainingTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetTime]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Set a future time:</h2>
      <input type="datetime-local" onChange={handleTimeChange} />
      {remainingTime !== null && (
        <h2>
          Remaining Time: {formatTime(remainingTime)}
        </h2>
      )}
    </div>
  );
};

export default Timer;