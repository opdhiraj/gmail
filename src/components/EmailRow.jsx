import React from "react";

const EmailRow = ({ sender, subject, time, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center px-4 py-2 hover:bg-gray-100 border-b"
    >
      <input type="checkbox" className="mr-2" />
      <span className="mr-2">⭐</span>
      <div className="flex flex-1 items-center justify-between">
        <span className="font-medium">{sender}</span>
        <span className="text-gray-600 flex-1 px-4 truncate">{subject}</span>
        <span className="text-gray-400 text-sm">{time}</span>
      </div>
    </div>
  );
};

export default EmailRow;
