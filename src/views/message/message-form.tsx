import React from "react";
import * as Form from "@radix-ui/react-form";

type MessageFormProps = {
  user: string;
};

const MessageForm: React.FC<MessageFormProps> = ({ user }) => {
  return (
    <Form.Root
      className="px-2 bg-gray-200 rouded"
      hx-post="/message"
      hx-swap="outerHTML"
    >
      <input name="user" value={user} hidden readOnly />
      <Form.Field name="message" className="flex p-4 items-center">
        <Form.Label className="text-gray-600">Mensagem</Form.Label>
        <Form.Control
          className="ml-4 p-4 border rounded border-blue-400 flex-1"
          autoFocus
          name="message"
        />
        <Form.Submit className="ml-4 outline-indigo-500 h-full hover:border hover:border-black">
          Enviar
        </Form.Submit>
      </Form.Field>
    </Form.Root>
  );
};

export default MessageForm;
