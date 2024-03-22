import React, { useState } from "react";
import { FaArrowAltCircleRight, FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

function FAQitem({ props, i }) {
  const [show, setShow] = useState(false);
  function handle() {
    setShow(!show);
  }

  return (
    <div className="mt-10">
      <div onClick={handle} className="p-4 pl-8 bg-white ">
        <h1 className="flex items-center gap-6 font-medium">
          {" "}
          {show ? (
            <FaArrowAltCircleDown className="text-2xl" />
          ) : (
            <FaArrowAltCircleRight className="text-2xl" />
          )}
          {props.question}
        </h1>
        {show && <h2 className="mt-5 font-medium">{props.answer}</h2>}
      </div>
    </div>
  );
}

export default FAQitem;
