import { Mail, Download, Rocket, BookOpen, Zap, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Mail,
    title: 'Acceso inmediato por correo',
    description: 'Tras tu compra, recibirás un email con el enlace de descarga. Sin esperas, sin complicaciones.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BookOpen,
    title: 'Manual paso a paso completo',
    description: '80+ páginas que te guían desde cero hasta crear tu primer influencer IA profesional.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Pack de prompts listos',
    description: 'Templates probados que puedes copiar y pegar. Empieza a generar contenido en minutos.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Rocket,
    title: 'Todo para comenzar hoy',
    description: 'Workflows, checklists y casos de uso reales. No necesitas experiencia técnica previa.',
    color: 'from-green-500 to-emerald-500',
  },
];

const includes = [
  'Guía completa de creación de influencer IA',
  'Métodos para generar contenido ilimitado',
  'Integración de productos y marcas',
  'Técnicas de video y animación',
  'Casos de uso y aplicaciones comerciales',
  'Upscaling y mejora de calidad',
  'Plantillas y prompts descargables',
  'Uso comercial sin restricciones',
];

export default function WhatYouGet() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-4">
            <Download className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">QUÉ RECIBIRÁS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight px-4">
            Todo lo que necesitas para empezar
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Tu compra incluye acceso completo al eBook con el manual paso a paso para crear tu primer influencer IA y generar contenido ilimitado para tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border-2 border-gray-100 hover:border-primary/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <div className={`p-3 md:p-4 bg-gradient-to-br ${benefit.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                  <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border-2 border-primary/20 p-6 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Manual paso a paso incluido
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Aprende a crear tu influencer IA desde cero y genera contenido profesional ilimitado para promocionar cualquier producto o servicio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {includes.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 md:p-4 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-lg hover:shadow-md transition-all"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full mb-3">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Entrega inmediata</h4>
                <p className="text-sm text-gray-600">Acceso en tu email en minutos</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-3">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Comienza hoy</h4>
                <p className="text-sm text-gray-600">Todo listo para empezar ahora</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-3">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Contenido ilimitado</h4>
                <p className="text-sm text-gray-600">Genera cuanto necesites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
