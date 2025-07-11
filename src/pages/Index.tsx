import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Dumbbell" size={32} className="text-red-600" />
              <span className="text-2xl font-bold text-gray-900">
                BOXING TRAINER
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                О тренере
              </a>
              <a
                href="#programs"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Программы
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Галерея
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-red-600">МОЩНЫЙ</span>
                <br />
                <span className="text-white">ТРЕНИНГ</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Персональные тренировки по боксу для всех уровней подготовки.
                Профессиональный подход к развитию силы, выносливости и техники.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
                >
                  Начать тренировки
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-red-600 rounded-full opacity-20 absolute -top-4 -left-4"></div>
                <div className="w-72 h-72 bg-gray-800 rounded-full flex items-center justify-center relative">
                  <Icon name="Dumbbell" size={120} className="text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О ТРЕНЕРЕ</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon
                  name="Trophy"
                  size={48}
                  className="text-red-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  10+ лет опыта
                </h3>
                <p className="text-gray-600">
                  Профессиональный тренер с многолетним стажем
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon
                  name="Users"
                  size={48}
                  className="text-red-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  200+ учеников
                </h3>
                <p className="text-gray-600">
                  Подготовлено более 200 спортсменов
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon
                  name="Medal"
                  size={48}
                  className="text-red-600 mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Чемпион
                </h3>
                <p className="text-gray-600">
                  Мастер спорта по боксу, чемпион региона
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ПРОГРАММЫ ТРЕНИРОВОК
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Базовый курс
                </CardTitle>
                <CardDescription>Для начинающих</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Основы техники бокса</li>
                  <li>• Развитие координации</li>
                  <li>• Общая физическая подготовка</li>
                  <li>• Работа с грушей</li>
                </ul>
                <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                  Записаться
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Продвинутый курс
                </CardTitle>
                <CardDescription>Для опытных спортсменов</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Совершенствование техники</li>
                  <li>• Спарринг-тренировки</li>
                  <li>• Тактическая подготовка</li>
                  <li>• Подготовка к соревнованиям</li>
                </ul>
                <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                  Записаться
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Фитнес-бокс
                </CardTitle>
                <CardDescription>Для поддержания формы</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Кардио-тренировки</li>
                  <li>• Работа с лапами</li>
                  <li>• Функциональная подготовка</li>
                  <li>• Гибкость и растяжка</li>
                </ul>
                <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ГАЛЕРЕЯ</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img
                src="/img/2ab50054-78f5-40de-84c9-f21119ad8444.jpg"
                alt="Boxing Training Session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img
                src="/img/d662bf98-5414-4389-811f-f47319ad0cb6.jpg"
                alt="Boxing Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img
                src="/img/53f20f35-a93f-4ec5-995e-91ea4f36a05c.jpg"
                alt="Professional Trainer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img
                src="/img/2ab50054-78f5-40de-84c9-f21119ad8444.jpg"
                alt="Training Process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img
                src="/img/d662bf98-5414-4389-811f-f47319ad0cb6.jpg"
                alt="Gym Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img
                src="/img/53f20f35-a93f-4ec5-995e-91ea4f36a05c.jpg"
                alt="Boxing Coach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ЗАПИСАТЬСЯ НА ТРЕНИРОВКУ
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-gray-700 font-semibold"
                    >
                      Имя
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-gray-700 font-semibold"
                    >
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-gray-700 font-semibold"
                  >
                    Сообщение
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о ваших целях и уровне подготовки"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-1"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Dumbbell" size={24} className="text-red-600" />
                <span className="text-xl font-bold">BOXING TRAINER</span>
              </div>
              <p className="text-gray-400">
                Профессиональные тренировки по боксу для достижения ваших целей
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@boxingtrainer.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва, ул. Спортивная, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
              <div className="space-y-2 text-gray-400">
                <div>Пн-Пт: 7:00 - 22:00</div>
                <div>Сб-Вс: 9:00 - 20:00</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Boxing Trainer. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
