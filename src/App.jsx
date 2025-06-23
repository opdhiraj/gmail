import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Tabs from "./components/Tabs";
import EmailList from "./components/EmailList";
import EmailDetail from "./components/EmailDetail";

function App() {
  const [activeTab, setActiveTab] = useState("Primary");
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <div className=" flex h-screen text-sm font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <Tabs
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setSelectedEmail(null); // reset on tab change
          }}
        />
        {selectedEmail ? (
          <EmailDetail
            email={selectedEmail}
            onBack={() => setSelectedEmail(null)}
          />
        ) : (
          <EmailList activeTab={activeTab} onSelectEmail={setSelectedEmail} />
        )}
      </div>
    </div>
  );
}

export default App;
