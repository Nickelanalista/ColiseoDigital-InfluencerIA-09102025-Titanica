import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useClarity } from '../hooks/useClarity';
import { useScrollTracking } from '../hooks/useScrollTracking';

const faqs = [
  {
    question: '¿Necesito saber programar?',
    answer: 'No. Todo está diseñado paso a paso con plantillas y prompts listos para copiar y pegar.',
  },
  {
    question: '¿Funciona para mi industria?',
    answer: 'Sí. Incluye ejemplos para e-commerce, servicios, restaurantes y marca personal.',
  },
  {
    question: '¿Qué herramientas necesito?',
    answer: 'Te mostramos opciones gratuitas y de pago para cada paso del proceso.',
  },
  {
    question: '¿Puedo usar las creatividades en ads?',
    answer: 'Sí, uso comercial incluido. Revisa las políticas de cada plataforma publicitaria.',
  },
  {
    question: '¿Hay actualizaciones?',
    answer: 'Incluye actualizaciones menores del PDF sin costo adicional.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { trackEvent } = useClarity();
  const sectionRef = useScrollTracking({ eventName: 'scroll_to_faq', threshold: 0.3 });

  const handleToggle = (index: number) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    
    if (newIndex !== null) {
      trackEvent('faq_opened', { question: faqs[index].question.substring(0, 50) });
    }
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs md:text-sm font-semibold text-primary mb-2 md:mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight px-4">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-primary/30 transition-all"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full p-4 md:p-5 lg:p-6 flex items-center justify-between text-left gap-3 min-h-[44px]"
              >
                <span className="text-sm md:text-base font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 md:px-5 lg:px-6 pb-4 md:pb-5 lg:pb-6">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
