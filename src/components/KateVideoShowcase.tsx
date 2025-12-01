import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { getR2Url } from '../config/r2';

export default function KateVideoShowcase() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const videos = [
    { src: getR2Url('ugc/kate/kate_2.mp4'), title: 'Kate - Contenido Fashion IA' },
    { src: getR2Url('ugc/kate/kate_6.mp4'), title: 'Kate - Lifestyle Content' },
    { src: getR2Url('ugc/kate/kate_10.mp4'), title: 'Kate - Video Profesional' },
  ];

  const nextVideo = () => {
    setIsAutoPlaying(false);
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setIsAutoPlaying(false);
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentVideo(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const carousel = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(carousel);
  }, [videos.length, isAutoPlaying]);

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(236, 72, 153) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-300/20 to-pink-300/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-sm rounded-full mb-4">
            <Play className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-semibold text-pink-700">VIDEOS EN ACCIÓN</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight px-4">
            Kate en <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Movimiento</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Contenido de video profesional generado 100% con IA. Sin sets de grabación, sin cámaras, sin actores reales.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Carrusel de Videos */}
          <div className="relative aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white group bg-black">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentVideo ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            ))}

            {/* Botón Anterior */}
            <button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              aria-label="Video anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Botón Siguiente */}
            <button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              aria-label="Video siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Título del video actual */}
            <div className="absolute top-4 left-4 right-4 z-10">
              <div className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg inline-block">
                <p className="text-sm md:text-base font-semibold">{videos[currentVideo].title}</p>
              </div>
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-3 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVideo(index)}
                className={`transition-all ${
                  index === currentVideo
                    ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                } rounded-full`}
                aria-label={`Ir a video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
