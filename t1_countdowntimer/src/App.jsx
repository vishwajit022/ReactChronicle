import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const [start, setStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const intervalRef = useRef();

  function handleStart() {
    setStart(true);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let remainingSeconds = totalSeconds;

    intervalRef.current = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds < 0) {
        clearInterval(intervalRef.current);
        setStart(false);
      } else {
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    setStart(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-500">
        <h1 className="text-4xl font-medium ">Countdown Timer</h1>
        {!start && (
          <div className="flex gap-2 mt-10 input-container">
            <input
              className="w-[50px] pl-2"
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="HH"
            />
            <input
              className="w-[50px] pl-2"
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              placeholder="MM"
            />
            <input
              className="w-[50px] pl-2"
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              placeholder="SS"
            />
          </div>
        )}
        <div className="flex gap-10 mt-5 button">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleStart}
            className="px-4 py-2 bg-green-400 rounded"
          >
            Start
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleStop}
            className="px-4 py-2 bg-red-400 rounded"
          >
            Stop
          </motion.button>
        </div>
        {start && (
          <div className="flex mt-20 text-2xl timer-box">
            <div>{hours}</div>
            <span>:</span>
            <div>{minutes}</div>
            <span>:</span>
            <div>{seconds}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
