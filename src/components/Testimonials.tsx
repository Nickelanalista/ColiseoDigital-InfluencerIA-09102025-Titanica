import { Quote, Star, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote: 'Pasé de gastar 200 lucas en sesiones fotográficas a generar contenido ilimitado. El ROI es brutal.',
    author: 'Francisca Contreras',
    company: 'Dueña de tienda online, Providencia',
    image: '/people/mujer_2.jpg',
    rating: 5,
  },
  {
    quote: 'La guía es súper práctica, nada de paja. En una semana ya tenía mi influencer promocionando mis productos.',
    author: 'Rodrigo Valenzuela',
    company: 'Emprendedor, Viña del Mar',
    image: '/people/hombre_2.jpg',
    rating: 5,
  },
  {
    quote: 'Increíble. Ahora genero contenido para Instagram todos los días sin depender de nadie.',
    author: 'Camila Rojas',
    company: 'Marketing Digital, Santiago',
    image: '/people/mujer_1.jpg',
    rating: 5,
  },
  {
    quote: 'El paso a paso es clarísimo. Partí de cero y ahora mi influencer virtual me ayuda a vender más.',
    author: 'Matías Espinoza',
    company: 'Dueño de ecommerce, Concepción',
    image: '/people/hombre_3.jpg',
    rating: 5,
  },
];

const stats = [
  { value: '1,200+', label: 'Compradores satisfechos' },
  { value: '4.9/5', label: 'Valoración promedio' },
  { value: '98%', label: 'Recomendarían el eBook' },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50/20 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-4">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-700">TESTIMONIOS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight px-4">
            Resultados Reales
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 mb-8">
            Marketers, founders y creadores que transformaron su producción de contenido
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10 md:mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
              </div>

              <div className="relative p-6 md:p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/20 mb-4" />

                <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-xs md:text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4">
                <div className="bg-primary/10 backdrop-blur-sm rounded-full p-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-300 text-yellow-300" />
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Únete a más de 1,200 compradores
          </h3>
          <p className="text-base md:text-lg text-blue-50 max-w-2xl mx-auto">
            Empieza a crear tu influencer IA hoy y ve resultados en 24 horas
          </p>
        </div>
      </div>
    </section>
  );
}
