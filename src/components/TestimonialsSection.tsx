import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Александр Петров',
      program: 'Программная инженерия, 4 курс',
      photo: 'https://cdn.poehali.dev/projects/5a343632-31dc-403e-9cfb-d1c8e0f8cfda/files/7398492d-8a9d-430f-a158-2121d9cfaeaf.jpg',
      text: 'ИннТех дал мне не просто знания, а реальные навыки. Уже на 2 курсе я начал работать в стартапе, а на 3-м получил оффер от Яндекса. Преподаватели — практики, которые делятся актуальным опытом, а не теорией из учебников.',
      rating: 5,
      company: 'Яндекс'
    },
    {
      name: 'Мария Соколова',
      program: 'Искусственный интеллект, выпускница 2024',
      photo: 'https://cdn.poehali.dev/projects/5a343632-31dc-403e-9cfb-d1c8e0f8cfda/files/16bba2f9-1448-44ae-b8f2-c734d8b4c130.jpg',
      text: 'Программа обмена с MIT была невероятным опытом! Университет полностью поддержал меня в этом, помог с документами и финансированием. Сейчас работаю ML-инженером в международной компании и применяю знания, полученные здесь.',
      rating: 5,
      company: 'Google'
    },
    {
      name: 'Дмитрий Иванов',
      program: 'Кибербезопасность, 3 курс',
      photo: 'https://cdn.poehali.dev/projects/5a343632-31dc-403e-9cfb-d1c8e0f8cfda/files/881827b2-453e-49f3-8ad8-b414fd41dbd3.jpg',
      text: 'Лаборатории с современным оборудованием, возможность участвовать в CTF-соревнованиях и хакатонах, стажировка в крупной IT-компании — всё это я получил в ИннТехе. Университет действительно готовит к реальной работе, а не просто выдаёт диплом.',
      rating: 5,
      company: 'Сбер'
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Отзывы студентов</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят наши студенты и выпускники о своём опыте
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="CheckCheck" size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Briefcase" size={16} className="text-primary" />
                    <span className="font-medium">Работает в {testimonial.company}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.8</div>
              <div className="text-sm text-muted-foreground">Средний рейтинг</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2500+</div>
              <div className="text-sm text-muted-foreground">Отзывов</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">96%</div>
              <div className="text-sm text-muted-foreground">Рекомендуют</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
