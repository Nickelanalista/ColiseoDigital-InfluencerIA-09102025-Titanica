import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-primary to-blue-600 rounded-xl md:rounded-2xl p-8 md:p-12 lg:p-16 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMS4xMDUuODk1LTIgMi0yczIgLjg5NSAyIDItLjg5NSAyLTIgMi0yLS44OTUtMi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">
              Comienza tu camino con IA hoy
            </h2>
            <p className="text-base md:text-lg text-blue-50 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Únete a más de 1,200 emprendedores que ya están creando contenido con Influencers IA
            </p>

            <a
              href="https://pay.hotmart.com/F102324144R"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 md:px-10 py-3 md:py-4 bg-white text-primary font-semibold rounded-lg hover:shadow-xl transition-all inline-flex items-center gap-2 text-sm md:text-base"
            >
              Comprar por USD 14.99
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <p className="mt-4 md:mt-6 text-xs md:text-sm text-blue-100 px-4">
              Pago único · Acceso inmediato · Uso comercial incluido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
