import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Tabs from "./components/Tabs";
import EmailList from "./components/EmailList";

function App() {
  const [activeTab, setActiveTab] = useState("Primary");
  return (
    <div className=" flex h-screen text-sm font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <EmailList activeTab={activeTab} />
      </div>
    </div>
  );
}

export default App;
