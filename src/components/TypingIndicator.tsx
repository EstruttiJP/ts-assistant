const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4 message-animation">
      <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl">
        <div className="typing-animation flex gap-1">
          <div className="w-2 h-2 rounded-full bg-gray-400" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
          <div className="w-2 h-2 rounded-full bg-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
