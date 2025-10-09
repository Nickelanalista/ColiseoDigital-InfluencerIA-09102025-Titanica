import { Palette, Camera, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Palette,
    title: 'Diseña tu personaje',
    description: 'Define rasgos, estilo y paleta de colores para mantener identidad consistente.',
  },
  {
    number: 2,
    icon: Camera,
    title: 'Genera contenido',
    description: 'Crea fotos, videos y talking heads con prompts optimizados y referencias.',
  },
  {
    number: 3,
    icon: TrendingUp,
    title: 'Publica y escala',
    description: 'Testea, mide métricas clave y duplica los creativos ganadores.',
  },
];

export default function Process() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs md:text-sm font-semibold text-primary mb-2 md:mb-3">METODOLOGÍA</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight px-4">
            Cómo funciona
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            Sistema paso a paso, sin experiencia previa necesaria
          </p>
        </div>

        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 md:gap-6 lg:gap-8 items-start p-5 md:p-6 lg:p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary/30 transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base md:text-lg">
                  {step.number}
                </div>
              </div>

              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                  <div className="p-1.5 md:p-2 bg-white rounded-lg border border-gray-200 flex-shrink-0">
                    <step.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center bg-green-50 border border-green-200 rounded-lg p-4 md:p-6">
          <p className="text-sm md:text-base text-green-800 font-medium">
            Resultados desde el primer día
          </p>
        </div>
      </div>
    </section>
  );
}
