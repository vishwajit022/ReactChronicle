import React, { useState } from "react";
import { motion } from "framer-motion";

function Modal({ fun }) {
  const [show, setShow] = useState(false);
  const [c, setC] = useState(false);

  return (
    <div className="bg-white h-[50vh] w-[40vw]">
      {!show && (
        <div className="">
          <motion.button
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.65 }}
            onClick={fun}
            className="px-4 text-2xl "
          >
            X
          </motion.button>
          <div className="flex flex-col items-center justify-center ">
            <h1>Job Offer</h1>
            <p className="mt-10">
              Click the button below to accept our Job Offer...
            </p>
            <motion.button
              className="p-3 mt-10 bg-green-400 rounded"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShow(!show);
                setC(false);
              }}
            >
              I Accept
            </motion.button>
            <motion.button
              className="p-3 mt-10 bg-red-400 rounded"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setC(!c)}
            >
              Reject
            </motion.button>
          </div>
        </div>
      )}
      {show && (
        <div className="flex flex-col items-center justify-center text-2xl">
          <h1 className="mt-16 mb-20"> Thank you for joining with us</h1>
          <h2>Looking forward for your NHO </h2>
        </div>
      )}
      {c && (
        <div className="">
          <img
            className="h-30"
            src="https://indianmemetemplates.com/wp-content/uploads/tere-paas-koi-or-raasta-hai.jpg"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default Modal;
