import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialty: '',
    score: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      specialty: '',
      score: '',
      message: ''
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">ИннТех</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('programs')} className="text-sm font-medium hover:text-primary transition-colors">
                Специальности
              </button>
              <button onClick={() => scrollToSection('advantages')} className="text-sm font-medium hover:text-primary transition-colors">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('admission')} className="text-sm font-medium hover:text-primary transition-colors">
                Поступление
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary">Приемная кампания 2025</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Институт<br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Инновационных<br />Технологий
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Готовим специалистов будущего в области IT, искусственного интеллекта и цифровых технологий. 
                Современные лаборатории, практика в ведущих компаниях и трудоустройство с первого курса.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('admission')} className="group">
                  Подать заявку
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('programs')}>
                  Специальности
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Программ обучения</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Трудоустройство</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Выпускников</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/5a343632-31dc-403e-9cfb-d1c8e0f8cfda/files/6cce1caf-ae0c-4884-ac1a-8c810843b5eb.jpg" 
                alt="Современный кампус ИннТех" 
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Специальности</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выбирайте направление и начните путь к карьере в технологиях
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Программная инженерия',
                icon: 'Code2',
                score: '240',
                duration: '4 года',
                description: 'Разработка ПО, алгоритмы, архитектура систем, веб и мобильные приложения',
                skills: ['Python', 'JavaScript', 'Java', 'DevOps']
              },
              {
                title: 'Искусственный интеллект',
                icon: 'Brain',
                score: '265',
                duration: '4 года',
                description: 'Машинное обучение, нейронные сети, компьютерное зрение, NLP',
                skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch']
              },
              {
                title: 'Кибербезопасность',
                icon: 'Shield',
                score: '250',
                duration: '4 года',
                description: 'Защита информации, этичный хакинг, криптография, безопасность сетей',
                skills: ['Pentesting', 'Cryptography', 'Network Security', 'SIEM']
              },
              {
                title: 'Data Science',
                icon: 'Database',
                score: '255',
                duration: '4 года',
                description: 'Анализ данных, BigData, визуализация, предиктивная аналитика',
                skills: ['Python', 'SQL', 'Tableau', 'Statistics']
              },
              {
                title: 'Разработка игр',
                icon: 'Gamepad2',
                score: '235',
                duration: '4 года',
                description: 'Game design, Unity/Unreal, 3D-моделирование, игровая механика',
                skills: ['Unity', 'Unreal Engine', 'C#', '3D Graphics']
              },
              {
                title: 'Блокчейн технологии',
                icon: 'Link',
                score: '260',
                duration: '4 года',
                description: 'Криптовалюты, смарт-контракты, DeFi, Web3 разработка',
                skills: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts']
              }
            ].map((program, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={program.icon} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Trophy" size={16} className="text-primary" />
                      <span className="font-semibold">Минимум {program.score} баллов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-muted-foreground" />
                      <span>{program.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Почему ИннТех?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Преимущества обучения в нашем университете
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Laptop',
                title: 'Современное оборудование',
                description: 'Лаборатории с новейшим оборудованием и лицензионным ПО'
              },
              {
                icon: 'Users',
                title: 'Практикующие преподаватели',
                description: 'Обучение от экспертов из Google, Яндекс, VK и других компаний'
              },
              {
                icon: 'Briefcase',
                title: 'Гарантия стажировок',
                description: 'Практика в IT-компаниях с 2 курса и помощь в трудоустройстве'
              },
              {
                icon: 'Globe',
                title: 'Международное сотрудничество',
                description: 'Программы обмена с университетами США, Европы и Азии'
              },
              {
                icon: 'BookOpen',
                title: 'Гибкая программа',
                description: 'Индивидуальные траектории и возможность совмещать работу с учебой'
              },
              {
                icon: 'Award',
                title: 'Сертификаты',
                description: 'AWS, Google Cloud, Microsoft Azure сертификации в рамках обучения'
              },
              {
                icon: 'TrendingUp',
                title: 'Карьерный рост',
                description: 'Средняя зарплата выпускников 150 000₽ в первый год работы'
              },
              {
                icon: 'Zap',
                title: 'Стартап-акселератор',
                description: 'Помощь в запуске собственных проектов и поиске инвестиций'
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon name={advantage.icon} className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="admission" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Подать заявку</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму и мы свяжемся с вами для консультации
            </p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">ФИО *</Label>
                  <Input 
                    id="fullName" 
                    placeholder="Иванов Иван Иванович" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="specialty">Направление *</Label>
                    <Input 
                      id="specialty" 
                      placeholder="Программная инженерия"
                      value={formData.specialty}
                      onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="score">Баллы ЕГЭ</Label>
                    <Input 
                      id="score" 
                      type="number" 
                      placeholder="240"
                      value={formData.score}
                      onChange={(e) => setFormData({...formData, score: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о себе, своих достижениях и интересах..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о поступлении
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Какие экзамены нужно сдавать для поступления?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Для поступления на IT-специальности необходимы результаты ЕГЭ по математике (профильный уровень), русскому языку и информатике. 
                Минимальные баллы зависят от выбранного направления и составляют от 235 до 265 баллов суммарно.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Есть ли общежитие для иногородних студентов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, у нас есть современное общежитие в 10 минутах от кампуса. Комнаты на 2-3 человека с удобствами, Wi-Fi, 
                кухней и прачечной. Стоимость проживания — 3500₽ в месяц. Приоритет при заселении имеют бюджетники и отличники.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Можно ли учиться и работать одновременно?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, наша программа это предусматривает. Начиная со 2 курса можно перейти на индивидуальный график обучения, 
                который позволяет совмещать учебу со стажировками и работой. Многие студенты работают в IT-компаниях уже с 3 курса.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Какая стоимость обучения на платной основе?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Стоимость обучения на 2025/2026 учебный год составляет 280 000₽ в год. Есть возможность оплаты по семестрам 
                и рассрочка платежа. Студенты с высокими баллами ЕГЭ (от 270) могут получить скидку до 50%.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Какие перспективы трудоустройства после выпуска?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                98% наших выпускников трудоустраиваются в течение 3 месяцев после получения диплома. Средняя стартовая зарплата — 
                150 000₽. У нас есть партнерства с Яндекс, VK, Сбер, Тинькофф и другими компаниями, которые предлагают стажировки и работу нашим студентам.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Есть ли возможность обучения за рубежом?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, у нас есть программы обмена с университетами США (MIT, Stanford), Европы (TU Munich, ETH Zurich) и Азии (NUS, KAIST). 
                Студенты могут провести один или два семестра за рубежом с зачетом оценок. Также есть возможность двойного диплома.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами для получения дополнительной информации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-white" size={32} />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  г. Москва, ул. Инновационная, д. 42<br />
                  Главный корпус, каб. 101
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-white" size={32} />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  +7 (495) 123-45-67<br />
                  Пн-Пт: 9:00 - 18:00
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-white" size={32} />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  admission@inntech.edu<br />
                  info@inntech.edu
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">ИннТех</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm opacity-80">© 2025 Институт Инновационных Технологий. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-background hover:bg-background/20">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-background hover:bg-background/20">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-background hover:bg-background/20">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
