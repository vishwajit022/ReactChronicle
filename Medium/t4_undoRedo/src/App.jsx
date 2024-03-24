import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [first, setfirst] = useState(0);
  const [history, setHistory] = useState([]);
  const [redo, setRedo] = useState([]);

  const maintainhistory = (a, b, c) => {
    const obj = {
      a,
      b,
      c,
    };
    const data = [...history];
    data.unshift(obj);
    setHistory(data);
  };
  function handle(i) {
    const a = first + i;
    maintainhistory(first, i, a);
    setfirst(a);
  }
  function handleUndo() {
    console.log(history);
    if (history.length > 0) {
      const data = [...history];
      const firstItem = data.shift();

      setHistory(data);
      setfirst(firstItem.a);

      //firstItem jo baccha hua hai usse hum Redo mein daalenge
      const data2 = [...redo];
      data2.push(firstItem);
      setRedo(data2);
    } else {
      toast.warn("There is no data for me to undo");
    }
  }
  function handleRedo() {
    if (redo.length) {
      const data = [...redo];
      const res = data.pop();
      setRedo(data);
      const { a, b, c } = res;
      setfirst(b);
      maintainhistory(a, b, c);
    } else {
      toast.error("Everything is already retrieved");
    }
  }

  //Dot
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX - 15, y: event.clientY - 10 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="h-screen flex flex-col overflow-hidden justify-center items-center gap-10  w-full mx-auto text-white bg-slate-900"
    >
      <motion.div
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: "purple",
          zIndex: 10,
        }}
        animate={{ rotate: 180 }}
        transition={{ type: "spring" }}
      />
      <motion.div
        animate={{ scale: [0, 1, 0.5, 1] }}
        transition={{ times: [0, 0.1, 0.9, 1] }}
        className="text-3xl hover:text-4xl transition-all ease-in font-medium"
        style={{
          zIndex: 20,
        }}
      >
        Undoable And Doable
      </motion.div>
      <ToastContainer
        style={{
          zIndex: 20,
        }}
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <div className=" flex gap-10">
        <motion.button
          whileHover={{ scale: 1.13 }}
          whileTap={{ scale: 0.94 }}
          onClick={handleUndo}
          style={{
            zIndex: 20,
          }}
          className="px-3 py-2 bg-red-800 rounded"
        >
          Undo
        </motion.button>
        <motion.button
          onClick={handleRedo}
          whileHover={{ scale: 1.13 }}
          style={{
            zIndex: 20,
          }}
          whileTap={{ scale: 0.94 }}
          className="px-3 py-2 bg-red-800 rounded"
        >
          Redo
        </motion.button>
      </div>
      <div className="flex items-center gap-[15vw]">
        <div className=" flex items-center gap-5">
          {[-100, -10, -1].map((b, i) => (
            <motion.button
              whileHover={{ scale: 1.13 }}
              whileTap={{ scale: 0.94 }}
              key={i}
              style={{
                zIndex: 20,
              }}
              onClick={() => handle(b)}
              className="px-3 py-2 bg-red-800 rounded"
            >
              {b}
            </motion.button>
          ))}
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-4xl"
          style={{
            zIndex: 20,
          }}
        >
          {first}
        </motion.div>
        <div className="flex items-center gap-5">
          {[+1, +10, +100].map((b, i) => (
            <motion.button
              style={{
                zIndex: 20,
              }}
              whileHover={{ scale: 1.13 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => handle(b)}
              key={i}
              className="px-3 py-2 bg-red-800 rounded"
            >
              +{b}
            </motion.button>
          ))}
        </div>
      </div>
      <div className=" border border-white h-[40vh] p-2 w-[50vw] overflow-y-auto">
        <div className="text-center text-xl  mb-9">
          History will appear here
        </div>
        {history.map((e, i) => (
          <div key={i} className="text-center">
            {e.a} + ({e.b}) = {e.c}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
