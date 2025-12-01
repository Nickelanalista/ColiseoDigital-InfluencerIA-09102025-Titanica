import { getR2Url } from '../../../config/r2';

function AboutAuthor() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-center">
          {/* Title */}
          <div>
            <span className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Tu guía experta
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Conoce a la
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mt-2">
                Dra. Leticia Hidalgo
              </span>
            </h2>
          </div>

          {/* Image */}
          <div className="relative max-w-xl mx-auto">
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
              <img
                src={getR2Url('duermebebe/leticia_hidalgo_frente.jpg')}
                alt="Dra. Leticia Hidalgo"
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Credentials Badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-sm">Certificada</p>
                  <p className="text-xs text-gray-600">Especialista en sueño infantil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-left pt-6">

            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">Pediatra especializada en sueño infantil</strong> con más de 15 años de experiencia ayudando a familias a recuperar el descanso.
              </p>

              <p>
                Después de trabajar con más de 30,000 familias y transformar miles de noches de caos en momentos de calma, la Dra. Leticia desarrolló el <strong className="text-purple-600">Método CALMA</strong>: un sistema progresivo y respetuoso que prioriza tanto el bienestar del bebé como la salud mental de la madre.
              </p>

              <p>
                "No se trata de seguir reglas estrictas ni de dejar llorar al bebé. Se trata de entender el lenguaje del sueño y crear un sistema que funcione para TU familia", explica la Dra. Hidalgo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6">
              <div className="text-center p-3 md:p-4 bg-white rounded-xl shadow-md">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">15+</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">Años de experiencia</p>
              </div>
              <div className="text-center p-3 md:p-4 bg-white rounded-xl shadow-md">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">30K+</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">Familias ayudadas</p>
              </div>
              <div className="text-center p-3 md:p-4 bg-white rounded-xl shadow-md">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">98%</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">Satisfacción</p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 md:p-6 rounded-xl border-l-4 border-purple-600">
              <p className="text-sm md:text-base text-gray-700 italic mb-2">
                "Una noche mala no borra todo lo avanzado. No estás fallando, estás aprendiendo un lenguaje nuevo con tu hijo."
              </p>
              <p className="text-xs md:text-sm font-semibold text-gray-900">- Dra. Leticia Hidalgo</p>
            </div>
          </div>
        </div>

        {/* Additional Images Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={getR2Url('duermebebe/leticia_hidalgo_conbebe.jpg')} alt="Dra. Leticia con bebé" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={getR2Url('duermebebe/leticia_hidalgo_conebook.jpg')} alt="Dra. Leticia con ebook" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={getR2Url('duermebebe/leticia_hidalgo_escribiendo.jpg')} alt="Dra. Leticia escribiendo" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img src={getR2Url('duermebebe/leticia_hidalgo_madre.jpg')} alt="Dra. Leticia como madre" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutAuthor;
