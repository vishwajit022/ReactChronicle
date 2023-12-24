import { useState } from "react";
import Accordian from "./components/accordian/index.jsx";
function App() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <h1>
        <Accordian />
      </h1>
    </>
  );
}

export default App;
