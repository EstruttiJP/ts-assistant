import { ChatMessage as ChatMessageType } from "@/types/chat";
import { format } from "date-fns";

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div
      className={`flex ${
        message.isBot ? "justify-start" : "justify-end"
      } mb-4 message-animation`}
    >
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl ${
          message.isBot
            ? "bg-secondary text-secondary-foreground"
            : "bg-primary text-primary-foreground"
        }`}
      >
        <p className="text-sm md:text-base">{message.text}</p>
        <p className="text-xs opacity-50 mt-1">
          {format(message.timestamp, "HH:mm")}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
