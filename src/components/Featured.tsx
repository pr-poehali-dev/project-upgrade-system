const advantages = [
  { icon: "🛡️", title: "Защита сделок", desc: "Средства заморожены до подтверждения получения товара" },
  { icon: "⚡", title: "Мгновенно", desc: "Большинство сделок закрываются за 5–15 минут" },
  { icon: "🎮", title: "Все игры", desc: "Поддержка 500+ популярных игр и платформ" },
  { icon: "💰", title: "Лучшие цены", desc: "Конкуренция продавцов даёт выгодный курс покупателям" },
];

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/mountain-landscape.jpg"
          alt="Gaming marketplace"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-violet-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight">
          Один маркетплейс для всего игрового рынка — валюта, аккаунты, буст, скины и многое другое.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {advantages.map((a) => (
            <div key={a.title} className="flex flex-col gap-1">
              <span className="text-2xl">{a.icon}</span>
              <h4 className="font-bold text-neutral-900 text-base">{a.title}</h4>
              <p className="text-neutral-500 text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Смотреть каталог
        </button>
      </div>
    </div>
  );
}