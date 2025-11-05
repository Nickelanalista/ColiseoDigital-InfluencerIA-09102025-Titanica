import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useClarity } from '../hooks/useClarity';
import { getR2Url } from '../config/r2';

export default function Hero() {
  const { trackEvent } = useClarity();
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 30,
    seconds: 0,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showUrgencyMessage, setShowUrgencyMessage] = useState(false);

  const carouselItems = [
    { type: 'image', src: getR2Url('promo/Portada Book Influencer IA.jpg'), alt: 'Crea tu Influencer IA para tu Negocio' },
    { type: 'video', src: getR2Url('ugc/cami/cami_tenista_vid1.mp4'), alt: 'Cami - Tenista IA en acción' },
    { type: 'video', src: getR2Url('ugc/james/james_stanley_1.mp4'), alt: 'James - Lifestyle content' },
    { type: 'image', src: getR2Url('ugc/dave/dave_machine_2.png'), alt: 'Dave - Fitness IA' },
    { type: 'image', src: getR2Url('ugc/kate/modelo_casual_1.jpg'), alt: 'Kate - Fashion IA' },
  ];

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Tiempo expirado - mostrar mensaje de urgencia
          setShowUrgencyMessage(true);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const carousel = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);

    return () => clearInterval(carousel);
  }, [carouselItems.length, isAutoPlaying]);

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
                  <img src={getR2Url('ugc/kate/kate_fremte.jpg')} alt="Kate" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src={getR2Url('ugc/dave/dave_ai.png')} alt="Dave" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src={getR2Url('ugc/cami/cami_tenista_5.png')} alt="Cami" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src={getR2Url('ugc/james/james_city.jpg')} alt="James" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src={getR2Url('ugc/kloe/kloe.png')} alt="Kloe" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Kate, Dave, Cami, James y Kloe</p>
                  <p className="text-xs text-gray-600">Creados 100% con IA</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://pay.hotmart.com/F102324144R?checkoutMode=2"
                onClick={() => trackEvent('cta_hero_click', { location: 'hero', price: '4.99' })}
                className="hotmart-fb hotmart__button-checkout group px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 text-base"
              >
                Comprar ahora · USD 4.99
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600 pt-2">
              {['80+ páginas', 'Pack de prompts', 'Uso comercial', 'Actualizaciones'].map((item, idx) => (
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
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group">
                {carouselItems.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}

                {/* Botón Anterior */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Botón Siguiente */}
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Slide siguiente"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Indicadores de carrusel */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {carouselItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? 'bg-white w-6'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Ir a slide ${index + 1}`}
                    />
                  ))}
                </div>
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
                    <span>4.99</span>
                    <span className="text-sm font-semibold">USD</span>
                  </div>
                  <div className="text-[10px] mt-0.5 font-medium opacity-90">Precio Ahora</div>
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

      {/* Modal de Segunda Oportunidad */}
      {showUrgencyMessage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 shadow-2xl relative animate-scaleIn">
            <button
              onClick={() => setShowUrgencyMessage(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Cerrar"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                ¡Última Oportunidad!
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                El tiempo expiró, pero...
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 border-2 border-orange-200 rounded-xl p-4 mb-6">
                <p className="text-sm md:text-base text-gray-700 font-semibold mb-2">
                  Te damos una <span className="text-orange-600 font-bold">segunda oportunidad</span> para mantener el precio especial
                </p>
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
                  USD 4.99
                </div>
                <p className="text-xs text-gray-500 mt-1">Antes: USD 39</p>
              </div>
            </div>

            <a
              href="https://pay.hotmart.com/F102324144R?checkoutMode=2"
              onClick={() => trackEvent('cta_urgency_modal', { location: 'urgency_modal', price: '4.99' })}
              className="hotmart-fb hotmart__button-checkout group w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 text-base mb-3"
            >
              Sí, aprovecho esta oportunidad
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-xs text-center text-gray-500">
              ⚡ Esta oferta no volverá a aparecer
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
