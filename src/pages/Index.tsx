import { useEffect, useRef } from "react";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import TypingIndicator from "@/components/TypingIndicator";
import { useChat } from "@/hooks/useChat";

const Index = () => {
  const { messages, isTyping, addMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="max-w-2xl mx-auto p-4 h-screen flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold mb-2">Assistente Virtual</h1>
        <p className="text-muted-foreground">
          Como posso ajudar você hoje?
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <div className="sticky bottom-0 bg-background pt-4">
        <ChatInput onSend={addMessage} disabled={isTyping} />
      </div>
    </div>
  );
};

export default Index;
