import React, { useState } from "react";
import "./App.css";

const data = [
  {
    name: "begam",
    src: "https://images.unsplash.com/photo-1536766768598-e09213fdcf22",
  },
  {
    name: "jenny",
    src: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef",
  },
  {
    name: "bella",
    src: "https://images.unsplash.com/photo-1613317898586-a5f478937f2d",
  },
  {
    name: "stella",
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
  },
  {
    name: "sabrina",
    src: "https://images.unsplash.com/photo-1638431919260-af6cbc16dcfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "becca",
    src: "https://images.unsplash.com/photo-1645342682688-247f1172166a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "joanna",
    src: "https://images.unsplash.com/photo-1549971362-9ce69d0fb764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "jessie",
    src: "https://images.unsplash.com/photo-1697921814050-c48df12df6b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
  {
    name: "barbie",
    src: "https://plus.unsplash.com/premium_photo-1661548271175-6163149fc57c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHNleHklMjBnaXJscyUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Dynamic Search Cards</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
        className="search-input"
      />
      <div className="people">
        {filteredData.map((item, index) => (
          <div className="person" key={index}>
            <div className="img">
              <img src={item.src} alt="" />
            </div>
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
