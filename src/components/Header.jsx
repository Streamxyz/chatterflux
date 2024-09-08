import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex-1">
            <Button variant="ghost">Products</Button>
            <Button variant="ghost">Solutions</Button>
            <Button variant="ghost">Resources</Button>
          </div>
          <h1 className="text-2xl font-bold text-blue-900 flex-1 text-center">Zendesk</h1>
          <div className="flex-1 text-right">
            <Button variant="ghost">Contact Sales</Button>
            <Button variant="ghost">Login</Button>
            <Button className="bg-purple-600 text-white hover:bg-purple-700 ml-2">Free Trial</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;