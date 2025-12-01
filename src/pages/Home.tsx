import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, Zap, Shield, Download } from 'lucide-react';
import Footer from '../components/Footer';
import { getR2Url } from '../config/r2';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
  badge?: string;
  color: string;
  features: string[];
}

const courses: Course[] = [
  {
    id: 'ugc',
    title: 'Influencer IA',
    subtitle: 'Tu Identidad Digital, Creada con IA',
    description: 'Aprende a crear contenido de influencer profesional usando inteligencia artificial. Desde la creación de tu avatar hasta contenido UGC de alta calidad.',
    image: getR2Url('promo/Portada Book Influencer IA.jpg'),
    url: '/ugc',
    badge: '⭐ Bestseller',
    color: 'from-purple-600 to-pink-600',
    features: ['80+ páginas', 'Pack de prompts', 'Casos reales']
  },
  {
    id: 'metodocalma',
    title: 'Método CALMA',
    subtitle: 'Por la Dra. Leticia Hidalgo',
    description: 'Guía práctica y respetuosa para mejorar el sueño de tu bebé sin lágrimas. Método progresivo validado por especialistas que prioriza tu salud mental.',
    image: getR2Url('duermebebe/portada_ebook_suenobebe.jpg'),
    url: '/metodocalma',
    badge: '✨ Nuevo',
    color: 'from-blue-500 to-purple-500',
    features: ['Plan 7 noches', 'Sin lágrimas', 'Método validado']
  }
];

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Fondo con gradientes sutiles */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.06),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
          {/* Logo - Solo visible en desktop */}
          <div className="hidden lg:flex justify-center mb-12">
            <img
              src="/material/logo_coliseo.png"
              alt="Coliseo Digital"
              className="h-16 w-auto"
            />
          </div>

          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-100 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-gray-700 font-semibold">Conocimiento Digital de Expertos</span>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Transforma tu vida con
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mt-2">
                eBooks Especializados
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Aprende de expertos con guías prácticas diseñadas para obtener resultados reales. Acceso inmediato, sin complicaciones.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-600 mb-12">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Contenido verificado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Acceso instantáneo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Garantía 7 días</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Nuestros <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">eBooks</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Selecciona el curso que mejor se adapte a tus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={course.url}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`bg-gradient-to-r ${course.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                  {course.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5`} />
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                  {course.title}
                </h3>
                <p className="text-base md:text-lg font-semibold text-gray-500 mb-4">
                  {course.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className={`bg-gradient-to-r ${course.color} text-white px-6 py-3 rounded-xl font-bold text-center group-hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}>
                  <span>Ver eBook</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              ¿Por qué <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Coliseo Digital</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Más que eBooks, una experiencia de aprendizaje diseñada para el éxito
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contenido Verificado</h3>
              <p className="text-gray-600 leading-relaxed">Todos nuestros eBooks están creados y revisados por expertos en cada área</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Acceso Inmediato</h3>
              <p className="text-gray-600 leading-relaxed">Descarga tu eBook al instante y comienza a aprender desde hoy mismo</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl border border-orange-100">
              <div className="bg-gradient-to-br from-orange-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garantía de 7 días</h3>
              <p className="text-gray-600 leading-relaxed">Si no estás satisfecho, te devolvemos tu dinero sin preguntas</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
