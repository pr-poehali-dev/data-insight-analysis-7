export function Benefits() {
  const benefits = [
    {
      icon: "🤖",
      title: "Топовые AI-инструменты",
      description: "ChatGPT, Midjourney, Claude, Runway и другие — всё, что нужно для нейроконтента",
    },
    {
      icon: "🎯",
      title: "Практические навыки",
      description: "Только реальные задачи: создаёшь контент с первого урока",
    },
    {
      icon: "💬",
      title: "Поддержка 24/7",
      description: "Задавай вопросы в любое время — отвечаем быстро",
    },
    {
      icon: "🚀",
      title: "Применение в любой сфере",
      description: "Маркетинг, SMM, бизнес, фриланс — навыки универсальны",
    },
    {
      icon: "🔓",
      title: "Доступ навсегда",
      description: "Купил один раз — учишься без ограничений по времени",
    },
    {
      icon: "📈",
      title: "Самостоятельный темп",
      description: "Учись когда удобно, без жёстких дедлайнов и расписания",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Почему мы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Всё для работы с нейросетями
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Курс даёт практические навыки создания нейроконтента — применяй в работе, бизнесе или фрилансе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}