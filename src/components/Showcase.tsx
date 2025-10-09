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
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
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
              className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 md:p-3 border border-white/20">
                  <p className="text-white font-bold text-sm md:text-base mb-1">{item.name}</p>
                  <p className="text-white/90 text-xs md:text-sm">{item.description}</p>
                </div>
              </div>

              <div className="absolute top-3 right-3">
                <span className="px-2 md:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] md:text-xs font-semibold text-gray-800">
                  {item.category}
                </span>
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
