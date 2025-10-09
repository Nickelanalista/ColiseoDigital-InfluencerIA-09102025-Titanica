import { Sparkles, Palette, Zap, Shirt, Package, Video, TrendingUp } from 'lucide-react';

const learningPoints = [
  {
    icon: Palette,
    title: 'Crear tu influencer único',
    description: 'Diseña desde cero una identidad visual consistente y profesional',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shirt,
    title: 'Vestir como quieras',
    description: 'Cambia outfits, accesorios y estilos sin límites ni costos adicionales',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Package,
    title: 'Integrar productos naturalmente',
    description: 'Coloca cualquier producto en manos de tu influencer de forma realista',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Video,
    title: 'Generar contenido en video',
    description: 'Transforma fotos en videos dinámicos y talking heads profesionales',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Producir variaciones infinitas',
    description: 'Crea decenas de variaciones por día para testing y optimización',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Escalar tu contenido',
    description: 'Sistema probado para aumentar output sin perder calidad ni consistencia',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function WhatYouWillLearn() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-orange-50 backdrop-blur-sm rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">DOMINA LA PERSONALIZACIÓN TOTAL</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight px-4">
            Lo que aprenderás con esta guía
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Control absoluto sobre cada aspecto de tu influencer IA. Sin límites creativos, sin costos por cambio, sin depender de terceros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />

              <div className="relative">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${point.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <point.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 md:p-10 lg:p-12 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              De una foto base a contenido ilimitado
            </h3>
            <p className="text-base md:text-lg text-white/90 mb-6">
              Aprende a transformar una sola imagen en cientos de variaciones profesionales. Cambia ropa, agrega productos, modifica fondos y genera videos, todo manteniendo la misma identidad visual.
            </p>

            <div className="grid grid-cols-3 gap-6 md:gap-8 mt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">1</div>
                <div className="text-xs md:text-sm text-white/80">Foto Base</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">∞</div>
                <div className="text-xs md:text-sm text-white/80">Variaciones</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-xs md:text-sm text-white/80">Control Creativo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
