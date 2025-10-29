import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useClarity } from '../hooks/useClarity';
import { useScrollTracking } from '../hooks/useScrollTracking';
import { getR2Url } from '../config/r2';

export default function Pricing() {
  const { trackEvent } = useClarity();
  const sectionRef = useScrollTracking({ eventName: 'scroll_to_pricing', threshold: 0.3 });
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs md:text-sm font-semibold text-primary mb-2 md:mb-3">OFERTA LIMITADA</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight px-4">
            Empieza hoy
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={getR2Url('promo/mockup_ebook_influencer_3.png')}
                alt="eBook Influencer IA - Vista previa"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative bg-white border-2 border-gray-200 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg overflow-hidden">
          <div className="absolute top-4 right-4 bg-red-50 border border-red-200 rounded-lg px-3 py-1.5">
            <p className="text-xs font-semibold text-red-700 line-through">USD 39</p>
          </div>

          <div className="text-center mb-6 md:mb-8 pt-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">eBook Completo</h3>
            <div className="flex items-baseline justify-center gap-2 md:gap-3 mb-4 md:mb-6">
              <span className="text-4xl md:text-5xl font-bold text-primary">USD 7.99</span>
            </div>
            <div className="inline-block bg-red-50 border border-red-200 rounded-lg px-3 md:px-4 py-1.5 md:py-2 mb-6 md:mb-8">
              <p className="text-xs md:text-sm text-red-700 font-medium">
                Oferta termina en {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </p>
            </div>
          </div>

          <div className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
            {[
              '80+ páginas prácticas',
              'Pack inicial de prompts',
              'Casos y workflows listos',
              'Actualizaciones incluidas',
              'Uso comercial',
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2.5 md:gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="https://pay.hotmart.com/F102324144R?checkoutMode=2"
            onClick={() => trackEvent('cta_pricing_click', { location: 'pricing', price: '7.99' })}
            className="hotmart-fb hotmart__button-checkout group w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 text-sm md:text-base"
          >
            Comprar ahora · USD 7.99
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-4 md:mt-6 text-xs md:text-sm text-gray-500">
            <span>Pago único</span>
            <span>·</span>
            <span>Acceso inmediato</span>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
