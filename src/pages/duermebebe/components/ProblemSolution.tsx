import { getR2Url } from '../../../config/r2';
import { useFacebookPixel } from '../../../hooks/useFacebookPixel';

function ProblemSolution() {
  const { trackCustomEvent, trackInitiateCheckout } = useFacebookPixel();

  const handleCTAClick = () => {
    trackCustomEvent('MetodoCalma_ProblemSolution_CTA_Click', {
      location: 'problem_solution',
      product: 'Método CALMA',
    });
    trackInitiateCheckout('Método CALMA - Sueño de Bebé', 19.99, 'USD');
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Side */}
          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center lg:text-left leading-tight">
                Si tu bebé <span className="text-red-600">no duerme</span>,<br />
                <span className="text-gray-700">tú tampoco</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 text-center lg:text-left">
                Y probablemente estás viviendo esto cada noche:
              </p>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
              <img
                src={getR2Url('duermebebe/madre_cansada.jpg')}
                alt="Madre cansada con su bebé"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-lg md:text-xl italic">
                  "Son las 3 AM y no puedo más..."
                </p>
              </div>
            </div>

            {/* List */}
            <div className="space-y-3">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Batallas de 2+ horas cada noche solo para que se duerma',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  ),
                  text: 'Se despierta cada 45 minutos pidiendo pecho, brazos o cuna',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Tu suegra dice "déjalo llorar", tu mamá "cárgalo más", el pediatra "es normal"',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Estás tan agotada que lloras del cansancio y te sientes culpable',
                }
              ].map((problem, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-red-50/80 rounded-xl border-l-4 border-red-500 hover:bg-red-50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    {problem.icon}
                  </div>
                  <p className="text-base md:text-lg text-gray-800 pt-0.5 md:pt-1 leading-relaxed font-medium">{problem.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-5 md:p-6 rounded-xl border-l-4 border-red-400">
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium mb-3">
                <strong className="text-red-700">La verdad que nadie te dice:</strong> No estás haciendo nada mal.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">
                El problema no eres tú ni tu bebé. Es la falta de un método claro que respete tanto las necesidades de tu bebé como tu salud mental.
              </p>
              <p className="text-xs md:text-sm font-bold text-gray-900 mt-3">- Dra. Leticia Hidalgo, Pediatra</p>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Pero esto puede cambiar
                </span>
                <span className="block text-gray-900 mt-2">en 7 noches</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 text-center lg:text-left">
                Con el Método CALMA, verás resultados reales desde la primera noche:
              </p>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
              <img
                src={getR2Url('duermebebe/mama_conhojadeseguimiento.jpg')}
                alt="Mamá feliz con plan de seguimiento del Método CALMA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-lg md:text-xl italic">
                  "Finalmente tengo un plan que funciona"
                </p>
              </div>
            </div>

            {/* List */}
            <div className="space-y-3">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Ritual de sueño efectivo en menos de 30 minutos (sin batallas)',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  text: 'Despertares reducidos progresivamente, más horas de sueño seguido',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Un método paso a paso validado por pediatras (sin culpa ni lágrimas)',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: 'Recuperar tu energía, tu paciencia y el placer de ser mamá',
                }
              ].map((solution, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-green-50/80 rounded-xl border-l-4 border-green-500 hover:bg-green-50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    {solution.icon}
                  </div>
                  <p className="text-base md:text-lg text-gray-800 pt-0.5 md:pt-1 leading-relaxed font-medium">{solution.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-5 md:p-6 rounded-xl border-l-4 border-purple-400">
              <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium mb-3">
                <strong className="text-purple-700">Objetivo realista:</strong> No buscamos un bebé robot que duerma 12 horas.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">
                Buscamos transformar tus noches de "guerra abierta" a un descanso más humano, respetando las necesidades de tu bebé Y tu salud mental.
              </p>
              <p className="text-xs md:text-sm font-bold text-gray-900 mt-3">- Dra. Leticia Hidalgo, Pediatra</p>
            </div>
          </div>
        </div>

        {/* CTA Button Centered */}
        <div className="mt-8 md:mt-12 flex justify-center px-4">
          <a
            onClick={handleCTAClick}
            href="https://pay.hotmart.com/X103208920I?checkoutMode=2&off=xa1pls5v"
            className="hotmart-fb hotmart__button-checkout inline-block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-md"
          >
            Quiero este cambio ahora
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
