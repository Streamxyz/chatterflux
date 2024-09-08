import React from 'react';
import { Button } from "@/components/ui/button";
import Footer from '../components/Footer';

const Product = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">AI Solutions Co.</h1>
            <div className="space-x-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Function</Button>
              <Button variant="ghost">Enterprise</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Login</Button>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Sign Up</Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Product</h1>
        <p className="text-xl mb-8">Discover how our AI-powered solution can transform your business.</p>
        <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">Get Started</Button>
      </main>

      <Footer />
    </div>
  );
};

export default Product;