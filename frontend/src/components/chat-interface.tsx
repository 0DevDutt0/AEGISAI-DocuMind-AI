'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, FileText, MessageSquare, Activity } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  documents?: string[];
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your AI assistant. How can I help you with your knowledge management today?',
      timestamp: new Date(),
    },
    {
      id: '2',
      role: 'user',
      content: 'Can you help me understand the relationship between AI and machine learning?',
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: '3',
      role: 'assistant',
      content: 'Certainly! Artificial Intelligence (AI) is a broad field that encompasses various approaches to creating intelligent machines. Machine Learning (ML) is a subset of AI that focuses on algorithms that can learn and improve from experience without being explicitly programmed for every task.',
      timestamp: new Date(Date.now() - 240000),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response after delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I understand your question about the relationship between AI and machine learning. This is a complex topic that involves several key concepts. Machine learning is indeed a subset of artificial intelligence, but there are important distinctions. While AI aims to create systems that can perform tasks requiring human-like intelligence, machine learning focuses specifically on algorithms that can learn patterns from data and make predictions or decisions.',
        timestamp: new Date(),
        documents: ['Annual Report 2023.pdf', 'Project Proposal.docx']
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Chat Interface</h2>
        <p className="text-gray-500">Ask questions about your knowledge base</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Knowledge Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 overflow-y-auto space-y-4 p-4 bg-gray-50 rounded-lg">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-3xl p-4 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white rounded-br-none'
                          : 'bg-white border border-gray-200 rounded-bl-none'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`mr-3 mt-1 ${message.role === 'user' ? 'text-white' : 'text-gray-500'}`}>
                          {message.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="whitespace-pre-wrap">{message.content}</p>
                          {message.documents && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {message.documents.map((doc, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  <FileText className="w-3 h-3 mr-1" />
                                  {doc}
                                </Badge>
                              ))}
                            </div>
                          )}
                          <div className={`text-xs mt-2 ${message.role === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                            {formatTime(message.timestamp)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-3xl p-4 rounded-lg bg-white border border-gray-200 rounded-bl-none">
                      <div className="flex items-center">
                        <div className="mr-3 mt-1 text-gray-500">
                          <Bot className="w-5 h-5" />
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSubmit} className="mt-4 flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question about your knowledge base..."
                  className="flex-1"
                />
                <Button type="submit" disabled={isLoading || !inputValue.trim()}>
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="w-4 h-4 mr-2" />
                Start New Chat
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bot className="w-4 h-4 mr-2" />
                Load Knowledge Graph
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Recent Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <FileText className="w-5 h-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium">Annual Report 2023.pdf</p>
                    <p className="text-xs text-gray-500">Uploaded 2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <FileText className="w-5 h-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium">Project Proposal.docx</p>
                    <p className="text-xs text-gray-500">Uploaded 3 days ago</p>
                  </div>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <FileText className="w-5 h-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm font-medium">Research Notes.txt</p>
                    <p className="text-xs text-gray-500">Uploaded 1 week ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}