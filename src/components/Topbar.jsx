import React from "react";
import { CiSettings } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="p-2 flex items-center justify-between border-b">
      <input
        type="text"
        placeholder="Search Email"
        className="bg-gray-100 p-2 rounded w-1/2"
      />
      <div className="space-x-4 flex items-center">
        <button>
          <CiSettings />
        </button>
        <button>
          <FaRegBell />
        </button>
        <button>
          <FaUserAlt />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
