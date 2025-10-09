import { Play, Plus, ArrowRight, Coffee, Package, CheckCircle, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

const videoExamples = [
  { video: '/ugc/james/james_stanley_1.mp4', title: 'Presentación natural' },
  { video: '/ugc/james/james_stanley_2.mp4', title: 'Enfoque en producto' },
  { video: '/ugc/james/james_stanley_3.mp4', title: 'Contexto lifestyle' },
  { video: '/ugc/james/james_stanley_4.mp4', title: 'Demostración de uso' },
];

const transformationSteps = [
  { img: '/ugc/james/james_cafe.jpg', label: 'Foto Original', desc: 'James con café' },
  { img: '/ugc/james/stanley_vaso.png', label: 'Producto', desc: 'Botella Stanley' },
  { img: '/ugc/james/james_botella_2.png', label: 'Integración', desc: 'Resultado final' },
];

const additionalVariations = [
  { img: '/ugc/james/james_botella_3.png', location: 'Ciudad' },
  { img: '/ugc/james/james_botella_4.png', location: 'Exterior' },
  { img: '/ugc/james/james_botella_5.png', location: 'Lifestyle' },
];

const otherProducts = [
  { img: '/ugc/james/chaqueta_northface.png', product: 'The North Face', desc: 'Chaqueta outdoor' },
  { img: '/ugc/james/zapatillas nike.png', product: 'Nike', desc: 'Calzado deportivo' },
];

export default function ProductIntegration() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (isPlaying[index]) {
      video.pause();
      setIsPlaying({ ...isPlaying, [index]: false });
    } else {
      Object.keys(videoRefs.current).forEach((key) => {
        const num = parseInt(key);
        if (videoRefs.current[num] && num !== index) {
          videoRefs.current[num]?.pause();
        }
      });
      video.play();
      setIsPlaying({ ...isPlaying, [index]: true });
      setActiveVideo(index);
    }
  };

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

          <div className="grid md:grid-cols-7 gap-6 md:gap-4 items-center mb-8">
            {transformationSteps.map((step, index) => (
              <>
                <div key={step.label} className="md:col-span-2 relative group">
                  <div className={`absolute -inset-3 rounded-3xl blur-xl opacity-50 transition-opacity ${
                    index === 0 ? 'bg-gradient-to-br from-blue-200 to-blue-300' :
                    index === 1 ? 'bg-gradient-to-br from-orange-300 to-red-300' :
                    'bg-gradient-to-br from-green-300 to-emerald-300 group-hover:opacity-75'
                  }`} />
                  <div className={`relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 ${
                    index === 0 ? 'border-blue-300' :
                    index === 1 ? 'border-orange-300' :
                    'border-green-400'
                  }`}>
                    <div className="absolute top-3 left-3 z-10">
                      <div className={`backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold ${
                        index === 0 ? 'bg-blue-600' :
                        index === 1 ? 'bg-orange-600' :
                        'bg-green-600'
                      }`}>
                        {step.label}
                      </div>
                    </div>
                    <div className={`aspect-[3/4] ${index === 1 ? 'bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-6' : ''}`}>
                      <img
                        src={step.img}
                        alt={step.desc}
                        className={`w-full h-full object-cover ${index === 1 ? 'w-auto h-auto max-h-[80%]' : ''}`}
                      />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg p-2">
                      <p className="text-xs font-bold text-gray-900 text-center">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {index < transformationSteps.length - 1 && (
                  <div key={`arrow-${index}`} className="md:col-span-1 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="hidden md:block">
                        {index === 0 ? (
                          <Plus className="w-8 h-8 text-orange-500" strokeWidth={3} />
                        ) : (
                          <ArrowRight className="w-8 h-8 text-green-500" strokeWidth={3} />
                        )}
                      </div>
                      <div className="md:hidden">
                        {index === 0 ? (
                          <Plus className="w-6 h-6 text-orange-500 rotate-90" strokeWidth={3} />
                        ) : (
                          <ArrowRight className="w-6 h-6 text-green-500 rotate-90" strokeWidth={3} />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {videoExamples.map((example, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />

                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 group-hover:shadow-2xl transition-all">
                  <div
                    className="aspect-[9/16] relative cursor-pointer"
                    onClick={() => handleVideoClick(index)}
                  >
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={example.video}
                      className="w-full h-full object-cover"
                      loop
                      playsInline
                      preload="metadata"
                    />

                    {!isPlaying[index] && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <div className="bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-primary" fill="currentColor" />
                        </div>
                      </div>
                    )}

                    {activeVideo === index && isPlaying[index] && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full" />
                        EN VIVO
                      </div>
                    )}
                  </div>

                  <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <p className="text-sm font-bold text-gray-900 text-center">{example.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <p className="text-sm font-semibold text-blue-900">Toca cualquier video para reproducir</p>
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

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Otros productos integrados con James
          </h3>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {otherProducts.map((product, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

                <div className="relative bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={product.img}
                      alt={`James con ${product.product}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                        <p className="text-lg font-bold text-gray-900 mb-1">{product.product}</p>
                        <p className="text-sm text-gray-600">{product.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8">
            <div className="text-center max-w-3xl mx-auto">
              <Package className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Cualquier producto, cualquier marca
              </h4>
              <p className="text-base text-gray-700 leading-relaxed">
                No hay límites. Desde ropa deportiva hasta tecnología, accesorios, alimentos, bebidas o productos de belleza.
                Tu influencer puede promocionar todo manteniendo naturalidad y profesionalismo en cada imagen y video.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
