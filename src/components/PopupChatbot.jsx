import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MessageSquare, X } from 'lucide-react';

const PopupChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 6abqmShXzKQjGaJkFY3zPpWjkpU6uT7V'
        },
        body: JSON.stringify({
          model: 'mistral-tiny',
          messages: [...messages, userMessage]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = { role: 'assistant', content: data.choices[0].message.content };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error calling Mistral API:', error);
      const errorMessage = { role: 'assistant', content: `Sorry, I encountered an error: ${error.message}. Please try again.` };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-4"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Chat with AI</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-64 overflow-y-auto mb-4 p-2 bg-gray-100 rounded">
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                    {message.content}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && sendMessage()}
                className="flex-grow mr-2"
                disabled={isLoading}
              />
              <Button onClick={sendMessage} disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default PopupChatbot;