import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 border-r">
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4">
        Compose
      </button>
      <ul className="space-y-2">
        {[
          "Inbox",
          "Starred",
          "Snoozed",
          "Important",
          "Sent",
          "Drafts",
          "Categories",
        ].map((item) => (
          <li key={item} className="hover:bg-gray-200 px-2 py-1 rounded">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-600">Labels</h4>
        <ul className="mt-1 space-y-1">
          {["Infy", "Personal", "More"].map((label) => (
            <li
              key={label}
              className="text-gray-600 font-semibold hover:underline"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
