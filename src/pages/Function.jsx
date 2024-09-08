import React from 'react';
import { Button } from "@/components/ui/button";
import Footer from '../components/Footer';

const Function = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">AI Решения ООД</h1>
            <div className="space-x-4">
              <Button variant="ghost">Начало</Button>
              <Button variant="ghost">Продукт</Button>
              <Button variant="ghost">Предприятие</Button>
              <Button variant="ghost">Цени</Button>
              <Button variant="ghost">Вход</Button>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Регистрация</Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Функции</h1>
        <p className="text-xl mb-8">Разгледайте мощните функции на нашата AI платформа.</p>
        <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">Научете повече</Button>
      </main>

      <Footer />
    </div>
  );
};

export default Function;