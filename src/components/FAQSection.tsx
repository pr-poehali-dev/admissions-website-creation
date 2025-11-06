import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQSection() {
  return (
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
  );
}
