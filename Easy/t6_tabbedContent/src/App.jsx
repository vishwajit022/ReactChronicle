import React from "react";
import TabbedContent from "./TabbedContent";

function App() {
  const tabs = [
    { title: "Tab 1", content: <p>This is the content of Tab 1</p> },
    { title: "Tab 2", content: <p>This is the content of Tab 2</p> },
    { title: "Tab 3", content: <p>This is the content of Tab 3</p> },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Tabbed Content</h1>
      <TabbedContent tabs={tabs} />
    </div>
  );
}

export default App;
