import React, { useState, useEffect } from "react";
import "./App.css"; // Import your custom CSS file

const ProgressBar = ({ progress }) => {
  const barWidth = `${progress}%`;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: barWidth }}></div>
    </div>
  );
};

const App = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (progress < 100) {
          setProgress((prevProgress) => prevProgress + 10);
        } else {
          clearInterval(interval);
          setIsRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, progress]);

  const startProgress = () => {
    setIsRunning(true);
  };

  const resetProgress = () => {
    setProgress(0);
    setIsRunning(false);
  };

  return (
    <div className="container">
      <h1 className="title">Progress Bar</h1>
      <ProgressBar progress={progress} />
      <div className="button-container">
        <button
          onClick={startProgress}
          disabled={isRunning}
          className="start-button"
        >
          Start
        </button>
        <button onClick={resetProgress} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
