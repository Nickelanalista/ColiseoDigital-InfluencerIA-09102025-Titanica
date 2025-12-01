import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
            Política de Privacidad
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En ColiseoDigital, nos comprometemos a proteger su privacidad y garantizar la seguridad de su información personal. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos su información cuando utiliza nuestro sitio web y adquiere nuestros productos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información que Recopilamos</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.1 Información Personal</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cuando realiza una compra en nuestro sitio, podemos recopilar la siguiente información:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Información de pago (procesada de manera segura por Hotmart)</li>
                <li>Dirección IP</li>
                <li>Datos de navegación y uso del sitio web</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2.2 Información de Uso</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Recopilamos automáticamente información sobre cómo interactúa con nuestro sitio web, incluyendo:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Páginas visitadas</li>
                <li>Tiempo de permanencia en el sitio</li>
                <li>Enlaces en los que hace clic</li>
                <li>Tipo de navegador y dispositivo utilizado</li>
                <li>Sistema operativo</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cómo Utilizamos su Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Procesar sus pedidos y entregarle el producto adquirido</li>
                <li>Enviar confirmaciones de compra y actualizaciones del producto</li>
                <li>Proporcionar soporte al cliente</li>
                <li>Mejorar nuestro sitio web y servicios</li>
                <li>Analizar tendencias y comportamiento de los usuarios</li>
                <li>Prevenir fraudes y garantizar la seguridad</li>
                <li>Cumplir con obligaciones legales</li>
                <li>Enviar información sobre actualizaciones del producto (puede darse de baja en cualquier momento)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base Legal para el Procesamiento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Procesamos su información personal basándonos en:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Ejecución del contrato:</strong> Para procesar su compra y entregar el producto</li>
                <li><strong>Intereses legítimos:</strong> Para mejorar nuestros servicios y prevenir fraudes</li>
                <li><strong>Consentimiento:</strong> Para enviarle comunicaciones de marketing (puede retirar su consentimiento en cualquier momento)</li>
                <li><strong>Cumplimiento legal:</strong> Para cumplir con obligaciones legales y regulatorias</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Compartir Información con Terceros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No vendemos ni alquilamos su información personal. Compartimos información únicamente con:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.1 Proveedores de Servicios</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Hotmart:</strong> Plataforma de procesamiento de pagos y entrega de productos digitales</li>
                <li><strong>Servicios de análisis:</strong> Para comprender el uso del sitio web</li>
                <li><strong>Proveedores de hosting:</strong> Para alojar nuestro sitio web</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5.2 Requisitos Legales</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos divulgar su información si es requerido por ley o en respuesta a procesos legales válidos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies y Tecnologías Similares</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos cookies y tecnologías similares para:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Recordar sus preferencias</li>
                <li>Comprender cómo utiliza nuestro sitio</li>
                <li>Mejorar su experiencia de navegación</li>
                <li>Realizar análisis estadísticos</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Seguridad de la Información</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, pérdida, destrucción o alteración. Esto incluye:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Cifrado SSL/TLS para transmisión de datos</li>
                <li>Almacenamiento seguro de información</li>
                <li>Acceso limitado a información personal</li>
                <li>Revisiones regulares de seguridad</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sin embargo, ningún método de transmisión por internet es 100% seguro. Hacemos todo lo posible para proteger su información, pero no podemos garantizar su seguridad absoluta.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Retención de Datos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sus Derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Acceder:</strong> Solicitar una copia de su información personal</li>
                <li><strong>Rectificar:</strong> Corregir información inexacta o incompleta</li>
                <li><strong>Eliminar:</strong> Solicitar la eliminación de su información (sujeto a obligaciones legales)</li>
                <li><strong>Oponerse:</strong> Oponerse al procesamiento de su información en ciertas circunstancias</li>
                <li><strong>Limitar:</strong> Solicitar la limitación del procesamiento</li>
                <li><strong>Portabilidad:</strong> Recibir su información en un formato estructurado y de uso común</li>
                <li><strong>Retirar consentimiento:</strong> Retirar su consentimiento en cualquier momento</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para ejercer estos derechos, contáctenos en: hola@coliseodigital.cl
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Enlaces a Sitios de Terceros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad de estos sitios. Le recomendamos revisar sus políticas de privacidad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Menores de Edad</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información de menores. Si descubrimos que hemos recopilado información de un menor, la eliminaremos de inmediato.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Cambios a esta Política</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "última actualización".
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos su información personal, puede contactarnos:
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Email: <a href="mailto:hola@coliseodigital.cl" className="text-primary hover:underline">hola@coliseodigital.cl</a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Empresa: ColiseoDigital<br />
                País: Chile
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
