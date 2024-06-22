import fs from "fs";
import path from "path";
import express from "express";

const app = express();

const sseListeners = [];
const addListener = (listener) => {
  return sseListeners.push(listener) - 1;
};
const removeListener = (listenerIndex) => {
  sseListeners.splice(listenerIndex, 1);
};
const notifyAll = (data) => {
  sseListeners.forEach((listener) => listener(data));
};

app.get("/", (_req, res) => {
  // implementa server sent events
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Add CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );

  const listener = addListener((data) => {
    res.write(`data: ${data}\n\n`);
  });

  res.flushHeaders();

  res.on("close", () => {
    removeListener(listener);
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

fs.watch(
  path.resolve("./src"),
  { recursive: true, persistent: false },
  (_eventType, filename) => {
    notifyAll(`File ${filename} changed`);
  },
);
