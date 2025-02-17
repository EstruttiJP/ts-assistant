export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: number;
}

export type BotResponse = {
  text: string;
  delay?: number;
};
