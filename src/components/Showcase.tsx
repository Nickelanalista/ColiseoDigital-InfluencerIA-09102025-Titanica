import { Sparkles } from 'lucide-react';

const showcaseItems = [
  {
    name: 'Kate',
    image: '/ugc/kate/kate_gap_2.jpg',
    description: 'Modelo de moda virtual',
    category: 'Fashion',
  },
  {
    name: 'Dave',
    image: '/ugc/dave/dave_deporte_4.jpg',
    description: 'Influencer fitness',
    category: 'Sports',
  },
  {
    name: 'James',
    image: '/ugc/james/james_botella_2.png',
    description: 'Creador de contenido lifestyle',
    category: 'Lifestyle',
  },
  {
    name: 'Kloe',
    image: '/ugc/kloe/kloe.png',
    description: 'Influencer lifestyle y moda',
    category: 'Fashion',
  },
];

export default function Showcase() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-300/20 to-pink-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-orange-50 backdrop-blur-sm rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">NUESTRO TRABAJO</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight px-4">
            Influencers IA Creados con Nuestra Guía
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Estos son ejemplos reales de influencers virtuales creados siguiendo el método paso a paso del eBook
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] border-2 border-gray-200 hover:border-primary/50"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />

              <div className="relative w-full h-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-primary to-blue-600 text-white backdrop-blur-sm rounded-full text-xs font-bold shadow-lg">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-3 left-3">
                  <div className="bg-green-500 text-white px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-lg">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    100% IA
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="bg-white/95 backdrop-blur-lg rounded-xl p-3 md:p-4 border border-white/50 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-gray-900 font-extrabold text-base md:text-lg mb-1">{item.name}</p>
                    <p className="text-gray-700 text-xs md:text-sm font-medium">{item.description}</p>
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <p className="text-[10px] md:text-xs text-primary font-semibold">Creado con el eBook</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">1,200+</div>
              <div className="text-xs md:text-sm text-gray-600">Compradores</div>
            </div>
            <div className="w-px h-10 md:h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">4.9★</div>
              <div className="text-xs md:text-sm text-gray-600">Valoración</div>
            </div>
            <div className="w-px h-10 md:h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">24h</div>
              <div className="text-xs md:text-sm text-gray-600">Para empezar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
