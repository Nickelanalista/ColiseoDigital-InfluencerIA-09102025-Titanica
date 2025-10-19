import { ArrowRight } from 'lucide-react';
import { useClarity } from '../hooks/useClarity';

export default function FinalCTA() {
  const { trackEvent } = useClarity();

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
              <img
                src="/promo/mockup_ebook_influencer_2.png"
                alt="Vista previa del eBook Influencer IA"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
              Comienza tu camino con IA hoy
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              Únete a más de 1,200 emprendedores que ya están creando contenido con Influencers IA
            </p>

            <a
              href="https://pay.hotmart.com/F102324144R?checkoutMode=2"
              onClick={() => trackEvent('cta_final_click', { location: 'final_top', price: '7.99' })}
              className="hotmart-fb hotmart__button-checkout group px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-pink-700 hover:shadow-xl transition-all inline-flex items-center gap-2 text-sm md:text-base"
            >
              Comprar por USD 7.99
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-4 md:mt-6 text-xs md:text-sm text-gray-500">
              Pago único · Acceso inmediato · Uso comercial incluido
            </p>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-primary to-blue-600 rounded-xl md:rounded-2xl p-8 md:p-12 lg:p-16 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMS4xMDUuODk1LTIgMi0yczIgLjg5NSAyIDItLjg5NSAyLTIgMi0yLS44OTUtMi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 px-4">
              80+ páginas de contenido práctico
            </h3>
            <p className="text-base md:text-lg text-blue-50 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Sin relleno, sin teoría innecesaria. Solo lo que necesitas para crear tu primer influencer IA rentable
            </p>

            <a
              href="https://pay.hotmart.com/F102324144R?checkoutMode=2"
              onClick={() => trackEvent('cta_final_click', { location: 'final_bottom', price: '7.99' })}
              className="hotmart-fb hotmart__button-checkout group px-6 md:px-10 py-3 md:py-4 bg-white text-primary font-bold rounded-lg hover:shadow-xl transition-all inline-flex items-center gap-2 text-sm md:text-base"
            >
              Acceder ahora
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
