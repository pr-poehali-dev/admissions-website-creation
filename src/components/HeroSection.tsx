import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
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
  );
}
