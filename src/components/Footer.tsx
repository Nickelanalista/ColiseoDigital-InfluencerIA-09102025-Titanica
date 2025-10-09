import { Mail, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold">ColiseoDigital</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La guía definitiva para crear influencers IA consistentes y profesionales.
              De cero a contenido viral en 24 horas.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-6">
              <div className="flex -space-x-3 mb-3">
                <img src="/ugc/kate/kate_fremte.jpg" alt="Kate" className="w-12 h-12 rounded-full border-2 border-gray-800 object-cover" />
                <img src="/ugc/dave/dave_ai.png" alt="Dave" className="w-12 h-12 rounded-full border-2 border-gray-800 object-cover" />
                <img src="/ugc/james/james_previo_1.png" alt="James" className="w-12 h-12 rounded-full border-2 border-gray-800 object-cover" />
                <img src="/ugc/kloe/kloe.png" alt="Kloe" className="w-12 h-12 rounded-full border-2 border-gray-800 object-cover" />
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-bold text-white">Kate, Dave, James y Kloe</span> - Creados 100% con las técnicas del eBook
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>en Chile</span>
            </div>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contenido</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    140+ páginas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    Pack de prompts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    Videos tutoriales
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    Uso comercial
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/terminos-y-condiciones" className="text-gray-400 hover:text-primary transition-colors">
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a href="/politica-de-privacidad" className="text-gray-400 hover:text-primary transition-colors">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="/politica-de-reembolso" className="text-gray-400 hover:text-primary transition-colors">
                    Política de reembolso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contacto</h4>
              <a
                href="mailto:hola@coliseodigital.cl"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm group"
              >
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hola@coliseodigital.cl</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} ColiseoDigital. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>1,200+ compradores</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span>4.9/5 valoración</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
