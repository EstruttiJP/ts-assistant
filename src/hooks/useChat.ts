import { useState, useEffect } from "react";
import { ChatMessage } from "@/types/chat";
import { getBotResponse } from "@/utils/botLogic";

const STORAGE_KEY = "chat_history";

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const addMessage = async (text: string, isBot: boolean = false) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);

    if (!isBot) {
      setIsTyping(true);
      const response = getBotResponse(text);
      
      await new Promise((resolve) => setTimeout(resolve, response.delay));
      
      setIsTyping(false);
      addMessage(response.text, true);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    messages,
    isTyping,
    addMessage,
    clearChat,
  };
};
