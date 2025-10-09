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
          <h3 className="text-base md:text-lg font-bold text-gray-900">ColiseoDigital</h3>
          <div className="hidden sm:flex items-center gap-1.5 md:gap-2 text-xs md:text-sm">
            <span className="font-bold text-primary">USD 14.99</span>
            <span className="text-gray-400 line-through text-xs">USD 39</span>
          </div>
        </div>

        <button
          onClick={() => {
            if (window.HotmartCheckout) {
              window.HotmartCheckout.open({
                src: 'https://pay.hotmart.com/O97358348M?checkoutMode=10&bid=1735944537267',
                theme: 'light'
              });
            }
          }}
          className="px-4 md:px-6 py-2 md:py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all text-xs md:text-sm hover:scale-105"
        >
          Comprar ahora
        </button>
      </div>
    </div>
  );
}
