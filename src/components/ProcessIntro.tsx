import { BookOpen, Sparkles, Lightbulb } from 'lucide-react';
import { getR2Url } from '../config/r2';

export default function ProcessIntro() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-orange-50 via-white to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.06),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-bold text-orange-700">METODOLOGÍA PASO A PASO</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            Crea tu Propio Influencer IA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 mt-2">
              Desde Cero Hasta Profesional
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En el eBook aprenderás el proceso completo que usamos para crear Kate, Dave, James, Cami y Kloe.
            <span className="block mt-2 font-semibold text-gray-700">
              Cada paso explicado, cada herramienta detallada, cada secreto revelado.
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Mockup del eBook */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-3xl blur-2xl" />
            <div className="relative">
              <img
                src={getR2Url('promo/mockup_ebook_influencer_3.png')}
                alt="eBook - Crea tu Influencer IA"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Beneficios */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Metodología Probada</h3>
                  <p className="text-gray-600 leading-relaxed">
                    El mismo proceso que usamos para crear los influencers que viste arriba. Sin atajos, sin trucos, la fórmula real.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Paso a Paso Explicado</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cada etapa del proceso desglosada en pasos simples. Desde el primer prompt hasta la campaña completa.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">80+ Páginas de Contenido</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Guías detalladas, ejemplos reales, prompts listos para usar y workflows optimizados para cada tipo de contenido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador visual */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold rounded-full shadow-lg">
              Proceso de Creación
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
