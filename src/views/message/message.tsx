import React from "react";

export type TMessage = {
  user: string;
  message: string;
  isFromUser: boolean;
};

const Message: React.FC<TMessage> = ({ user, message, isFromUser }) => {
  return (
    <li
      className={[
        "p-2 m-1 rounded text-gray-200 border border-indigo-50",
        isFromUser ? "bg-green-700" : "bg-indigo-700",
      ].join(" ")}
    >
      {user}: {message}
    </li>
  );
};

export default Message;
