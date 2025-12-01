import { Sparkles, ShoppingBag, Zap, TrendingUp } from 'lucide-react';
import { getR2Url } from '../config/r2';

export default function OutfitCustomization() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-4">
            <ShoppingBag className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">PASO 2</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight px-4">
            Viste a tu Influencer IA
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Cambia el outfit de tu influencer en segundos. Prueba diferentes marcas, estilos y tendencias sin necesidad de nuevas sesiones fotográficas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl md:rounded-2xl border-2 border-blue-200 p-6 md:p-8 shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                Cambio de Vestuario Instantáneo
              </h3>

              <div className="space-y-4 md:space-y-5">
                <div className="p-4 md:p-5 bg-white rounded-xl border border-blue-200 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                      <ShoppingBag className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Múltiples Estilos</h4>
                      <p className="text-xs md:text-sm text-gray-600">Casual, deportivo, elegante, streetwear - todos los estilos que necesites</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-5 bg-white rounded-xl border border-blue-200 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                      <Zap className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Marcas Premium</h4>
                      <p className="text-xs md:text-sm text-gray-600">Gap, Nike, Zara, y cualquier marca que promociones</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-5 bg-white rounded-xl border border-blue-200 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Identidad Consistente</h4>
                      <p className="text-xs md:text-sm text-gray-600">Mantiene el rostro idéntico en todos los cambios de outfit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-2xl">
              <h4 className="font-bold text-lg md:text-xl mb-4">Beneficios para tu Marca</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-200 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm md:text-base">Prueba diferentes outfits antes de producción</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-200 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm md:text-base">Ahorra miles en sesiones fotográficas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-200 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm md:text-base">Contenido infinito para redes sociales</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-white max-w-3xl mx-auto">
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative bg-gray-100 border-r-2 border-gray-200">
                    <div className="px-3 pt-2 pb-1 text-center">
                      <span className="text-xs md:text-sm font-semibold text-gray-900">Imagen Base</span>
                    </div>
                    <div className="aspect-[4/5]">
                      <img
                        src={getR2Url('ugc/kate/modelo_1.png')}
                        alt="Kate - Imagen base"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="relative bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="px-3 pt-2 pb-1 text-center">
                      <span className="text-xs md:text-sm font-semibold text-gray-900 flex items-center justify-center gap-1.5">
                        <ShoppingBag className="w-3 h-3 md:w-4 md:h-4" />
                        Con Outfit Gap
                      </span>
                    </div>
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={getR2Url('ugc/kate/gap.webp')}
                        alt="Kate - Con outfit Gap"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Infinitas Posibilidades de Contenido
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Cambia el vestuario de tu influencer cuantas veces quieras. Prueba diferentes marcas, colecciones y estilos para encontrar lo que mejor funciona con tu audiencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
