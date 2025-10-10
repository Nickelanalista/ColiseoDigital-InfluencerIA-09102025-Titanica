import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function Hero() {
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
    <section className="relative py-8 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-5 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-100 rounded-full text-xs md:text-sm">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-gray-700 font-semibold">Guía Completa en Español</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.05] tracking-tight">
              Crea tu Primer Influencer IA
              <span className="block text-primary mt-1">para tu Negocio</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
              Genera contenido ilimitado con tu influencer virtual personalizado. Sin fotógrafos, sin modelos, sin esperas. Crea, publica y escala tu marca hoy.
            </p>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 inline-block">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-3">
                  <img src="/ugc/kate/kate_fremte.jpg" alt="Kate" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="/ugc/dave/dave_ai.png" alt="Dave" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="/ugc/james/james_previo_1.png" alt="James" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="/ugc/kloe/kloe.png" alt="Kloe" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Kate, Dave, James y Kloe</p>
                  <p className="text-xs text-gray-600">Creados 100% con IA</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://pay.hotmart.com/F102324144R"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 text-base"
              >
                Comprar ahora · USD 7.99
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600 pt-2">
              {['80+ páginas', 'Videos incluidos', 'Pack de prompts', 'Uso comercial'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-orange-200/30 rounded-3xl blur-3xl animate-pulse" />

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/promo/Portada Book Influencer IA.jpg"
                  alt="Crea tu Influencer IA para tu Negocio"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-orange-500 to-pink-600 text-white rounded-xl p-3 shadow-2xl min-w-[160px]">
                <div className="flex justify-end mb-1">
                  <div className="text-xs font-semibold bg-white/30 rounded-md px-2 py-0.5 backdrop-blur-sm line-through flex items-baseline gap-1">
                    <span>Antes: 39</span>
                    <span className="text-[9px]">USD</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold leading-tight flex items-baseline justify-center gap-1">
                    <span>7.99</span>
                    <span className="text-sm font-semibold">USD</span>
                  </div>
                  <div className="text-[10px] mt-0.5 font-medium opacity-90 hidden md:block">Precio de hoy</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-gray-900">OFERTA EXPIRA EN</span>
                </div>
                <div className="text-2xl font-bold text-primary font-mono">
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
