import { Sparkles, Video, Mic, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Movimientos Naturales',
    description: 'Gestos faciales, parpadeos y expresiones realistas',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Mic,
    title: 'Lip-Sync Perfecto',
    description: 'Sincronización de labios con cualquier audio',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Zap,
    title: 'Animación de Fondo',
    description: 'Movimiento sutil en ropa, cabello y entorno',
    color: 'from-amber-500 to-orange-500',
  },
];

const stats = [
  { value: '+87%', label: 'Mayor engagement vs. imagen estática' },
  { value: '3.2x', label: 'Más retención de audiencia' },
  { value: '65%', label: 'Incremento en conversión' },
];

export default function ImageToVideo() {

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-orange-50 via-red-50/30 to-pink-50/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-red-300/20 to-amber-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm rounded-full mb-4">
            <Video className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-600">PASO 4 - NUEVO</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight px-4">
            Dale Vida a tu Imagen
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Transforma imágenes estáticas en videos animados con movimientos naturales, expresiones faciales y sincronización de audio perfecta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="bg-white rounded-xl md:rounded-2xl border-2 border-orange-200 p-6 md:p-8 shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                Capacidades de Animación
              </h3>

              <div className="space-y-4 md:space-y-5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-4 md:p-5 bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className={`p-2 md:p-2.5 bg-gradient-to-br ${feature.color} rounded-lg group-hover:scale-110 transition-transform`}>
                        <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{feature.title}</h4>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-2xl">
              <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-2">Impacto en Resultados</h4>
                  <p className="text-sm md:text-base text-orange-50 leading-relaxed">
                    El contenido en video supera dramáticamente las imágenes estáticas en todas las métricas clave
                  </p>
                </div>
              </div>

              <div className="grid gap-3 md:gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <span className="text-xs md:text-sm text-orange-50">{stat.label}</span>
                    <span className="text-xl md:text-2xl font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-orange-400/40 to-pink-400/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-white max-w-3xl mx-auto">
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative aspect-[4/5] bg-gray-100 border-r-2 border-gray-200">
                    <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 z-10 bg-gray-900/90 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                      Antes
                    </div>

                    <img
                      src="/ugc/kate/modelo_anillo.png"
                      alt="Kate - Imagen estática"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  <div
                    className="relative aspect-[4/5] bg-gradient-to-br from-orange-100 to-pink-100 overflow-hidden"
                  >
                    <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1.5 md:gap-2 shadow-lg">
                      <Video className="w-3 h-3 md:w-4 md:h-4" />
                      Después
                    </div>

                    <video
                      src="/ugc/kate/video_modelo_anillo.mp4"
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 md:p-10 shadow-xl">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Anima tu Contenido y Multiplica Resultados
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              El video es el formato con mayor engagement en todas las plataformas. Aprende cómo crear videos profesionales de tu influencer IA con movimientos naturales, sincronización de voz y expresiones realistas.
            </p>
            <button className="group inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-lg md:rounded-xl hover:from-orange-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-2xl text-sm md:text-base">
              Descubre cómo en el eBook
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scaleY(0.6);
          }
          50% {
            opacity: 1;
            transform: scaleY(1);
          }
        }
      `}</style>
    </section>
  );
}
