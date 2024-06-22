import { Router } from "express";
import { MessagesController } from "./messages.controller";

const routes = Router();

const messagesController = new MessagesController();

routes.get("/api/sse-messages", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  messagesController.addListener((message) => {
    res.render(
      "message/message",
      { ...message, isFromUser: req.cookies.authorization === message.user },
      (_err, html) => {
        res.write(`data: ${html}\n\n`);
      },
    );
  });

  res.flushHeaders();
});

routes.get("/message", (req, res) => {
  const messages = messagesController.getMessages();
  const user = req.cookies.authorization;

  return res.render("message/messages", { messages, user });
});

routes.get("/api/message-form", (req, res) => {
  return res.render("message/message-form", {
    user: req.cookies.authorization,
  });
});

routes.post("/message", (req, res) => {
  messagesController.postMessage(req.body);
  return res.render("message/message-form", {
    user: req.cookies.authorization,
  });
});

export default routes;
