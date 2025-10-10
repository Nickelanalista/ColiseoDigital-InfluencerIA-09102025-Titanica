import { Sparkles, Zap, Eye, TrendingUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function UpscaleComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-400" />
            <span className="text-xs md:text-sm font-semibold text-orange-400">PASO 3</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 tracking-tight px-4">
            Upscale Profesional
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Transforma imágenes básicas en contenido de alta resolución listo para publicar en redes sociales y e-commerce
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center mb-10 md:mb-16">
          <div
            ref={containerRef}
            className="relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 cursor-ew-resize select-none touch-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={() => setIsDragging(true)}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            <div className="absolute inset-0">
              <img
                src="/ugc/kate/kate_yoga_upscale.png"
                alt="Kate - Después del Upscale"
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/ugc/kate/kate_yoga_low.jpg"
                alt="Kate - Antes del Upscale"
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-transparent" />
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-gray-400" />
                  <div className="w-0.5 h-4 bg-gray-400" />
                </div>
              </div>
            </div>

            <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-gray-900/90 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
              Antes
            </div>

            <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-primary/90 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1.5 md:gap-2">
              <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Después
            </div>

            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-200 shadow-xl">
              <div className="flex items-center justify-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-gray-600 mb-2">
                <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="font-medium">Arrastra para comparar</span>
              </div>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-orange-500 transition-all duration-100"
                  style={{ width: `${sliderPosition}%` }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="text-gray-400 text-xs md:text-sm mb-1.5 md:mb-2">Resolución Antes</div>
                <div className="text-white text-2xl md:text-3xl font-bold mb-1">512px</div>
                <div className="text-gray-400 text-[10px] md:text-xs">Calidad básica</div>
              </div>

              <div className="bg-gradient-to-br from-primary to-blue-600 border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6">
                <div className="text-blue-100 text-xs md:text-sm mb-1.5 md:mb-2">Resolución Después</div>
                <div className="text-white text-2xl md:text-3xl font-bold mb-1">2048px</div>
                <div className="text-blue-100 text-[10px] md:text-xs flex items-center gap-1">
                  <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3" />
                  4x mejor
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl p-5 md:p-6 lg:p-8">
              <h3 className="text-white font-semibold text-lg md:text-xl mb-4 md:mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                Mejoras aplicadas
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm md:text-base">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Detalles faciales mejorados:</strong> piel más realista, texturas naturales
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm md:text-base">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Nitidez profesional:</strong> bordes definidos sin artefactos
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm md:text-base">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Colores optimizados:</strong> paleta rica y balanceada
                  </div>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm md:text-base">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Listo para producción:</strong> Instagram, Facebook, web, impresión
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-primary/20 border border-orange-500/30 rounded-lg md:rounded-xl p-4 md:p-6">
              <div className="flex items-start gap-2.5 md:gap-3">
                <div className="p-1.5 md:p-2 bg-orange-500 rounded-lg flex-shrink-0">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white text-sm md:text-base font-semibold mb-1.5 md:mb-2">Proceso automático</h4>
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                    El upscale se realiza en segundos usando algoritmos de IA avanzados. Sin perder calidad, sin artefactos, sin complicaciones técnicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {[
            { label: 'Instagram Posts', value: '1080x1350' },
            { label: 'Instagram Stories', value: '1080x1920' },
            { label: 'Facebook Ads', value: '1200x628' },
            { label: 'Web & Print', value: 'Alta resolución' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg md:rounded-xl p-4 md:p-6 text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-gray-400 text-[10px] md:text-xs mb-1.5 md:mb-2">{item.label}</div>
              <div className="text-white text-xs md:text-sm font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
