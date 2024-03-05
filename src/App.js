import React, { useState } from 'react';

const RunningExercise = () => {
  const [lapTimes, setLapTimes] = useState([]);

  const recordLap = () => {
    const currentTime = new Date().toLocaleTimeString();
    setLapTimes([...lapTimes, currentTime]);
  };

  return (
    <div>
      <button onClick={recordLap}>Record Lap</button>
      <ul>
        {lapTimes.map((lapTime, index) => (
          <li key={index}>{lapTime}</li>
        ))}
      </ul>
    </div>
  );
};

export default RunningExercise;
