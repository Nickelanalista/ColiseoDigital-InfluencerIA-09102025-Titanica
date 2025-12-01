import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Lo estoy malcriando si termina durmiendo en brazos?',
      answer: 'NO. Solo estás usando la herramienta que tienes. El plan busca darte alternativas, no juzgarte. El método CALMA es progresivo y respeta el ritmo de cada familia.'
    },
    {
      question: '¿Puedo hacer colecho con este método?',
      answer: 'SÍ. El método CALMA funciona igual en tu cama o en cuna. Lo importante es la rutina previa y bajar revoluciones. El objetivo es crear un ambiente propicio para el sueño, independientemente de dónde duerma el bebé.'
    },
    {
      question: '¿Qué pasa si vivimos en un espacio chico?',
      answer: 'No importa el tamaño de tu casa. Lo importante es la señal: bajar luz y ruido es posible en un monoambiente. El método se adapta a cualquier espacio.'
    },
    {
      question: '¿Qué hago si mi bebé se enferma o le salen dientes?',
      answer: 'Se suspende el plan. Se atiende, se mima y cuando sane, se retoma la rutina. No es un retroceso, es la vida. Tu bebé necesita consuelo durante la enfermedad, no entrenamiento de sueño.'
    },
    {
      question: '¿Y si me rindo a mitad de la noche?',
      answer: 'No es fracaso. Si hiciste el ritual y bajaste la luz, eso ya cuenta. Mañana se intenta de nuevo. El progreso no es lineal, y está bien tener noches difíciles.'
    },
    {
      question: '¿Desde qué edad puedo aplicar el método?',
      answer: 'El método CALMA está diseñado para bebés desde los 4 meses. Para bebés más pequeños, el libro incluye adaptaciones específicas que respetan el desarrollo de cada etapa.'
    },
    {
      question: '¿Cuánto tiempo tarda en ver resultados?',
      answer: 'Cada bebé es diferente, pero muchas familias notan mejoras en los primeros 3-4 días. El plan de 7 noches está diseñado para establecer las bases de un mejor sueño de forma progresiva.'
    },
    {
      question: '¿Este método implica dejar llorar al bebé?',
      answer: 'NO. El método CALMA es respetuoso y progresivo. Se trata de acompañar al bebé durante el proceso, no de dejarlo solo. La presencia y el contacto son fundamentales.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 px-6 py-2 rounded-full text-sm font-semibold">
              Preguntas Frecuentes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Dudas?
          </h2>
          <p className="text-xl text-gray-600">
            Aquí están las respuestas a las preguntas más frecuentes de otras mamás
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-white/50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Aún tienes dudas?</h3>
          <p className="text-gray-700 mb-6">
            El ebook incluye una sección completa de solución de problemas con casos reales
          </p>
          <a
            onClick={() => false}
            href="https://pay.hotmart.com/X103208920I?checkoutMode=2&off=xa1pls5v"
            className="hotmart-fb hotmart__button-checkout inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Ver el ebook completo
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
