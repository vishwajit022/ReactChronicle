import React, { useState } from "react";

function App() {
  const [displayText, setDisplayText] = useState("Kuch text hai");

  const handleClick = () => {
    setDisplayText("Ab wo baddal gya!!!");
  };

  return (
    <div>
      <p>{displayText}</p>

      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default App;
