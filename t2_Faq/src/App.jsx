import React from "react";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="flex justify-center h-screen bg-slate-500">
      <div className="mt-10">
        <h1 className="mb-20 text-4xl font-bold">Frequently Asked Questions</h1>
        <FAQ />
      </div>
    </div>
  );
}

export default App;
