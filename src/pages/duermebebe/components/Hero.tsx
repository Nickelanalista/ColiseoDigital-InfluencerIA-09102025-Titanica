import { getR2Url } from '../../../config/r2';
import { useFacebookPixel } from '../../../hooks/useFacebookPixel';

function Hero() {
  const { trackCustomEvent, trackInitiateCheckout } = useFacebookPixel();

  const handleCTAClick = () => {
    // Evento personalizado
    trackCustomEvent('MetodoCalma_Hero_CTA_Click', {
      location: 'hero',
      product: 'Método CALMA',
    });

    // Evento estándar de inicio de checkout
    trackInitiateCheckout('Método CALMA - Sueño de Bebé', 19.99, 'USD');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Left side on desktop */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Title */}
            <div>
              <span className="bg-purple-200 text-purple-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold inline-block mb-3 sm:mb-4 lg:mb-6">
                Método respaldado por pediatras
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">Haz que tu bebé duerma</span>
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  toda la noche con el método C.A.L.M.A
                </span>
              </h1>
            </div>

            {/* Description - Precise and short */}
            <div>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Guía paso a paso para transformar las noches caóticas en momentos de calma, sin lágrimas y con método validado por pediatras.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                onClick={handleCTAClick}
                href="https://pay.hotmart.com/X103208920I?checkoutMode=2&off=xa1pls5v"
                className="hotmart-fb hotmart__button-checkout inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-lg sm:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Comprar ahora
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start text-xs sm:text-sm text-gray-600 pt-1">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Método respetuoso</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sin dejar llorar</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Plan de 7 noches</span>
              </div>
            </div>
          </div>

          {/* Image - Right side on desktop */}
          <div className="max-w-md sm:max-w-xl mx-auto lg:mx-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={getR2Url('duermebebe/leticia_hidalgo_conebook.jpg')}
                alt="Dra. Leticia Hidalgo con ebook"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default Hero;
