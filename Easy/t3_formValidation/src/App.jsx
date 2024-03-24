import React, { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) {
      alert("Please enter a value!");
      return;
    }

    alert(`Submitted value: ${inputRef.current.value}`);

    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <h1>Form Validation using useRef</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Enter a value" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
