import React, { useState } from "react";
import "./App.css"; // Import CSS file for styling

function App() {
  const [firstImage, setFirstImage] = useState(
    "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
  ); 
  const [secondImage, setSecondImage] = useState(
    "https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmx8ZW58MHx8MHx8fDA%3D"
  );

  const handleSwap = () => {
    const temp = firstImage;
    setFirstImage(secondImage);
    setSecondImage(temp);
  };

  return (
    <div className="App">
      <h1>Image Swapper</h1>
      <div className="image-container ">
        <img src={firstImage} className="h-30" alt="First" />

        <img src={secondImage} alt="Second" />
      </div>

      <button onClick={handleSwap}>Swap Images</button>
    </div>
  );
}

export default App;
