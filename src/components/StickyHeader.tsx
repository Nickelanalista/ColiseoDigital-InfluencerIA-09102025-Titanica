import { useState, useEffect } from 'react';

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 md:py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <img
            src="/material/logo_coliseo.png"
            alt="ColiseoDigital"
            className="h-9 md:h-12 w-auto"
          />
        </div>

        <a
          href="https://pay.hotmart.com/F102324144R"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold rounded-lg transition-all text-xs md:text-sm hover:scale-105 hover:shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10">Comprar ahora</span>
        </a>
      </div>
    </div>
  );
}
