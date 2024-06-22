type Message = {
  user: string;
  message: string;
};

type Listener = (message: Message) => void;

export class MessagesController {
  private listeners: Array<Listener> = [];

  constructor(private readonly messages: Array<Message> = []) {}

  postMessage(body: Message) {
    for (const listener of this.listeners) {
      listener(body);
    }
    this.messages.push(body);
  }

  getMessages() {
    return this.messages;
  }

  addListener(fn: Listener) {
    this.listeners.push(fn);
  }
}
