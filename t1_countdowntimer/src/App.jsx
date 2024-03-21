import React, { useState } from "react";

function App() {
  const [start, isStart] = useState(false);
  function handleStart() {
    isStart(true);
  }
  return (
    <div>
      <div className=" flex flex-col justify-center items-center h-screen bg-slate-500">
        <h1 className="text-4xl">Countdown Timer</h1>
        {!start && (
          <div className="input-container mt-10 flex gap-2">
            <input className="w-[50px] pl-2" type="number" placeholder="HH" />
            <input className="w-[50px] pl-2" type="number" placeholder="MM" />
            <input className="w-[50px] pl-2" type="number" placeholder="SS" />
          </div>
        )}
        <div className="button mt-5 flex gap-10">
          <button
            onClick={handleStart}
            className="px-4 py-2 bg-green-400 rounded"
          >
            Start
          </button>
          <button className="px-4  py-2 bg-red-400 rounded">Stop</button>
        </div>
        {start && (
          <div className="timer-box text-2xl flex mt-20">
            <div className="">10</div>
            <span>:</span>
            <div className="">10</div>
            <span>:</span>
            <div className="">10</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
