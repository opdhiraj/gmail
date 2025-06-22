import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const Tabs = ["Primary", "Promotions", "Social", "Updates"];
  return (
    <div className="flex space-x-4 border-bbg-white px-4 py-2 text-sm font-medium">
      {Tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-2 py-1 ${
            activeTab === tab ? "border-b-2 border-blue-600" : "text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
