import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 p-2.5 md:p-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full text-white hover:from-orange-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
    </button>
  );
}
