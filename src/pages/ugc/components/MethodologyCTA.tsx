import { ArrowRight } from 'lucide-react';
import { useClarity } from '../../../hooks/useClarity';
import { getR2Url } from '../../../config/r2';

export default function MethodologyCTA() {
  const { trackEvent } = useClarity();

  return (
    <section className="py-10 md:py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-xl border border-gray-200 p-5 md:p-6 flex flex-col md:grid md:grid-cols-2 md:items-center gap-4 md:gap-6">
          <div className="text-center md:text-left order-1">
            <p className="text-[11px] md:text-xs font-semibold text-gray-700 tracking-wide mb-1">METODOLOGÍA PASO A PASO</p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Guía simple y directa</h3>
            <p className="text-sm md:text-base text-gray-600 mt-1">Sigue los pasos y crea tu Influencer IA sin perder tiempo.</p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-3">
              <span className="text-xs md:text-sm text-red-600 line-through">USD 39</span>
              <span className="text-base md:text-xl font-extrabold text-primary">USD 4.99</span>
            </div>
            <a
              href="https://pay.hotmart.com/F102324144R?checkoutMode=2"
              onClick={() => trackEvent('cta_intermediate_click', { location: 'methodology_simple', price: '4.99' })}
              className="hotmart-fb hotmart__button-checkout inline-flex items-center gap-2 px-5 md:px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-pink-700 transition-all shadow-md text-sm md:text-base mt-4"
            >
              Comprar · USD 4.99
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="order-2">
            <img
              src={getR2Url('promo/mockup_ebook_influencer_3.png')}
              alt="Mockup del eBook Influencer IA"
              className="w-40 md:w-56 lg:w-64 h-auto mx-auto rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
