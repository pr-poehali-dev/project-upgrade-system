interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-bold">GAMESWAP</div>
        <nav className="flex gap-8">
          <a
            href="#catalog"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Каталог
          </a>
          <a
            href="#how"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Как это работает
          </a>
          <a
            href="#sell"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm bg-violet-600 px-4 py-1"
          >
            Продать
          </a>
        </nav>
      </div>
    </header>
  );
}