import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Components/Modal";

function App() {
  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }

  return (
    <div
      className={`flex items-center justify-center h-screen ${
        show ? "bg-gradient-to-r from-slate-600 to-gray-800" : "bg-gray-600"
      }`}
    >
      <div className="">
        {!show && (
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 font-semibold bg-green-600 rounded-lg"
          >
            Show Offer
          </motion.button>
        )}
        {show && <Modal fun={toggle} />}
      </div>
    </div>
  );
}

export default App;
