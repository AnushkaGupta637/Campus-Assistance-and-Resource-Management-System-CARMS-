import React, { useState, useEffect, useRef } from 'react';
import { Send, Mic } from 'lucide-react';
import { ChatbotService, ChatMessage } from '../../utils/chatbot';

interface ChatWindowProps {
  onClose: () => void;
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatbotService = ChatbotService.getInstance();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    'Show my timetable',
    'Who is teaching AI?',
    'Is the gym open now?',
    'What\'s the lunch menu today?'
  ];

  useEffect(() => {
    // Add welcome message
    setMessages([
      {
        text: 'Hello! How can I help you today?',
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Get bot response
    const response = await chatbotService.processMessage(message);
    
    const botMessage: ChatMessage = {
      text: response,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const handleQuickReply = (reply: string) => {
    setMessage(reply);
    handleSend();
  };

  return (
    <div className="fixed bottom-20 right-4 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Campus Assistant</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`rounded-lg p-3 max-w-[80%] ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>
              <span className="text-xs opacity-75 mt-1 block">
                {msg.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />

        {/* Quick replies */}
        <div className="flex flex-wrap gap-2">
          {quickReplies.map((reply) => (
            <button
              key={reply}
              onClick={() => handleQuickReply(reply)}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Mic className="h-5 w-5" />
          </button>
          <button
            onClick={handleSend}
            className="p-2 text-blue-600 hover:text-blue-700"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}