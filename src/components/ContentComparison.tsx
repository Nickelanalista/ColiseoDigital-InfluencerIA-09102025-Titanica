import { X, Check, ArrowRight } from 'lucide-react';

export default function ContentComparison() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.04),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight px-4">
            Dale vida a tus productos y{' '}
            <span className="text-primary">mejora las ventas</span> de tu Negocio
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Transforma fotografías simples en contenido profesional que conecta con tu audiencia
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-8 max-w-5xl mx-auto relative">
          {/* Flecha en el centro - Solo visible en móvil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 md:hidden">
            <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-2 rounded-full shadow-xl">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Foto estática - Antes */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl blur-xl opacity-60" />
            <div className="relative bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-2 border-red-200">
              {/* Badge con X */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10">
                <div className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-2 bg-red-500 text-white rounded-lg shadow-lg">
                  <X className="w-3 h-3 md:w-5 md:h-5" />
                  <span className="text-[10px] md:text-sm font-bold hidden sm:inline">Contenido Básico</span>
                </div>
              </div>

              {/* Imagen del producto */}
              <div className="aspect-square relative">
                <img
                  src="/promo/stanley_vaso.png"
                  alt="Fotografía estática de producto"
                  className="w-full h-full object-contain p-4 md:p-8 bg-gray-50"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />
              </div>

              {/* Descripción - Solo visible en desktop */}
              <div className="hidden md:block p-4 bg-gray-50 border-t border-red-100">
                <p className="text-sm text-gray-600 text-center">
                  Solo producto, sin contexto ni conexión emocional
                </p>
              </div>
            </div>
          </div>

          {/* Video con influencer - Después */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-green-500/20 to-emerald-600/10 rounded-2xl blur-xl opacity-60" />
            <div className="relative bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-2 border-green-200">
              {/* Badge con Check */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10">
                <div className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 md:py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-lg">
                  <Check className="w-3 h-3 md:w-5 md:h-5" />
                  <span className="text-[10px] md:text-sm font-bold hidden sm:inline">Contenido Pro</span>
                </div>
              </div>

              {/* Video con autoplay */}
              <div className="aspect-square relative bg-gray-900">
                <video
                  src="/promo/james_vid_2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent pointer-events-none" />
              </div>

              {/* Descripción - Solo visible en desktop */}
              <div className="hidden md:block p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-t border-green-100">
                <p className="text-sm text-gray-700 text-center font-medium">
                  Influencer real mostrando el producto en uso
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA sutil mejorado */}
        <div className="text-center mt-10 md:mt-14">
          <div className="inline-block">
            <p className="text-base md:text-lg text-gray-700 font-semibold mb-2">
              Crea contenido que <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent font-bold">convierte y conecta</span> con tu audiencia
            </p>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-orange-500 to-pink-600 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
