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
            <h1 className="text-2xl font-bold text-blue-600">AI Решения ООД</h1>
            <div className="space-x-4">
              <Button variant="ghost">Продукт</Button>
              <Button variant="ghost">Функция</Button>
              <Button variant="ghost">Агенти</Button>
              <Button variant="ghost">Ресурси</Button>
              <Button variant="ghost">Предприятие</Button>
              <Button variant="ghost">Цени</Button>
              <Button variant="ghost">Вход</Button>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Регистрация</Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4">Изградете и наемете <span className="text-indigo-600">AI агенти</span></h2>
          <p className="text-xl text-gray-600 mb-8">Изградете и наемете екипи от AI агенти за автоматично изпълнение на задачи.</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">Пробвайте безплатно</Button>
            <Button size="lg" variant="outline">Заявете демо</Button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>AI Агенти</CardTitle>
              <CardDescription>Интелигентна автоматизация за вашите работни процеси</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Нашите AI агенти могат да се справят със сложни задачи, освобождавайки вашия екип да се фокусира върху стратегически инициативи.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Чатботове</CardTitle>
              <CardDescription>24/7 поддръжка и ангажираност на клиентите</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Осигурете мигновени отговори и помощ на вашите клиенти с нашите напреднали чатботове.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Асистенти</CardTitle>
              <CardDescription>Персонализирана помощ за всеки потребител</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Подобрете продуктивността и вземането на решения с AI-powered лични асистенти.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, index) => (
                <img key={index} src="/placeholder.svg" alt={`Клиент ${index + 1}`} className="w-24 h-24 rounded-full object-cover" />
              ))}
            </div>
          </div>
          <div className="text-center relative z-10 bg-white bg-opacity-80 py-16">
            <h2 className="text-4xl font-bold mb-4">ПРИСЪЕДИНЕТЕ СЕ КЪМ НАЙ-ДОБРИТЕ</h2>
            <h3 className="text-6xl font-bold mb-8">Захранваме над 100,000+<br />от най-добрите клиентски<br />изживявания</h3>
            <div className="space-x-4">
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">Безплатен пробен период</Button>
              <Button size="lg" variant="outline">Вземете демо</Button>
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