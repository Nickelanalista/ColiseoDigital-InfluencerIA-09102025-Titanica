import { Sparkles } from 'lucide-react';
import { getR2Url } from '../config/r2';

const showcaseItems = [
  {
    name: 'Kate',
    image: getR2Url('ugc/kate/kate_gap_2.jpg'),
    description: 'Modelo de moda virtual',
    category: 'Fashion',
  },
  {
    name: 'Dave',
    image: getR2Url('ugc/dave/dave_deporte_4.jpg'),
    description: 'Influencer fitness',
    category: 'Sports',
  },
  {
    name: 'Cami',
    image: getR2Url('ugc/cami/cami_tenista_1.png'),
    description: 'Tenista profesional IA',
    category: 'Sports',
  },
  {
    name: 'James',
    image: getR2Url('ugc/james/james_botella_2.png'),
    description: 'Creador de contenido lifestyle',
    category: 'Lifestyle',
  },
  {
    name: 'Kloe',
    image: getR2Url('ugc/kloe/kloe.png'),
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
            <span className="text-primary">Influencers IA</span> Creados con Nuestra Guía
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Estos son ejemplos reales de influencers virtuales creados siguiendo el método paso a paso del eBook
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-16">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden transition-all duration-500 border border-orange-200/40 hover:border-orange-400/60 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20"
            >
              {/* Glow effect futurista al hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-400/0 via-pink-500/0 to-orange-600/0 group-hover:from-orange-400/30 group-hover:via-pink-500/20 group-hover:to-orange-600/30 rounded-xl blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" />

              <div className="relative w-full h-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay con gradiente naranja sutil - desaparece al hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/60 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

                {/* Categoría con tema naranja */}
                <div className="absolute top-3 right-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="px-2.5 py-1 bg-gradient-to-r from-orange-500/90 to-pink-600/90 backdrop-blur-sm text-white rounded-lg text-[10px] font-semibold shadow-lg">
                    {item.category}
                  </span>
                </div>

                {/* Información con glassmorphism - más pequeña y sutil */}
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="bg-white/80 backdrop-blur-md rounded-lg p-2.5 border border-white/60 shadow-lg">
                    <p className="text-gray-900 font-bold text-xs md:text-sm">{item.name}</p>
                    <p className="text-gray-600 text-[10px] md:text-xs">{item.description}</p>
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
