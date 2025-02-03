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
            <h1 className="text-2xl font-bold text-blue-600">Бизнес Решения ООД</h1>
            <div className="space-x-4">
              <Button variant="ghost">Услуги</Button>
              <Button variant="ghost">Регистрация</Button>
              <Button variant="ghost">Уебсайт</Button>
              <Button variant="ghost">SEO</Button>
              <Button variant="ghost">Брандинг</Button>
              <Button variant="ghost">Цени</Button>
              <Button variant="ghost">Вход</Button>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Регистрация</Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4">Стартирайте своя бизнес с <span className="text-indigo-600">професионална помощ</span></h2>
          <p className="text-xl text-gray-600 mb-8">Цялостни решения за регистрация на фирма, изработка на уебсайт, SEO оптимизация и брандинг.</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">Безплатна консултация</Button>
            <Button size="lg" variant="outline">Вижте услугите</Button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Регистрация на Фирма</CardTitle>
              <CardDescription>Бързо и лесно стартиране на вашия бизнес</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Професионална помощ при регистрация на фирма, счетоводни услуги и правни консултации.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Уебсайт и SEO</CardTitle>
              <CardDescription>Изработка на модерни уебсайтове с оптимизация</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Създаване на професионален уебсайт и оптимизация за търсачки за максимална видимост онлайн.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Брандинг и Маркетинг</CardTitle>
              <CardDescription>Изграждане на силна марка</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Разработка на лого, брандинг стратегия и управление на социални мрежи.</p>
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
            <h2 className="text-4xl font-bold mb-4">ДОВЕРЕТЕ СЕ НА ПРОФЕСИОНАЛИСТИТЕ</h2>
            <h3 className="text-6xl font-bold mb-8">Над 1,000+ успешно<br />регистрирани компании<br />и реализирани проекти</h3>
            <div className="space-x-4">
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">Безплатна консултация</Button>
              <Button size="lg" variant="outline">Свържете се с нас</Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center">
            {['FIBANK', 'VIVACOM', 'SPEEDY', 'ECONT', 'TELENOR', 'METRO', 'KAUFLAND'].map((company, index) => (
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