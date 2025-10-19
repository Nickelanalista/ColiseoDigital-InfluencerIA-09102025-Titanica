import { useCallback } from 'react';

declare global {
  interface Window {
    clarity?: (command: string, ...args: any[]) => void;
  }
}

export type ClarityEvent = 
  | 'cta_hero_click'
  | 'cta_pricing_click'
  | 'cta_floating_click'
  | 'cta_final_click'
  | 'scroll_to_pricing'
  | 'scroll_to_testimonials'
  | 'scroll_to_faq'
  | 'scroll_to_ebook_content'
  | 'faq_opened'
  | 'showcase_viewed'
  | 'timer_viewed';

export const useClarity = () => {
  const trackEvent = useCallback((eventName: ClarityEvent, metadata?: Record<string, string | number>) => {
    if (typeof window !== 'undefined' && window.clarity) {
      try {
        window.clarity('event', eventName);
        
        if (metadata) {
          Object.entries(metadata).forEach(([key, value]) => {
            window.clarity?.('set', key, String(value));
          });
        }
        
        console.log(`[Clarity] Event tracked: ${eventName}`, metadata);
      } catch (error) {
        console.error('[Clarity] Error tracking event:', error);
      }
    }
  }, []);

  const identifyUser = useCallback((userId: string) => {
    if (typeof window !== 'undefined' && window.clarity) {
      try {
        window.clarity('identify', userId);
        console.log('[Clarity] User identified:', userId);
      } catch (error) {
        console.error('[Clarity] Error identifying user:', error);
      }
    }
  }, []);

  const setTag = useCallback((key: string, value: string) => {
    if (typeof window !== 'undefined' && window.clarity) {
      try {
        window.clarity('set', key, value);
        console.log(`[Clarity] Tag set: ${key} = ${value}`);
      } catch (error) {
        console.error('[Clarity] Error setting tag:', error);
      }
    }
  }, []);

  return { trackEvent, identifyUser, setTag };
};
