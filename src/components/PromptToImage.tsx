import { Copy, Sparkles, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const promptExample = `Influencer profesional femenina, 25 años, textura de piel natural y realista, iluminación suave de estudio, fondo blanco minimalista, mirando a la cámara, sonrisa sutil y natural, outfit casual moderno, cabello largo castaño, maquillaje natural, fotografía de alta calidad, 8k, ultra detallado`;

const promptHighlights = [
  { text: 'textura de piel natural', position: { top: '15%', left: '20%' } },
  { text: 'iluminación suave', position: { top: '25%', right: '15%' } },
  { text: 'sonrisa sutil', position: { top: '45%', left: '15%' } },
  { text: 'outfit casual moderno', position: { bottom: '25%', right: '20%' } },
];

export default function PromptToImage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promptExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-blue-50/50 via-white to-orange-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-semibold text-primary">PASO 1</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight px-4">
            Crear desde Prompt
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Un prompt bien estructurado es la clave para generar influencers IA con identidad consistente y aspecto profesional
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-gray-400 text-xs md:text-sm font-mono">prompt.txt</span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white text-xs md:text-sm"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span className="hidden sm:inline">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span className="hidden sm:inline">Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-4 md:p-6 bg-gray-50">
                <pre className="text-xs md:text-sm text-gray-700 leading-relaxed font-mono whitespace-pre-wrap">
                  {promptExample}
                </pre>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 md:p-6">
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                Elementos clave del prompt
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Descripción física detallada:</strong> edad, rasgos faciales, piel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Iluminación específica:</strong> define el mood y profesionalismo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Contexto y pose:</strong> ambiente, dirección de mirada, expresión</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Calidad técnica:</strong> 8k, ultra detallado, fotografía profesional</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative mt-6 lg:mt-0">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-3xl blur-2xl opacity-50" />

            <div className="relative bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="aspect-[3/4] relative group">
                <img
                  src="/ugc/kate/modelo_formal_01.jpg"
                  alt="Kate - Influencer IA generada con prompt"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {promptHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                    style={highlight.position}
                  >
                    <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-200">
                      <span className="text-xs font-medium text-gray-900 whitespace-nowrap">
                        {highlight.text}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-200 shadow-lg">
                  <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs md:text-sm font-semibold text-gray-900">Generado con IA</span>
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-600">
                    Resultado: imagen lista para usar en redes sociales y campañas
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-xl border-2 md:border-4 border-white">
              <p className="text-[10px] md:text-xs font-medium mb-0.5 md:mb-1">Tiempo de generación</p>
              <p className="text-xl md:text-2xl font-bold">30 seg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
