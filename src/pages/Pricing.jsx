import React from 'react';
import { Button } from "@/components/ui/button";
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">AI Solutions Co.</h1>
            <div className="space-x-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Product</Button>
              <Button variant="ghost">Function</Button>
              <Button variant="ghost">Enterprise</Button>
              <Button variant="ghost">Login</Button>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Sign Up</Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Pricing Plans</h1>
        <p className="text-xl mb-8">Choose the perfect plan for your business needs.</p>
        <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">View Plans</Button>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;