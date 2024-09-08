import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import PopupChatbot from '../components/PopupChatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-blue-600">AI Solutions Co.</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Revolutionize Your Business with AI</h2>
          <p className="text-xl text-gray-600 mb-8">Harness the power of artificial intelligence with our cutting-edge solutions.</p>
          <Button size="lg">Get Started</Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>AI Agents</CardTitle>
              <CardDescription>Intelligent automation for your workflows</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Our AI agents can handle complex tasks, freeing up your team to focus on strategic initiatives.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Chatbots</CardTitle>
              <CardDescription>24/7 customer support and engagement</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Provide instant responses and assistance to your customers with our advanced chatbots.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Assistants</CardTitle>
              <CardDescription>Personalized help for every user</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Enhance productivity and decision-making with AI-powered personal assistants.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our AI Solutions in Action</h2>
          <p className="text-center text-xl mb-4">Click the chat icon in the bottom right corner to try our AI chatbot!</p>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 AI Solutions Co. All rights reserved.</p>
        </div>
      </footer>

      <PopupChatbot />
    </div>
  );
};

export default Index;