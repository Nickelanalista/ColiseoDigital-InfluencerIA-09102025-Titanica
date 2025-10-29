import { useState, useEffect, useRef } from 'react';
import { getR2Url } from '../config/r2';

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const delta = Math.abs(current - lastScrollY.current);

      // Siempre visible cerca del tope
      if (current < 80) {
        setIsVisible(true);
        lastScrollY.current = current;
        return;
      }

      // Evitar jitter en movimientos muy pequeños
      if (delta < 6) return;

      if (current > lastScrollY.current) {
        // Desplazando hacia abajo: ocultar
        setIsVisible(false);
      } else {
        // Desplazando hacia arriba: mostrar
        setIsVisible(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 md:py-3 grid grid-cols-3 items-center">
        <div />
        <div className="justify-self-center">
          <img
            src={getR2Url('material/logo_coliseo.png')}
            alt="ColiseoDigital"
            className="h-11 md:h-12 w-auto"
          />
        </div>

        <a
          href="https://pay.hotmart.com/F102324144R?checkoutMode=2"
          className="hotmart-fb hotmart__button-checkout justify-self-end group relative px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold rounded-lg transition-all text-xs md:text-sm hover:scale-105 hover:shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10">Comprar ahora</span>
        </a>
      </div>
    </div>
  );
}
