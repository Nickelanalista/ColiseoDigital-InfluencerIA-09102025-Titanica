import React from 'react';
import { Play, Plus, ArrowRight, Coffee, Package, CheckCircle, Sparkles } from 'lucide-react';
import { getR2Url } from '../config/r2';

const videoExamples = [
  { video: getR2Url('ugc/james/james_stanley_5.mp4'), title: 'Presentación natural' },
  { video: getR2Url('ugc/james/james_stanley_4.mp4'), title: 'Enfoque en producto' },
  { video: getR2Url('ugc/james/james_stanley_3.mp4'), title: 'Contexto lifestyle' },
  { video: getR2Url('ugc/james/james_stanley_1.mp4'), title: 'Demostración de uso' },
];

const transformationSteps = [
  { img: getR2Url('ugc/james/james_cafe.jpg'), label: 'Foto Original', desc: 'James con café' },
  { img: getR2Url('ugc/james/stanley_vaso.png'), label: 'Producto', desc: 'Botella Stanley' },
  { img: getR2Url('ugc/james/james_botella_2.png'), label: 'Integración', desc: 'Resultado final' },
];

const additionalVariations = [
  { img: getR2Url('ugc/james/james_botella_3.png'), location: 'Ciudad' },
  { img: getR2Url('ugc/james/james_botella_4.png'), location: 'Exterior' },
  { img: getR2Url('ugc/james/james_botella_5.png'), location: 'Lifestyle' },
];

export default function ProductIntegration() {

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-b from-white to-orange-50/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(249, 115, 22) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-4">
            <Package className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-600">INTEGRACIÓN DE PRODUCTOS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight px-4">
            Coloca productos en manos de tu influencer
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Transforma cualquier objeto en contenido promocional profesional. De una foto con café a una campaña completa de Stanley, todo en minutos.
          </p>
        </div>

        <div className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Proceso de transformación
          </h3>

          <div className="grid md:grid-cols-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 md:gap-4 items-center mb-8 max-w-6xl mx-auto">
            {transformationSteps.map((step, index) => (
              <React.Fragment key={step.label}>
                <div className="relative">
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
                    <div className="bg-orange-500 text-white text-center font-bold text-sm md:text-base py-2">
                      {step.label}
                    </div>
                    <div className="p-2 bg-white">
                      <div className="aspect-[3/4] rounded-xl overflow-hidden border-2 border-gray-300 flex items-center justify-center bg-gray-50">
                        <img
                          src={step.img}
                          alt={step.desc}
                          className={`${index === 1 ? 'w-auto h-auto max-h-[75%] object-contain' : 'w-full h-full object-cover'}`}
                        />
                      </div>
                    </div>
                    <div className="px-3 pb-3">
                      <p className="text-xs font-bold text-gray-900 text-center">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {index < transformationSteps.length - 1 && (
                  <div key={`arrow-${index}`} className="flex items-center justify-center md:px-2">
                    <div className="flex flex-col items-center gap-2">
                      <div className="hidden lg:block">
                        {index === 0 ? (
                          <Plus className="w-8 h-8 text-orange-500" strokeWidth={3} />
                        ) : (
                          <ArrowRight className="w-8 h-8 text-orange-500" strokeWidth={3} />
                        )}
                      </div>
                      <div className="lg:hidden">
                        {index === 0 ? (
                          <Plus className="w-6 h-6 text-orange-500 rotate-90" strokeWidth={3} />
                        ) : (
                          <ArrowRight className="w-6 h-6 text-orange-500 rotate-90" strokeWidth={3} />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 md:p-8 border border-orange-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-100 rounded-xl flex-shrink-0">
                <Coffee className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Cómo funciona la integración de productos</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Foto base:</strong> Comienza con cualquier foto de tu influencer (aquí James con un café)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Producto:</strong> Adjunta la imagen del producto que quieres promocionar (botella Stanley)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Generación:</strong> La IA integra naturalmente el producto en manos del influencer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Resultado:</strong> Contenido promocional profesional listo para publicar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-3">
              <Play className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">CONTENIDO EN VIDEO</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              De foto a video dinámico con el producto
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Genera videos profesionales mostrando el producto en acción. Aumenta engagement y conversión con contenido en movimiento.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {videoExamples.map((example, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border-2 border-orange-200 group-hover:shadow-xl transition-all">
                  <div className="px-2 pt-2 pb-1 bg-orange-50 text-center border-b border-orange-100">
                    <p className="text-xs md:text-sm font-bold text-gray-900">{example.title}</p>
                  </div>
                  <div className="aspect-[9/16] relative overflow-hidden">
                    <video
                      src={example.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <p className="text-sm font-semibold text-blue-900">Videos generados automáticamente</p>
            </div>
            <p className="text-sm text-gray-700">
              Genera variaciones infinitas con diferentes ángulos, contextos y estilos de presentación
            </p>
          </div>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Variaciones con el mismo producto en diferentes contextos
          </h3>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {additionalVariations.map((variation, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 group-hover:shadow-2xl transition-all group-hover:scale-[1.02]">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={variation.img}
                      alt={`James con Stanley - ${variation.location}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-bold text-gray-900 text-center">Contexto: {variation.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-red-500 rounded-xl p-6 md:p-8 text-center text-white">
            <p className="text-xl md:text-2xl font-bold mb-2">
              Mismo influencer + Mismo producto = Infinitas campañas
            </p>
            <p className="text-sm md:text-base text-white/90">
              Cambia el contexto, la ubicación y el estilo sin perder la identidad ni el producto
            </p>
          </div>
        </div>


      </div>
    </section>
  );
}
