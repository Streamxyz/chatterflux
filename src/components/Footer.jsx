import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, TikTok } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="/pricing" className="hover:text-gray-300">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="/features" className="hover:text-gray-300">Messaging and live chat</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/security" className="hover:text-gray-300">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-300">About us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl mb-4 md:mb-0">
            How can we help? <a href="/contact" className="text-green-400 hover:underline">Contact us.</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Youtube size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
            <a href="#" className="hover:text-gray-300"><TikTok size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;