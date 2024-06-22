import React from "react";
import BasePage from "../base/base";

type DefaultLayoutProps = {
  title?: string;
  name?: string;
};

const Layout: React.FC<DefaultLayoutProps> = ({
  title = "Documento",
  name,
}) => {
  return (
    <BasePage className="flex flex-col min-h-screen bg-gray-400" title={title}>
      <h1 className="m-4 mb-0">Olá {name}!!</h1>
      <div hx-trigger="load" hx-get={`/message`} hx-swap="outerHTML" />
      <div hx-trigger="load" hx-get={`/api/message-form`} hx-swap="outerHTML" />
    </BasePage>
  );
};

export default Layout;
