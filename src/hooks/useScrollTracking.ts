import { useEffect, useRef } from 'react';
import { useClarity } from './useClarity';

interface ScrollTrackingOptions {
  threshold?: number;
  eventName: string;
}

export const useScrollTracking = (options: ScrollTrackingOptions) => {
  const { threshold = 0.5, eventName } = options;
  const { trackEvent } = useClarity();
  const hasTracked = useRef(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasTracked.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTracked.current) {
          trackEvent(eventName as any);
          hasTracked.current = true;
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [eventName, threshold, trackEvent]);

  return elementRef;
};
