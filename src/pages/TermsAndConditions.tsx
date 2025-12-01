import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Términos y Condiciones
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al acceder y utilizar este sitio web y adquirir nuestros productos digitales, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción del Producto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El eBook "Crea tu Primer Influencer IA para tu Negocio" es un producto digital descargable que proporciona información, técnicas y metodologías para la creación de contenido mediante inteligencia artificial.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                El producto incluye:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Más de 140 páginas de contenido práctico</li>
                <li>Pack inicial de prompts optimizados</li>
                <li>Casos de estudio y workflows</li>
                <li>Acceso a actualizaciones futuras</li>
                <li>Licencia de uso comercial</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Proceso de Compra y Pago</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las transacciones se procesan de manera segura a través de la plataforma Hotmart. Al realizar una compra, usted acepta proporcionar información precisa y completa.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                El precio del producto se muestra claramente en dólares estadounidenses (USD) y es un pago único sin suscripciones recurrentes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Entrega del Producto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Una vez confirmado el pago, el acceso al producto digital se proporcionará de manera inmediata a través de la plataforma Hotmart. Recibirá un correo electrónico con las instrucciones de acceso.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Es responsabilidad del usuario proporcionar una dirección de correo electrónico válida y verificar su bandeja de entrada, incluyendo la carpeta de spam.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Licencia de Uso</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al adquirir este producto, se le otorga una licencia personal e intransferible para:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Utilizar el contenido para fines personales y comerciales</li>
                <li>Crear contenido basado en las técnicas enseñadas</li>
                <li>Aplicar los conocimientos adquiridos en sus proyectos</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Queda estrictamente prohibido:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Distribuir, compartir o revender el producto</li>
                <li>Reproducir, copiar o duplicar el contenido del eBook</li>
                <li>Reclamar autoría del contenido</li>
                <li>Utilizar el material para crear productos competidores</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Garantía de Satisfacción</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ofrecemos una garantía de satisfacción según los términos establecidos por Hotmart. Para más detalles, consulte nuestra Política de Reembolso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El contenido proporcionado tiene fines educativos e informativos. No garantizamos resultados específicos, ya que estos dependen del esfuerzo individual, conocimientos previos y aplicación de las técnicas enseñadas.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                No somos responsables de:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Resultados obtenidos mediante la aplicación de las técnicas</li>
                <li>Problemas técnicos con herramientas de terceros mencionadas</li>
                <li>Cambios en las plataformas o servicios de IA recomendados</li>
                <li>Uso indebido del contenido del producto</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Propiedad Intelectual</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todo el contenido del eBook, incluyendo textos, imágenes, diseños y materiales complementarios, está protegido por derechos de autor y es propiedad exclusiva de ColiseoDigital.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Actualizaciones y Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos reservamos el derecho de actualizar el contenido del producto para mejorar la experiencia del usuario. Los compradores tendrán acceso gratuito a las actualizaciones.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                También nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Ley Aplicable</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estos Términos y Condiciones se rigen por las leyes de Chile. Cualquier disputa será resuelta en los tribunales competentes de Chile.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para cualquier consulta sobre estos Términos y Condiciones, puede contactarnos en:
              </p>
              <p className="text-gray-700 leading-relaxed">
                Email: <a href="mailto:hola@coliseodigital.cl" className="text-primary hover:underline">hola@coliseodigital.cl</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
