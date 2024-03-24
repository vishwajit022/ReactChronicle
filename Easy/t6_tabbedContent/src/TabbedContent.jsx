import React, { useState } from "react";

const Tab = ({ title, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 mr-2 font-semibold ${
        isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const TabbedContent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="border-b border-gray-200">
      <div className="flex">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabbedContent;
