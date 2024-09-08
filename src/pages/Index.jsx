import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-blue-900">Champion the customer experience</h1>
          <p className="text-xl text-gray-600 mb-8">The best customer experiences are built with Zendesk</p>
          <div className="max-w-2xl mx-auto relative">
            <Input 
              type="text" 
              placeholder="Search" 
              className="pl-10 pr-4 py-2 w-full rounded-full border-2 border-blue-500 focus:outline-none focus:border-purple-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {['Support', 'Sales', 'Customer Service'].map((category, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-purple-600">{category[0]}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">{category}</h3>
                <p className="text-gray-600">Provide world-class {category.toLowerCase()} experiences.</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="bg-blue-900 text-white py-16 px-4 rounded-lg mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">"Zendesk has helped us streamline our customer service process and improve our response times."</h2>
            <p className="text-xl mb-4">- Jane Doe, CEO of TechCorp</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;