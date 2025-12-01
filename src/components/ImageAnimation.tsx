import { Sparkles, Video, Mic } from 'lucide-react';
import { getR2Url } from '../config/r2';

const capabilities = [
  {
    icon: Video,
    title: 'Movimientos Naturales',
    description: 'Gestos faciales, parpadeos y expresiones realistas',
  },
  {
    icon: Mic,
    title: 'Lip-Sync Perfecto',
    description: 'Sincronización de labios con cualquier audio',
  },
];

export default function ImageAnimation() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-orange-50/30 via-white to-pink-50/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full mb-4">
            <Video className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-semibold text-primary">PASO 5</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight px-4">
            Dale Vida a tu Imagen
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Transforma imágenes estáticas en videos animados con movimientos naturales, expresiones faciales y sincronización de audio perfecta
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-12 max-w-5xl mx-auto">
          {/* Antes */}
          <div className="relative group">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-orange-400">
              <div className="bg-orange-500 text-white text-center font-bold text-sm md:text-base py-2">
                Antes
              </div>
              <div className="p-2 bg-white">
                <div className="aspect-[3/4] rounded-xl overflow-hidden border-2 border-orange-400">
                  <img
                    src={getR2Url('ugc/kate/modelo_anillo.png')}
                    alt="Kate - Imagen estática"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Después */}
          <div className="relative group">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-orange-400">
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white text-center font-bold text-sm md:text-base py-2 flex items-center justify-center gap-1.5">
                <Video className="w-4 h-4" />
                Después
              </div>
              <div className="p-2 bg-white">
                <div className="aspect-[3/4] rounded-xl overflow-hidden border-2 border-orange-400 bg-gray-50">
                  <video
                    src={getR2Url('ugc/kate/video_modelo_anillo.mp4')}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-200 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Capacidades de Animación</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-orange-100 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg flex-shrink-0">
                    <capability.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm md:text-base font-bold mb-1">{capability.title}</p>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
