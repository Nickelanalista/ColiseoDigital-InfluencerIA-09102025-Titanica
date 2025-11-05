import { useState } from 'react';
import { Sparkles, Play } from 'lucide-react';
import { getR2Url } from '../config/r2';

export default function CamiShowcase() {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const camiImages = [
    getR2Url('ugc/cami/cami_tenista_1.png'),
    getR2Url('ugc/cami/cami_tenista_2.png'),
    getR2Url('ugc/cami/cami_tenista_3.png'),
    getR2Url('ugc/cami/cami_tenista_4.png'),
    getR2Url('ugc/cami/cami_tenista_6.png'),
    getR2Url('ugc/cami/cami_tenista_7.png'),
    getR2Url('ugc/cami/cami_tenista_8.png'),
    getR2Url('ugc/cami/cami_tenista_9.png'),
  ];

  const camiVideos = [
    getR2Url('ugc/cami/cami_tenista_vid1.mp4'),
    getR2Url('ugc/cami/cami_tenista_vid2.mp4'),
    getR2Url('ugc/cami/cami_tenista_vid3.mp4'),
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-green-50 via-white to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(16, 185, 129) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-300/20 to-teal-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-300/20 to-green-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 backdrop-blur-sm rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">NUEVA INFLUENCER</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight px-4">
            Conoce a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Cami</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Tenista profesional virtual creada 100% con IA. Genera contenido deportivo auténtico sin necesidad de fotógrafos ni locaciones
          </p>
        </div>

        {/* Grid de imágenes */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">Galería de Fotos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {camiImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 border border-green-200/40 hover:border-green-500/60 shadow-lg hover:shadow-2xl hover:shadow-green-500/20"
                onClick={() => setSelectedMedia(image)}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-green-400/0 via-teal-500/0 to-green-600/0 group-hover:from-green-400/30 group-hover:via-teal-500/20 group-hover:to-green-600/30 rounded-xl blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative w-full h-full">
                  <img
                    src={image}
                    alt={`Cami ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid de videos */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">Videos en Acción</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {camiVideos.map((video, index) => (
              <div
                key={index}
                className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 border border-green-200/40 hover:border-green-500/60 shadow-lg hover:shadow-2xl hover:shadow-green-500/20"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-green-400/0 via-teal-500/0 to-green-600/0 group-hover:from-green-400/30 group-hover:via-teal-500/20 group-hover:to-green-600/30 rounded-xl blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative w-full h-full">
                  <video
                    src={video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-black/10 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-8 h-8 text-green-600 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para ver imagen en grande */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedMedia}
              alt="Cami ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
