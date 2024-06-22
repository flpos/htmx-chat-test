import React from "react";
import Message, { TMessage } from "./message";

const Messages: React.FC<{ messages: TMessage[]; user: string }> = ({
  messages,
  user,
}) => {
  return (
    <ul
      id="messages"
      hx-ext="sse"
      sse-connect="/api/sse-messages"
      sse-swap="message"
      hx-swap="beforeend"
      className="flex-1 bg-white m-4 p-4 rounded"
    >
      {messages.map((m, i) => (
        <Message
          key={`${m.user}-${i}`}
          user={m.user}
          message={m.message}
          isFromUser={user === m.user}
        />
      ))}
    </ul>
  );
};

export default Messages;
