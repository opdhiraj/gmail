import React from "react";
import EmailRow from "./EmailRow";
const data = {
  Primary: [
    { sender: "EPS", subject: "Confirmation from EPS", time: "12:16" },
    { sender: "TicketAdmin", subject: "Cancel Ticket", time: "11:45" },
  ],
  Promotions: [
    { sender: "Team ClearTax", subject: "SU or ESOP?", time: "Today" },
    {
      sender: "ClearTax",
      subject: "Max Refund, Zero Hassle",
      time: "21 Jun",
    },
  ],
  Social: [{ sender: "LinkedIn", subject: "New Connection", time: "21 Jun" }],
  Updates: [
    { sender: "TimesJobs", subject: "Job Response Received", time: "21 Jun" },
  ],
};
const EmailList = ({ activeTab }) => {
  const emails = data[activeTab] || [];
  return (
    <div className="flex-1 overflow-y-auto">
      {emails.length > 0 ? (
        emails.map((email, index) => <EmailRow key={index} {...email} />)
      ) : (
        <div className="p-4 text-gray-500"> No Emails in {activeTab}</div>
      )}
    </div>
  );
};

export default EmailList;
