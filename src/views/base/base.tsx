import React from "react";

type BaseProps = {
  title: string;
} & React.ComponentProps<"body">;

const Base: React.FC<React.PropsWithChildren<BaseProps>> = ({
  children,
  title,
  ...props
}) => {
  // Força o css a atualizar
  const dummy = Math.random();
  return (
    <html lang="pt-br">
      <head>
        <title>{title}</title>
        <link
          href={"/output.css?dummy=" + dummy}
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body {...props}>
        {children}
        <script src="https://unpkg.com/htmx.org@1.9.12"></script>
        <script src="https://unpkg.com/htmx.org@1.9.12/dist/ext/sse.js"></script>
        <script src="/auto-reload.mjs"></script>
      </body>
    </html>
  );
};

export default Base;
