import { Target, DollarSign, Zap, Package } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Consistencia de marca',
    description: 'Mismo look y estilo en todas tus campañas para construir reconocimiento.',
  },
  {
    icon: DollarSign,
    title: 'Ahorro significativo',
    description: 'Creatividades en minutos en lugar de semanas. Reduce costos drásticamente.',
  },
  {
    icon: Zap,
    title: 'Testing acelerado',
    description: 'Más variaciones por hora. Optimiza campañas con datos reales.',
  },
  {
    icon: Package,
    title: 'Producto destacado',
    description: 'Try-on virtual y videos con voz. Presenta productos profesionalmente.',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-xs md:text-sm font-semibold text-primary mb-2 md:mb-3">BENEFICIOS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight px-4">
            ¿Por qué Influencers IA?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Un sistema probado que reduce costos y acelera resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-5 md:p-6 lg:p-8 rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-primary/5 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1.5 md:mb-2">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Resultados esperados</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              { metric: '+50', label: 'Variaciones por hora' },
              { metric: '+30%', label: 'Mejora en CTR' },
              { metric: '100%', label: 'Control in-house' },
              { metric: '7/7', label: 'Contenido constante' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1.5 md:mb-2">{stat.metric}</div>
                <p className="text-xs md:text-sm text-gray-600 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
