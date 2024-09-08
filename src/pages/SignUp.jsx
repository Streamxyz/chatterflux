import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Footer from '../components/Footer';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">AI Решения ООД</h1>
            <Button variant="ghost">Начало</Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Регистрация</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Input type="text" placeholder="Пълно име" />
              </div>
              <div>
                <Input type="email" placeholder="Имейл" />
              </div>
              <div>
                <Input type="password" placeholder="Парола" />
              </div>
              <div>
                <Input type="password" placeholder="Потвърди парола" />
              </div>
              <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">Регистрирай се</Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default SignUp;