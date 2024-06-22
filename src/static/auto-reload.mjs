// listen to server sent events
const url = new URL("http://localhost:3001");
let eventSource = new EventSource(url);
const onMessage = () => {
  setTimeout(() => window.location.reload(), 300);
};
const onError = (error) => {
  setTimeout(() => {
    eventSource.close();
    eventSource = new EventSource(url);
    eventSource.onmessage = onMessage;
    eventSource.onerror = onError;
  });
  console.error(error);
};
eventSource.onmessage = onMessage;
eventSource.onerror = onError;
