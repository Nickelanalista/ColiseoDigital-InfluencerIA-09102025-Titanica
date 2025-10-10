import { Plus, ArrowRight, Glasses, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function AccessoryCustomization() {
  const [showTransformation, setShowTransformation] = useState(false);

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4">
            <Glasses className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">PASO 3 - ACCESORIOS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight px-4">
            Agrega Accesorios a tu Influencer
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Gafas, joyas, sombreros o cualquier accesorio con un simple paso. Cambia el look completo manteniendo la identidad perfecta de tu influencer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 md:gap-4 items-center mb-12 md:mb-16 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-300">
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                  Foto Original
                </div>
              </div>
              <div className="aspect-[3/4]">
                <img
                  src="/ugc/kate/kate_fremte.jpg"
                  alt="Kate - Foto base sin accesorios"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:px-2">
            <div className="flex flex-col items-center gap-4">
              <div className="hidden lg:block">
                <Plus className="w-10 h-10 text-purple-500" strokeWidth={3} />
              </div>
              <div className="lg:hidden">
                <Plus className="w-8 h-8 text-purple-500 rotate-90" strokeWidth={3} />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-purple-300 to-pink-300 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-300">
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2">
                  <Glasses className="w-4 h-4" />
                  Accesorio
                </div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-[200px] w-full">
                  <img
                    src="/ugc/kate/gafas_rayban_2.webp"
                    alt="Gafas Ray-Ban"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:px-2">
            <div className="flex flex-col items-center gap-4">
              <div className="hidden lg:block">
                <ArrowRight className="w-10 h-10 text-green-500" strokeWidth={3} />
              </div>
              <div className="lg:hidden">
                <ArrowRight className="w-8 h-8 text-green-500 rotate-90" strokeWidth={3} />
              </div>
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                Resultado
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-br from-green-300 to-emerald-300 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div
              className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-green-400 cursor-pointer transform hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setShowTransformation(true)}
              onMouseLeave={() => setShowTransformation(false)}
            >
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-green-600 text-white p-2 rounded-full shadow-lg">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
              <div className="aspect-[3/4] relative">
                <img
                  src="/ugc/kate/modelo_gafas.png"
                  alt="Kate con gafas Ray-Ban"
                  className="w-full h-full object-cover"
                />
                {showTransformation && (
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 via-green-600/50 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <p className="text-sm font-bold mb-1">Identidad perfecta ✓</p>
                      <p className="text-xs">Nuevo look en segundos</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-10 border border-purple-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Más ejemplos de accesorios y styling con Kate
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { img: '/ugc/kate/modelo_anillo.png', label: 'Joyería' },
              { img: '/ugc/kate/modelo_formal_1.jpg', label: 'Formal' },
              { img: '/ugc/kate/modelo_casual_1.jpg', label: 'Casual' },
              { img: '/ugc/kate/modelo_deportiva_1.jpg', label: 'Deportiva' },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-bold text-gray-900 text-center">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 border border-purple-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Glasses className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Proceso simple y rápido</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Carga la foto base de tu influencer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Adjunta la imagen del accesorio o prenda que quieres agregar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Genera la imagen final con el nuevo look integrado naturalmente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Mantén la identidad facial perfecta en cada variación</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
