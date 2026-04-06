import { useEffect, useState } from 'react';

export function useTracking() {
  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const captured: Record<string, string> = {};
    
    // Lista de parâmetros comuns de rastreamento
    const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src', 'fbclid', 'gclid'];
    
    trackingKeys.forEach(key => {
      const value = searchParams.get(key);
      if (value) captured[key] = value;
    });

    setParams(captured);
  }, []);

  const trackEvent = (eventName: string, data?: any) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, data);
    }
  };

  const getCheckoutUrl = (baseUrl: string) => {
    const url = new URL(baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    return url.toString();
  };

  return { params, trackEvent, getCheckoutUrl };
}
