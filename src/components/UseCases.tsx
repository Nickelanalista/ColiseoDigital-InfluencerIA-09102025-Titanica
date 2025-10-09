import { ShoppingBag, Dumbbell, MapPin, Sparkles } from 'lucide-react';

const influencers = [
  {
    name: 'Kate',
    role: 'Fashion & Lifestyle',
    description: 'Perfecta para moda, accesorios, cosmética y lifestyle brands. Versatilidad total.',
    images: [
      '/ugc/kate/modelo_formal_1.jpg',
      '/ugc/kate/modelo_gafas.png',
      '/ugc/kate/modelo_cafe.jpg',
      '/ugc/kate/modelo_playa_1.jpg',
    ],
    gradient: 'from-pink-500 to-rose-500',
    tags: ['Moda', 'Accesorios', 'Belleza', 'Lifestyle'],
  },
  {
    name: 'Dave',
    role: 'Fitness & Sports',
    description: 'Ideal para marcas deportivas, suplementos, equipamiento fitness y estilo de vida activo.',
    images: [
      '/ugc/dave/dave_deporte_1.jpg',
      '/ugc/dave/dave_nike.png',
      '/ugc/dave/dave_deporte_3.jpg',
      '/ugc/dave/dave_machine.png',
    ],
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['Deportes', 'Fitness', 'Activewear', 'Wellness'],
  },
  {
    name: 'James',
    role: 'Urban & Outdoor',
    description: 'Perfecto para productos outdoor, lifestyle urbano, cafeterías y marcas casuales.',
    images: [
      '/ugc/james/james_city.jpg',
      '/ugc/james/JAMES_BOTELLA_1.png',
      '/ugc/james/james_cafe.jpg',
      '/ugc/james/james_puente.jpg',
    ],
    gradient: 'from-amber-500 to-orange-500',
    tags: ['Outdoor', 'Urban', 'Casual', 'Bebidas'],
  },
];

export default function UseCases() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">EJEMPLOS REALES</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight px-4">
            Conoce a los Influencers IA
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Tres ejemplos reales de influencers IA creados 100% con las técnicas del eBook. Diferentes nichos, misma metodología.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {influencers.map((influencer, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all ${
                index % 2 === 0 ? '' : ''
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                <div className={`p-6 md:p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${influencer.gradient} text-white rounded-full text-sm font-semibold mb-4 self-start`}>
                    {influencer.name}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {influencer.role}
                  </h3>

                  <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                    {influencer.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {influencer.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`h-1 flex-1 bg-gradient-to-r ${influencer.gradient} rounded-full`} />
                    <span className="text-sm text-gray-500">Creado con IA</span>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <div className="grid grid-cols-2 gap-0 h-full min-h-[400px] lg:min-h-[500px]">
                    {influencer.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative overflow-hidden group"
                      >
                        <img
                          src={image}
                          alt={`${influencer.name} - Ejemplo ${imgIndex + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>

                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${influencer.gradient} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm`}>
                    4 variaciones
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-primary rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Crea tu propio Influencer IA
          </h3>
          <p className="text-base md:text-lg text-blue-50 mb-6 max-w-2xl mx-auto">
            Aprende la metodología completa para crear, iterar y escalar tu propio influencer virtual. Mismo proceso, resultados profesionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>140+ páginas de contenido</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Workflows paso a paso</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Pack de prompts incluido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
