import { useState, useEffect } from 'react';
import { ArrowUp, ShoppingCart } from 'lucide-react';
import { useClarity } from '../hooks/useClarity';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const { trackEvent } = useClarity();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Sacudir el botón cada 4 segundos
    const shakeInterval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 1000); // Duración de la animación (1s)
    }, 4000);

    return () => clearInterval(shakeInterval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Botón Comprar Ahora - Izquierda */}
      <a
        href="https://pay.hotmart.com/F102324144R?checkoutMode=2"
        onClick={() => trackEvent('cta_floating_click', { location: 'floating_buy', price: '4.99' })}
        className={`hotmart-fb hotmart__button-checkout fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex items-center gap-2 px-4 md:px-5 py-3 md:py-3.5 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full text-white font-bold hover:from-orange-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        } ${isShaking ? 'animate-shake' : ''}`}
      >
        <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-sm md:text-base">Comprar Ahora</span>
      </a>

      {/* Botón Scroll to Top - Derecha */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 p-3 md:p-3.5 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full text-white hover:from-orange-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </>
  );
}
