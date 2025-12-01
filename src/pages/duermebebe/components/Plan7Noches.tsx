import { getR2Url } from '../../../config/r2';

function Plan7Noches() {
  const nights = [
    {
      number: 1,
      title: 'Encender el "Modo Noche"',
      description: 'Crea el ambiente perfecto 30 minutos antes: luces bajas, sin pantallas, volumen suave.',
      image: getR2Url('duermebebe/mama_viendomonitor.jpg')
    },
    {
      number: 2,
      title: 'Estructura Firme',
      description: 'Repite el mismo orden cada noche. La predictibilidad genera seguridad.',
      image: getR2Url('duermebebe/leticia_hidalgo_conbebe.jpg')
    },
    {
      number: 3,
      title: 'Ponerle "Alma" al Ritual',
      description: 'Incorpora tu "Frase de Calma" que calme su sistema nervioso.',
      image: getR2Url('duermebebe/leticia_hidalgo_conbebe2.jpg')
    },
    {
      number: 4,
      title: 'El Primer Cambio',
      description: 'Pásalo somnoliento a la cuna. Acompáñalo con tu presencia y toque.',
      image: getR2Url('duermebebe/leticia_hidalgo_madre.jpg')
    },
    {
      number: 5,
      title: 'Protagonismo de la Cama',
      description: 'Acuéstalo cada vez más despierto. Calma con tu mano en su pecho.',
      image: getR2Url('duermebebe/mama_feliz_1.jpg')
    },
    {
      number: 6,
      title: 'Repetición para Aprender',
      description: 'La consistencia es clave. El cuerpo aprende a través de la repetición.',
      image: getR2Url('duermebebe/leticia_hidalgo_escribiendo.jpg')
    },
    {
      number: 7,
      title: 'Evaluación y Ajuste',
      description: 'Celebra los pequeños logros y ajusta según el progreso de tu bebé.',
      image: getR2Url('duermebebe/mama_feliz_2.jpg')
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
              Plan de Acción
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Tu Plan de <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">7 Noches</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Un plan paso a paso, noche por noche, para que sepas exactamente qué hacer. Sin improvisaciones, sin dudas.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-pink-300 to-blue-300"></div>

          {/* Nights */}
          <div className="space-y-6 md:space-y-8">
            {nights.map((night) => (
              <div key={night.number} className="relative flex gap-4 md:gap-6">
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg z-10 relative">
                    {night.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 md:pb-8">
                  <div className="bg-white border-2 border-purple-200 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{night.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4">{night.description}</p>

                    {/* Image */}
                    <div className="relative group overflow-hidden rounded-lg md:rounded-xl">
                      <img
                        src={night.image}
                        alt={night.title}
                        className="w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 md:mt-16 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-xl md:rounded-2xl p-6 md:p-10">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Guía Detallada</h3>
              <p className="text-sm md:text-base text-gray-700">Cada noche explicada en detalle con ejemplos reales</p>
            </div>
            <div>
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Hojas de Seguimiento</h3>
              <p className="text-sm md:text-base text-gray-700">Plantillas descargables para registrar el progreso</p>
            </div>
            <div>
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Solución de Problemas</h3>
              <p className="text-sm md:text-base text-gray-700">Qué hacer cuando algo no sale como esperabas</p>
            </div>
          </div>

          {/* Tracking Sheet Showcase */}
          <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t-2 border-purple-200">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left: Image with watermark */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl border-3 border-purple-200">
                  <img
                    src={getR2Url('duermebebe/hoja_rellenada.jpg')}
                    alt="Hoja de seguimiento"
                    className="w-full h-auto"
                  />
                  {/* Watermark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 flex items-center justify-center pointer-events-none">
                    <div className="text-center transform -rotate-12">
                      <p className="text-white text-4xl md:text-6xl lg:text-7xl font-bold opacity-50 drop-shadow-2xl">
                        MUESTRA
                      </p>
                      <p className="text-white text-lg md:text-xl font-semibold opacity-40 drop-shadow-lg mt-2">
                        Contenido exclusivo del ebook
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Description */}
              <div className="space-y-4 md:space-y-6">
                <div>
                  <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    ✨ Incluido en el ebook
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Hoja de Seguimiento Descargable
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Registra el progreso de tu bebé cada noche. Esta herramienta te permite visualizar las mejoras, identificar patrones y celebrar cada pequeño logro en el camino hacia noches tranquilas.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">Mide horas de sueño continuo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">Identifica despertares nocturnos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">Compara resultados semana a semana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <a
              onClick={() => false}
              href="https://pay.hotmart.com/X103208920I?checkoutMode=2&off=xa1pls5v"
              className="hotmart-fb hotmart__button-checkout inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Comenzar mi plan de 7 noches
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plan7Noches;
