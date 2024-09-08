import React from 'react';
import { Button } from "@/components/ui/button";
import Footer from '../components/Footer';

const Function = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">AI Solutions Co.</h1>
            <div className="space-x-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Product</Button>
              <Button variant="ghost">Enterprise</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Login</Button>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Sign Up</Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Functions</h1>
        <p className="text-xl mb-8">Explore the powerful functions of our AI platform.</p>
        <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">Learn More</Button>
      </main>

      <Footer />
    </div>
  );
};

export default Function;