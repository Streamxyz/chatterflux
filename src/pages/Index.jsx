import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import PopupChatbot from '../components/PopupChatbot';
import Footer from '../components/Footer';

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

        <section className="mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, index) => (
                <img key={index} src="/placeholder.svg" alt={`Customer ${index + 1}`} className="w-24 h-24 rounded-full object-cover" />
              ))}
            </div>
          </div>
          <div className="text-center relative z-10 bg-white bg-opacity-80 py-16">
            <h2 className="text-4xl font-bold mb-4">JOIN THE BEST</h2>
            <h3 className="text-6xl font-bold mb-8">Powering 100,000+ of<br />the best customer<br />experiences</h3>
            <div className="space-x-4">
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">Free trial</Button>
              <Button size="lg" variant="outline">Get a demo</Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center">
            {['LIBERTY', 'Shopify', 'SQUARESPACE', 'Uber', 'Stanley Black & Decker', 'TESCO', 'LUS'].map((company, index) => (
              <div key={index} className="text-gray-500 font-bold text-xl">{company}</div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <PopupChatbot />
    </div>
  );
};

export default Index;