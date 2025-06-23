import React from "react";

const EmailDetail = ({ email, onBack }) => {
  return (
    <div className="p-6">
      <button
        onClick={onBack}
        className="mb-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        🔙Back
      </button>
      <h2 className="text-xl font-bold mb-2">{email.subject}</h2>
      <p className="text-sm text-gray-600 mb-1">From:{email.sender}</p>
      <p className="text-sm text-gray-500 mb-4">From:{email.time}</p>
      <p className=" text-gray-800 mb-4">From:{email.content}</p>
    </div>
  );
};

export default EmailDetail;
