import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function AdmissionCalculator() {
  const [scores, setScores] = useState({
    math: '',
    russian: '',
    informatics: ''
  });
  const [result, setResult] = useState<{
    total: number;
    programs: Array<{ name: string; minScore: number; chance: string; chancePercent: number }>;
  } | null>(null);

  const programs = [
    { name: 'Разработка игр', minScore: 235 },
    { name: 'Программная инженерия', minScore: 240 },
    { name: 'Кибербезопасность', minScore: 250 },
    { name: 'Data Science', minScore: 255 },
    { name: 'Блокчейн технологии', minScore: 260 },
    { name: 'Искусственный интеллект', minScore: 265 }
  ];

  const calculateChances = () => {
    const total = Number(scores.math) + Number(scores.russian) + Number(scores.informatics);
    
    const programsWithChances = programs.map(program => {
      const diff = total - program.minScore;
      let chance = '';
      let chancePercent = 0;
      
      if (diff >= 40) {
        chance = 'Очень высокий';
        chancePercent = 95;
      } else if (diff >= 20) {
        chance = 'Высокий';
        chancePercent = 80;
      } else if (diff >= 10) {
        chance = 'Хороший';
        chancePercent = 65;
      } else if (diff >= 0) {
        chance = 'Средний';
        chancePercent = 45;
      } else if (diff >= -10) {
        chance = 'Низкий';
        chancePercent = 25;
      } else {
        chance = 'Очень низкий';
        chancePercent = 5;
      }
      
      return { ...program, chance, chancePercent };
    });

    setResult({
      total,
      programs: programsWithChances
    });
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    calculateChances();
  };

  const getChanceColor = (chance: string) => {
    switch (chance) {
      case 'Очень высокий': return 'text-green-600 bg-green-50 border-green-200';
      case 'Высокий': return 'text-green-500 bg-green-50 border-green-200';
      case 'Хороший': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Средний': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Низкий': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Очень низкий': return 'text-red-600 bg-red-50 border-red-200';
      default: return '';
    }
  };

  const getChanceIcon = (chance: string) => {
    switch (chance) {
      case 'Очень высокий':
      case 'Высокий':
        return 'TrendingUp';
      case 'Хороший':
      case 'Средний':
        return 'Minus';
      case 'Низкий':
      case 'Очень низкий':
        return 'TrendingDown';
      default:
        return 'Minus';
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Калькулятор шансов на поступление</h2>
          <p className="text-lg text-muted-foreground">
            Введите ваши баллы ЕГЭ и узнайте шансы на поступление
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Введите баллы ЕГЭ</CardTitle>
            <CardDescription>
              Каждый предмет оценивается по шкале от 0 до 100 баллов
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="math">Математика (профиль) *</Label>
                  <Input
                    id="math"
                    type="number"
                    min="0"
                    max="100"
                    placeholder="0-100"
                    value={scores.math}
                    onChange={(e) => setScores({ ...scores, math: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="russian">Русский язык *</Label>
                  <Input
                    id="russian"
                    type="number"
                    min="0"
                    max="100"
                    placeholder="0-100"
                    value={scores.russian}
                    onChange={(e) => setScores({ ...scores, russian: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="informatics">Информатика *</Label>
                  <Input
                    id="informatics"
                    type="number"
                    min="0"
                    max="100"
                    placeholder="0-100"
                    value={scores.informatics}
                    onChange={(e) => setScores({ ...scores, informatics: e.target.value })}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Рассчитать шансы
                <Icon name="Calculator" className="ml-2" size={20} />
              </Button>
            </form>

            {result && (
              <div className="mt-8 space-y-6 animate-fade-in">
                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border-2 border-primary/20">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Ваша сумма баллов</p>
                    <p className="text-5xl font-bold text-primary">{result.total}</p>
                    <p className="text-sm text-muted-foreground mt-2">из 300 возможных</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Ваши шансы по специальностям:</h3>
                  <div className="space-y-3">
                    {result.programs.map((program, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all ${getChanceColor(program.chance)}`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3 flex-1">
                            <Icon name={getChanceIcon(program.chance)} size={24} />
                            <div>
                              <p className="font-semibold">{program.name}</p>
                              <p className="text-sm opacity-80">Минимум: {program.minScore} баллов</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">{program.chance}</p>
                            <p className="text-sm opacity-80">{program.chancePercent}% вероятность</p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="w-full bg-white/50 rounded-full h-2 overflow-hidden">
                            <div
                              className="h-full bg-current transition-all duration-500"
                              style={{ width: `${program.chancePercent}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <Icon name="Info" size={16} className="inline mr-1" />
                    Калькулятор показывает примерные шансы на основе минимальных проходных баллов. 
                    Финальное решение о зачислении зависит от конкурса и дополнительных достижений.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
