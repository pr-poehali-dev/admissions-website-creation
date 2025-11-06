import Icon from '@/components/ui/icon';

export default function AdvantagesSection() {
  const advantages = [
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
  ];

  return (
    <section id="advantages" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Почему ИннТех?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Преимущества обучения в нашем университете
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
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
  );
}
