interface Testimonial {
    name: string;
    location: string;
    comment: string;
    image: string;
    stars: number;
}

const testimonials: Testimonial[] = [
    {
        name: 'María José Fernández',
        location: 'Ciudad de México, México',
        comment: '¡Increíble! Mi bebé pasó de despertarse 5 veces por noche a dormir 8 horas seguidas en solo 6 días. El método C.A.L.M.A es respetuoso y realmente funciona. Ya no vivo exhausta.',
        image: '/duermebebe/mama_1.jpg',
        stars: 5
    },
    {
        name: 'Carolina Rodríguez',
        location: 'Buenos Aires, Argentina',
        comment: 'Como mamá primeriza estaba desesperada. Este método cambió mi vida. Las rutinas son claras, sin llanto, y mi bebé ahora duerme toda la noche. ¡Gracias Dra. Hidalgo!',
        image: '/duermebebe/mama_2.jpg',
        stars: 5
    },
    {
        name: 'Andrea Martínez',
        location: 'Bogotá, Colombia',
        comment: 'Probé todo antes de encontrar este ebook. Finalmente un método que respeta al bebé y funciona de verdad. En una semana noté cambios increíbles. Lo recomiendo 100%.',
        image: '/duermebebe/mama_3.jpg',
        stars: 5
    },
    {
        name: 'Valentina Silva',
        location: 'Santiago, Chile',
        comment: 'Mi esposo y yo estábamos al límite del agotamiento. Este plan de 7 noches nos salvó. Ahora todos dormimos mejor y somos una familia más feliz. ¡Vale cada centavo!',
        image: '/duermebebe/mama_4.jpg',
        stars: 5
    }
];

function Testimonials() {
    return (
        <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text text-sm sm:text-base font-semibold tracking-wide uppercase mb-3">
                        ❤️ Testimonios Reales
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Madres que ya duermen tranquilas
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Miles de familias han transformado sus noches con el método C.A.L.M.A
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100/50"
                        >
                            {/* Gradient border effect on hover */}
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 italic">
                                "{testimonial.comment}"
                            </p>

                            {/* Author info */}
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-50"></div>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-3 border-white shadow-md"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm sm:text-base text-gray-500">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>

                            {/* Quote decoration */}
                            <div className="absolute top-4 right-6 text-purple-200 opacity-30 text-6xl sm:text-7xl font-serif leading-none select-none">
                                "
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 sm:mt-16">
                    <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 sm:p-8 border border-purple-200">
                        <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                            Únete a las miles de mamás que ya duermen tranquilas 💜
                        </p>
                        <a
                            onClick={() => false}
                            href="https://pay.hotmart.com/X103208920I?checkoutMode=2&off=xa1pls5v"
                            className="hotmart-fb hotmart__button-checkout inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            Comienza tu transformación hoy
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
