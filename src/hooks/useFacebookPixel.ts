import { useCallback } from 'react';

declare global {
  interface Window {
    fbq?: (command: string, event: string, data?: Record<string, any>) => void;
  }
}

// Eventos estándar de Facebook
export type StandardPixelEvent =
  | 'ViewContent'      // Ver contenido
  | 'AddToCart'        // Agregar al carrito
  | 'InitiateCheckout' // Iniciar compra
  | 'Purchase'         // Compra completada
  | 'Lead'             // Lead generado
  | 'CompleteRegistration'; // Registro completado

// Eventos personalizados para cada producto
export type CustomPixelEvent =
  // Eventos UGC/Influencer IA
  | 'UGC_PageView'
  | 'UGC_Hero_CTA_Click'
  | 'UGC_Pricing_CTA_Click'
  | 'UGC_ScrollToPricing'
  | 'UGC_FAQ_Opened'

  // Eventos Método CALMA
  | 'MetodoCalma_PageView'
  | 'MetodoCalma_Hero_CTA_Click'
  | 'MetodoCalma_Pricing_CTA_Click'
  | 'MetodoCalma_ScrollToPricing'
  | 'MetodoCalma_FAQ_Opened'
  | 'MetodoCalma_GuaranteeViewed';

export const useFacebookPixel = () => {
  /**
   * Trackea eventos estándar de Facebook
   * Estos aparecen automáticamente en el panel de Meta
   */
  const trackStandardEvent = useCallback((
    eventName: StandardPixelEvent,
    params?: {
      value?: number;
      currency?: string;
      content_name?: string;
      content_category?: string;
      content_ids?: string[];
    }
  ) => {
    if (typeof window !== 'undefined' && window.fbq) {
      try {
        window.fbq('track', eventName, params);
        console.log(`[FB Pixel] Standard Event: ${eventName}`, params);
      } catch (error) {
        console.error('[FB Pixel] Error tracking standard event:', error);
      }
    }
  }, []);

  /**
   * Trackea eventos personalizados
   * Estos los defines tú y aparecen en "Eventos Personalizados" en Meta
   */
  const trackCustomEvent = useCallback((
    eventName: CustomPixelEvent,
    params?: Record<string, any>
  ) => {
    if (typeof window !== 'undefined' && window.fbq) {
      try {
        window.fbq('trackCustom', eventName, params);
        console.log(`[FB Pixel] Custom Event: ${eventName}`, params);
      } catch (error) {
        console.error('[FB Pixel] Error tracking custom event:', error);
      }
    }
  }, []);

  /**
   * Trackea vista de página específica
   */
  const trackPageView = useCallback((pageName: string) => {
    if (typeof window !== 'undefined' && window.fbq) {
      try {
        // Track tanto el evento estándar como uno personalizado
        window.fbq('track', 'PageView');
        window.fbq('trackCustom', `${pageName}_PageView` as any);
        console.log(`[FB Pixel] Page View: ${pageName}`);
      } catch (error) {
        console.error('[FB Pixel] Error tracking page view:', error);
      }
    }
  }, []);

  /**
   * Trackea inicio de checkout (cuando hacen click en comprar)
   */
  const trackInitiateCheckout = useCallback((
    productName: string,
    value: number,
    currency: string = 'USD'
  ) => {
    trackStandardEvent('InitiateCheckout', {
      value,
      currency,
      content_name: productName,
    });
  }, [trackStandardEvent]);

  return {
    trackStandardEvent,
    trackCustomEvent,
    trackPageView,
    trackInitiateCheckout,
  };
};
