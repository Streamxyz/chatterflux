import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import PopupChatbot from '../components/PopupChatbot';
import ImageSlideshow from '../components/ImageSlideshow';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">AI Solutions Co.</h1>
            <div className="space-x-4">
              <Button variant="ghost">Product</Button>
              <Button variant="ghost">Function</Button>
              <Button variant="ghost">Agents</Button>
              <Button variant="ghost">Resources</Button>
              <Button variant="ghost">Enterprise</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Login</Button>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Sign Up</Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4">Build and Recruit <span className="text-indigo-600">AI Agents</span></h2>
          <p className="text-xl text-gray-600 mb-8">Build and recruit teams of AI agents to complete tasks on autopilot.</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">Try for free</Button>
            <Button size="lg" variant="outline">Request demo</Button>
          </div>
        </section>

        <ImageSlideshow />

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