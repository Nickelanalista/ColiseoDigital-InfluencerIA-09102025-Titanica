import { useState, useEffect } from 'react';
import { getR2Url } from '../../../config/r2';

function Pricing() {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutos en segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section id="precio" className="py-12 md:py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Consigue todo el contenido de cómo lograr que tu niño duerma
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Acceso inmediato al ebook completo con el Método CALMA, plan de 7 noches y herramientas descargables
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-md mx-auto mb-6 md:mb-8 bg-red-500 text-white py-3 md:py-4 px-4 md:px-6 rounded-full text-center shadow-lg">
          <p className="text-xs md:text-sm font-semibold mb-1">¡OFERTA ESPECIAL TERMINA EN!</p>
          <div className="text-2xl md:text-3xl font-bold">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Image */}
              <div className="relative h-48 md:h-auto">
                <img
                  src={getR2Url('duermebebe/portada_ebook_suenobebe.jpg')}
                  alt="Ebook Sueño de Bebé"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Discount Badge */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-red-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold shadow-lg text-sm md:text-base">
                  -59% OFF
                </div>
              </div>

              {/* Right Side - Pricing Details */}
              <div className="p-6 md:p-10 lg:p-12">
                <div className="mb-5 md:mb-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Sueño de Bebé, Descanso de Mamá</h3>
                  <p className="text-sm md:text-base text-gray-600">Ebook Digital Completo</p>
                </div>

                {/* What's Included */}
                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base text-gray-700">Método CALMA completo explicado paso a paso</span>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base text-gray-700">Plan detallado de 7 noches con guía diaria</span>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base text-gray-700">Hojas de seguimiento y plantillas descargables</span>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base text-gray-700">Semáforo emocional para autocuidado materno</span>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base text-gray-700">Acceso inmediato y de por vida</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 md:mb-8 bg-gradient-to-r from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl">
                  <div className="flex items-baseline gap-2 md:gap-3 mb-2">
                    <span className="text-xl md:text-2xl text-gray-500 line-through">$11.90</span>
                    <span className="text-xs md:text-sm bg-red-500 text-white px-2 py-1 rounded font-semibold">59% OFF</span>
                  </div>
                  <div className="flex items-baseline gap-2 md:gap-3">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">$4.90</span>
                    <div>
                      <span className="text-lg md:text-xl font-bold text-gray-700">USD</span>
                      <p className="text-xs md:text-sm text-gray-600">Pago único</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-purple-600 font-semibold mt-2">
                    ¡Precio especial por tiempo limitado!
                  </p>
                </div>

                {/* CTA Button - Hotmart Widget */}
                <a
                  onClick={() => false}
                  href="https://pay.hotmart.com/X103208920I?checkoutMode=2&off=xa1pls5v"
                  className="hotmart-fb hotmart__button-checkout block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-3 md:mb-4 shadow-lg"
                >
                  Comprar ahora
                </a>

                <p className="text-center text-xs md:text-sm text-gray-600">
                  Pago seguro procesado por Hotmart
                </p>
              </div>
            </div>
          </div>

          {/* Guarantee Badge */}
          <div className="mt-8 md:mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 md:gap-4 bg-white px-6 md:px-8 py-5 md:py-6 rounded-xl md:rounded-2xl shadow-lg max-w-lg">
              <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Garantía de 7 días</h4>
                <p className="text-sm md:text-base text-gray-600">Si no ves resultados, te devolvemos tu dinero completo sin preguntas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hotmart Widget Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function importHotmart(){
              var imported = document.createElement('script');
              imported.src = 'https://static.hotmart.com/checkout/widget.min.js';
              document.head.appendChild(imported);
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.type = 'text/css';
              link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
              document.head.appendChild(link);
            }
            importHotmart();
          `
        }}
      />
    </section>
  );
}

export default Pricing;
