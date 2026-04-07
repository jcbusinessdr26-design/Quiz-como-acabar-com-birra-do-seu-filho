import { useEffect, useState, useRef } from 'react';

export function useTracking() {
  const [params, setParams] = useState<Record<string, string>>({});
  const purchaseTracked = useRef(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const captured: Record<string, string> = {};
    
    // Lista de parâmetros comuns de rastreamento
    const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src', 'fbclid', 'gclid'];
    
    trackingKeys.forEach(key => {
      const value = searchParams.get(key);
      if (value) captured[key] = value;
    });

    // Verificar se veio do checkout (sucesso)
    const success = searchParams.get('success');
    const payment = searchParams.get('payment');
    
    if ((success === 'true' || payment === 'approved') && !purchaseTracked.current) {
      purchaseTracked.current = true;
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Purchase', {
          value: 19.90,
          currency: 'BRL'
        });
      }
    }

    setParams(captured);
  }, []);

  const trackEvent = (eventName: string, data?: any) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, data);
    }
  };

  const trackPurchase = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        value: 19.90,
        currency: 'BRL'
      } as any);
    }
  };

  const getCheckoutUrl = (baseUrl: string) => {
    const url = new URL(baseUrl);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });
    return url.toString();
  };

  return { params, trackEvent, getCheckoutUrl };
}
