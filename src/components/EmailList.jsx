import React from "react";
import EmailRow from "./EmailRow";
const data = {
  Primary: [
    {
      sender: "LIC EPS",
      subject: "Confirmation from LIC",
      time: "12:16",
      content: "Dear Ms. Parwati, We have received your request...",
    },
    {
      sender: "TicketAdmin",
      subject: "Cancel Ticket",
      time: "11:45",
      content: "This is a system-generated email. Please do not reply.",
    },
  ],
  Promotions: [
    {
      sender: "ClearTax",
      subject: "SU or ESOP?",
      time: "Today",
      content: "What’s better for your wallet in India? Read more...",
    },
  ],
  Social: [
    {
      sender: "LinkedIn",
      subject: "New Connection",
      time: "21 Jun",
      content: "Someone just connected with you!",
    },
  ],
  Updates: [
    {
      sender: "TimesJobs",
      subject: "Job Response Received",
      time: "21 Jun",
      content: "You have new responses to your job application.",
    },
  ],
};
const EmailList = ({ activeTab, onSelectEmail }) => {
  const emails = data[activeTab] || [];
  return (
    <div className="flex-1 overflow-y-auto">
      {emails.length > 0 ? (
        emails.map((email, index) => (
          <EmailRow
            key={index}
            {...email}
            onClick={() => onSelectEmail(email)}
          />
        ))
      ) : (
        <div className="p-4 text-gray-500"> No Emails in {activeTab}</div>
      )}
    </div>
  );
};

export default EmailList;
