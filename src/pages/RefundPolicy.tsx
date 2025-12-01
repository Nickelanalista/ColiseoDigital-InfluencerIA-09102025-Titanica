import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RefundPolicy() {
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
            Política de Reembolso
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Garantía de Satisfacción</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En ColiseoDigital, estamos comprometidos con la satisfacción de nuestros clientes. Ofrecemos una garantía de satisfacción para el eBook "Crea tu Primer Influencer IA para tu Negocio" según los términos establecidos por nuestra plataforma de pagos, Hotmart.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Período de Garantía</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ofrecemos un período de garantía de <strong>7 días</strong> a partir de la fecha de compra. Durante este período, puede solicitar un reembolso completo si el producto no cumple con sus expectativas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Condiciones para Solicitar un Reembolso</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para ser elegible para un reembolso, se deben cumplir las siguientes condiciones:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>La solicitud debe realizarse dentro de los 7 días siguientes a la fecha de compra</li>
                <li>Debe proporcionar el correo electrónico asociado a la compra y el número de pedido</li>
                <li>El producto debe haber sido adquirido directamente desde nuestro sitio web oficial</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Casos en los que NO se Otorga Reembolso</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                No se procesarán reembolsos en los siguientes casos:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Solicitudes realizadas después del período de garantía de 7 días</li>
                <li>Productos adquiridos en promociones especiales claramente indicadas como "sin reembolso"</li>
                <li>Cambio de opinión después del período de garantía</li>
                <li>Falta de uso del producto por decisión personal</li>
                <li>Expectativas poco realistas sobre los resultados automáticos</li>
                <li>Problemas técnicos causados por el usuario (descarga incompleta, pérdida de archivos, etc.)</li>
                <li>Violación de los Términos y Condiciones de uso</li>
                <li>Distribución o compartir no autorizado del contenido</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cómo Solicitar un Reembolso</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Para solicitar un reembolso, siga estos pasos:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Opción 1: A través de Hotmart</h3>
              <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                <li>Acceda a su área de miembros en Hotmart</li>
                <li>Localice su pedido en "Mis compras"</li>
                <li>Haga clic en "Solicitar reembolso"</li>
                <li>Complete el formulario con el motivo de su solicitud</li>
                <li>Envíe la solicitud</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Opción 2: Contacto Directo</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Envíe un correo electrónico a: <a href="mailto:hola@coliseodigital.cl" className="text-primary hover:underline">hola@coliseodigital.cl</a>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Incluya en su mensaje:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Su nombre completo</li>
                <li>Correo electrónico utilizado en la compra</li>
                <li>Número de pedido o transacción</li>
                <li>Motivo de la solicitud de reembolso</li>
                <li>Fecha de compra</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Tiempo de Procesamiento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Una vez recibida su solicitud de reembolso:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Revisaremos su solicitud en un plazo de 2-3 días hábiles</li>
                <li>Le notificaremos por correo electrónico sobre la aprobación o rechazo de su solicitud</li>
                <li>Si se aprueba, el reembolso se procesará a través de Hotmart</li>
                <li>El tiempo de acreditación en su método de pago puede variar según su banco o procesador de pagos (generalmente 7-14 días hábiles)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Método de Reembolso</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El reembolso se realizará utilizando el mismo método de pago que utilizó para la compra original. No se ofrecen reembolsos en efectivo ni en otros métodos de pago diferentes al utilizado en la compra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Actualizaciones del Producto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Las actualizaciones futuras del producto son gratuitas para todos los compradores. El acceso a actualizaciones no afecta su derecho a solicitar un reembolso dentro del período de garantía.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Revocación del Acceso</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Al aceptarse un reembolso, su acceso al producto digital y a cualquier material complementario será revocado inmediatamente. Debe eliminar todas las copias descargadas del producto.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disputas y Chargebacks</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Antes de iniciar una disputa o chargeback con su banco o compañía de tarjeta de crédito, le pedimos que nos contacte directamente. Estamos comprometidos a resolver cualquier problema de manera amistosa y eficiente.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los chargebacks no autorizados pueden resultar en:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Revocación inmediata del acceso al producto</li>
                <li>Imposibilidad de realizar compras futuras</li>
                <li>Acciones legales si corresponde</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Excepciones y Consideraciones Especiales</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En casos excepcionales y a nuestra discreción, podemos considerar solicitudes de reembolso fuera del período de garantía. Estas situaciones se evaluarán caso por caso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modificaciones a esta Política</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nos reservamos el derecho de modificar esta Política de Reembolso en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación. Las compras realizadas antes de cualquier modificación estarán sujetas a los términos vigentes en el momento de la compra.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contacto y Soporte</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tiene alguna pregunta sobre esta Política de Reembolso o necesita asistencia, no dude en contactarnos:
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Email: <a href="mailto:hola@coliseodigital.cl" className="text-primary hover:underline">hola@coliseodigital.cl</a>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nuestro equipo de soporte está disponible para ayudarle a resolver cualquier problema antes de considerar un reembolso. Muchas veces, las dudas o dificultades pueden resolverse con orientación adicional.
              </p>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Recordatorio Importante</h3>
              <p className="text-gray-700 leading-relaxed">
                Nuestro objetivo es su satisfacción. Si tiene alguna inquietud sobre el producto, lo invitamos a contactarnos primero. Estamos aquí para ayudarle a obtener el máximo valor de su compra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
