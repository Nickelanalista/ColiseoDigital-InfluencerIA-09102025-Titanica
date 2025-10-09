import { CheckCircle, FileText } from 'lucide-react';

const features = [
  'Framework de identidad consistente',
  'Guía de prompts (copiar/pegar)',
  'Plantillas de talking head',
  'Workflows de try-on virtual',
  'Métricas clave y optimización',
  'Checklist legal y buenas prácticas',
  'Uso comercial incluido',
];

const modules = [
  'Introducción al método',
  'Crear tu primer Influencer IA',
  'Vestuario y variaciones',
  'Poses y contextos',
  'Modelado de productos',
  'Upscale profesional',
  'Video desde imagen',
  'Animación avanzada',
  'Pack de prompts',
  'Checklists descargables',
];

export default function EbookContent() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs md:text-sm font-semibold text-primary mb-2 md:mb-3">CONTENIDO</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight px-4">
            Qué incluye el eBook
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            140+ páginas prácticas, sin relleno
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          <div className="bg-white p-5 md:p-6 lg:p-8 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">Incluye</h3>
            </div>
            <ul className="space-y-2 md:space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0 mt-0.5 md:mt-1" />
                  <span className="text-sm md:text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-5 md:p-6 lg:p-8 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <FileText className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">Módulos</h3>
            </div>
            <div className="space-y-1.5 md:space-y-2">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 md:gap-3 px-2.5 md:px-3 py-1.5 md:py-2 bg-gray-50 rounded-lg"
                >
                  <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-xs md:text-sm text-gray-700">{module}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
