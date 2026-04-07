import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './components/ui';
import { SalesPage } from './components/SalesPage';
import { useTracking } from './hooks/useTracking';

export default function App() {
  const { trackEvent, getCheckoutUrl } = useTracking();

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#2D3748]">
      <SalesPage onPurchase={() => {
        trackEvent('InitiateCheckout');
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'InitiateCheckout');
        }
        const checkoutUrl = getCheckoutUrl('https://pay.cakto.com.br/uhn9jm2_838370');
        window.open(checkoutUrl, '_blank');
      }} />
    </div>
  );
}
