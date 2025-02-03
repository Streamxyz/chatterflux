import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="/pricing" className="hover:text-gray-300">Регистрация на фирма</a></li>
              <li><a href="/pricing" className="hover:text-gray-300">Изработка на уебсайт</a></li>
              <li><a href="/pricing" className="hover:text-gray-300">SEO оптимизация</a></li>
              <li><a href="/pricing" className="hover:text-gray-300">Брандинг</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="/features" className="hover:text-gray-300">За нас</a></li>
              <li><a href="/features" className="hover:text-gray-300">Блог</a></li>
              <li><a href="/features" className="hover:text-gray-300">Кариери</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Поддръжка</h3>
            <ul className="space-y-2">
              <li><a href="/security" className="hover:text-gray-300">Помощ</a></li>
              <li><a href="/security" className="hover:text-gray-300">Контакти</a></li>
              <li><a href="/security" className="hover:text-gray-300">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Контакти</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-300">София, бул. България 58</a></li>
              <li><a href="/about" className="hover:text-gray-300">02/888 88 88</a></li>
              <li><a href="/about" className="hover:text-gray-300">office@business.bg</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl mb-4 md:mb-0">
            Нуждаете се от помощ? <a href="/contact" className="text-green-400 hover:underline">Свържете се с нас.</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Youtube size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Share2 size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;