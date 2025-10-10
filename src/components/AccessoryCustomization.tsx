import { ArrowRight, Sparkles, Shirt, MapPin, Package } from 'lucide-react';
import { useState } from 'react';

const variations = [
  {
    id: 1,
    title: 'Cambio de Vestuario',
    description: 'Kate modelando ropa GAP - consistencia perfecta',
    icon: Shirt,
    image: '/ugc/kate/kate_gap_2.jpg',
    badge: 'Vestuario',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Nueva Ubicación',
    description: 'Mismo look, diferente ambiente y pose',
    icon: MapPin,
    image: '/ugc/kate/kate_gap_3.jpg',
    badge: 'Fondo',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Modelando Producto',
    description: 'Integración natural con productos reales',
    icon: Package,
    image: '/ugc/kate/kate_gap_4.jpg',
    badge: 'Producto',
    color: 'from-orange-500 to-red-500',
  },
];

export default function AccessoryCustomization() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-orange-500/10 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-600" />
            <span className="text-xs md:text-sm font-semibold text-orange-600">PASO 3</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight px-4">
            Genera Múltiples Variaciones
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            De fotos estáticas a contenido en movimiento. Crea videos profesionales que capturan la atención y aumentan engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 items-start">
          <div className="lg:col-span-2 order-1 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

              <div className="relative bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-300">
                <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-primary text-white p-2 rounded-full shadow-lg animate-bounce">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10">
                  <div className="bg-gray-900/90 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                    Imagen Original
                  </div>
                </div>

                <div className="aspect-[3/4]">
                  <img
                    src="/ugc/kate/kate_gap_1.png"
                    alt="Kate - Imagen base original"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full" />
                    <span className="text-white text-xs md:text-sm font-medium">Referencia Base</span>
                  </div>
                  <p className="text-white/80 text-[10px] md:text-xs">
                    Esta imagen mantiene la identidad facial en todas las variaciones
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-3">Beneficios clave</h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Identidad consistente en toda tu marca</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Sin necesidad de nuevas sesiones de fotos</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Infinitas variaciones para testing A/B</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:flex items-center justify-center order-2 hidden">
            <div className="relative">
              <ArrowRight className="w-12 h-12 text-gray-300" />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                Transforma
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4 md:space-y-6 order-3 lg:order-3">
            {variations.map((variation) => (
              <div
                key={variation.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredId(variation.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`absolute -inset-2 bg-gradient-to-br ${variation.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-300`}
                />

                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="grid grid-cols-5 md:grid-cols-5 gap-0">
                    <div className="col-span-2 aspect-[3/4] md:aspect-[3/4] relative overflow-hidden">
                      <img
                        src={variation.image}
                        alt={variation.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50" />
                    </div>

                    <div className="col-span-3 p-4 md:p-5 lg:p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                        <div className={`p-1.5 md:p-2 rounded-lg bg-gradient-to-br ${variation.color}`}>
                          <variation.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                        </div>
                        <span className={`text-[10px] md:text-xs font-semibold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full bg-gradient-to-r ${variation.color} text-white`}>
                          {variation.badge}
                        </span>
                      </div>

                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1.5 md:mb-2">
                        {variation.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        {variation.description}
                      </p>

                      <div className={`mt-3 md:mt-4 text-[10px] md:text-xs font-medium transition-all duration-300 ${
                        hoveredId === variation.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}>
                        <span className="text-primary flex items-center gap-1">
                          Ver ejemplo
                          <ArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <div className="inline-flex items-center gap-4 md:gap-6 lg:gap-8 bg-gradient-to-r from-blue-50 to-orange-50 border border-gray-200 rounded-xl md:rounded-2xl p-6 md:p-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">1</p>
              <p className="text-xs md:text-sm text-gray-600">Foto Base</p>
            </div>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">∞</p>
              <p className="text-xs md:text-sm text-gray-600">Variaciones Posibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
