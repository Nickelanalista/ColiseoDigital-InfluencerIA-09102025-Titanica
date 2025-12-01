import { getR2Url } from '../../../config/r2';

function MetodoCalma() {
  const steps = [
    {
      letter: 'C',
      title: 'Calmar el Ambiente',
      description: 'El escenario perfecto para el sueño',
      detail: '30 minutos antes de dormir: baja luces, apaga pantallas, reduce el volumen. El cuerpo del bebé debe sentir físicamente que el "modo día" terminó.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600'
    },
    {
      letter: 'A',
      title: 'Anticipar el Cansancio',
      description: 'El timing es clave',
      detail: 'No esperes a que esté "muy cansado". Empieza el ritual apenas veas las señales: mirada fija, frotarse los ojos. Anticipar es ganar la mitad de la batalla.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-pink-500 to-pink-600'
    },
    {
      letter: 'L',
      title: 'Ligar el Sueño a un Ritual',
      description: 'La secuencia que crea seguridad',
      detail: 'El cerebro del bebé necesita predicción. Crea una "intro" de la noche que sea siempre igual. La repetición da seguridad y anticipa el descanso.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    {
      letter: 'M',
      title: 'Modificar de a Poco',
      description: 'La técnica progresiva',
      detail: 'Si hoy solo duerme al pecho o en brazos, no lo cortes de golpe. Haz micro-cambios. Que su último recuerdo sea el colchón, no tu brazo en movimiento.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      letter: 'A',
      title: 'Acompañarme a Mí Misma',
      description: 'El autocuidado es parte del método',
      detail: 'Este método no funciona si tú estás colapsada. Antes de empezar, evalúate. Si estás en rojo, tu prioridad es sobrevivir y pedir ayuda.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-rose-500 to-rose-600'
    }
  ];

  return (
    <section id="metodo" className="py-12 md:py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-12 lg:mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Ebook Image - Left on desktop */}
            <div className="order-2 lg:order-1 max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
              <img
                src={getR2Url('duermebebe/portada_ebook_suenobebe.jpg')}
                alt="Portada Ebook Sueño de Bebé"
                className="w-full rounded-xl md:rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content - Right on desktop */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                El Método <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">CALMA</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Los 5 pilares estructurales que transformarán tus noches. Un acrónimo fácil de recordar cuando estés agotada a las 3 AM.
              </p>
            </div>
          </div>
        </div>

        {/* Steps Grid - 2 Columns */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white border-3 border-purple-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Letter Circle */}
              <div className="flex items-center justify-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  {step.letter}
                </div>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="text-purple-600 bg-purple-50 p-4 rounded-xl">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl md:rounded-2xl p-6 md:p-10 text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">¿Lista para aplicar el Método CALMA?</h3>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90">
            El ebook incluye guías paso a paso, ejemplos reales y herramientas descargables
          </p>
          <a
            onClick={() => false}
            href="https://pay.hotmart.com/X103208920I?checkoutMode=2&off=xa1pls5v"
            className="hotmart-fb hotmart__button-checkout inline-block bg-white text-purple-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Obtener el ebook completo
          </a>
        </div>
      </div>
    </section>
  );
}

export default MetodoCalma;
