import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ProgramsSection() {
  const programs = [
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
  ];

  return (
    <section id="programs" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Специальности</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выбирайте направление и начните путь к карьере в технологиях
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
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
  );
}
