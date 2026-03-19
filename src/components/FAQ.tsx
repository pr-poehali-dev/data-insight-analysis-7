import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Нужен ли опыт работы с нейросетями?",
      answer:
        "Нет! Курс подходит для любого уровня — от полного новичка до тех, кто уже пробовал AI-инструменты. Начинаем с основ и идём к продвинутым техникам.",
    },
    {
      question: "Как устроено обучение?",
      answer:
        "Формат полностью самостоятельный — изучаешь материалы в своём темпе, без жёстких дедлайнов. При любых вопросах поддержка доступна 24/7 в закрытом канале.",
    },
    {
      question: "Сколько времени нужно уделять в день?",
      answer:
        "Это зависит только от тебя. Можно учиться по 30 минут в день, а можно за выходные пройти несколько блоков. Доступ бессрочный — торопиться некуда.",
    },
    {
      question: "Какие нейросети изучаются в курсе?",
      answer:
        "Разбираем актуальные инструменты для генерации текста, изображений и видео: ChatGPT, Claude, Midjourney, Runway и другие популярные AI-платформы.",
    },
    {
      question: "Что значит «доступ навсегда»?",
      answer:
        "Ты покупаешь доступ один раз и получаешь все материалы без срока действия. Все обновления и новые уроки — также бесплатно.",
    },
    {
      question: "Для каких целей можно применять нейроконтент?",
      answer:
        "Для чего угодно: ведение соцсетей, блогов, бизнес-материалы, фриланс, личные проекты. Навыки универсальны и применимы в любой сфере.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}