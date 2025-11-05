import { ArrowRight } from 'lucide-react';
import { useClarity } from '../hooks/useClarity';

export default function SimpleCTA() {
  const { trackEvent } = useClarity();

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-orange-500 to-pink-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          ¿Listo para crear tu propio Influencer IA?
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Accede ahora a la guía completa y empieza a generar contenido profesional en 24 horas
        </p>

        <a
          href="https://pay.hotmart.com/F102324144R?checkoutMode=2"
          onClick={() => trackEvent('cta_intermediate_click', { location: 'simple_cta', price: '4.99' })}
          className="hotmart-fb hotmart__button-checkout group inline-flex items-center gap-3 px-10 md:px-12 py-4 md:py-5 bg-white text-orange-600 font-extrabold rounded-xl hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 text-lg md:text-xl"
        >
          Obtener acceso por USD 4.99
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="mt-6 text-sm text-white/80">
          ⚡ Descarga inmediata • 💳 Pago único • ✨ Garantía de 7 días
        </p>
      </div>
    </section>
  );
}
