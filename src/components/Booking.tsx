import { Button } from "@/components/ui/button"

export function Booking() {
  const handleCalendlyClick = () => {
    // In production, this would open Calendly widget or redirect to Calendly
    window.open("https://calendly.com", "_blank")
  }

  const handlePaymentClick = () => {
    // In production, this would redirect to Stripe checkout
    alert("Переход к безопасной оплате...")
    window.open("https://stripe.com", "_blank")
  }

  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Готовы начать?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Получите доступ к курсу</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Оплатите один раз и учитесь без ограничений — материалы и поддержка доступны бессрочно
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* What's included */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Что входит в курс</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <span className="text-accent text-xl">🤖</span>
                <div>
                  <p className="font-semibold text-foreground">Методы и инструменты нейросетей</p>
                  <p className="text-sm text-muted-foreground">ChatGPT, Midjourney, Runway и другие топовые AI</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-accent text-xl">📚</span>
                <div>
                  <p className="font-semibold text-foreground">Практические уроки</p>
                  <p className="text-sm text-muted-foreground">Реальные задачи и готовые промпты</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-accent text-xl">💬</span>
                <div>
                  <p className="font-semibold text-foreground">Обратная связь 24/7</p>
                  <p className="text-sm text-muted-foreground">Поддержка в закрытом канале</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-accent text-xl">🔓</span>
                <div>
                  <p className="font-semibold text-foreground">Бессрочный доступ</p>
                  <p className="text-sm text-muted-foreground">Все обновления курса бесплатно</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Оформить доступ</h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Формат</span>
                  <span className="font-semibold text-foreground">Закрытый канал</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Продолжительность</span>
                  <span className="font-semibold text-foreground">Бессрочно</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Поддержка</span>
                  <span className="font-semibold text-foreground">24/7</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-semibold text-foreground">Итого</span>
                  <span className="text-2xl font-bold text-accent">Уточняйте</span>
                </div>
              </div>

              <Button
                onClick={handlePaymentClick}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6"
              >
                Получить доступ
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                ✓ Доступ навсегда • ✓ Поддержка 24/7 • ✓ Без скрытых комиссий
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}