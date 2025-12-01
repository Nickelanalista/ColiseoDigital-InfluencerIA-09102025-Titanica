import { useEffect } from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import MetodoCalma from './components/MetodoCalma';
import AboutAuthor from './components/AboutAuthor';
import Plan7Noches from './components/Plan7Noches';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import { useFacebookPixel } from '../../hooks/useFacebookPixel';

function DuermeBebePage() {
  const { trackPageView, trackStandardEvent } = useFacebookPixel();

  useEffect(() => {
    document.title = 'Método CALMA - Guía para que tu Bebé Duerma Toda la Noche | ColiseoDigital';

    // Trackear vista de página específica de Método CALMA
    trackPageView('MetodoCalma');

    // Trackear como ViewContent (evento estándar)
    trackStandardEvent('ViewContent', {
      content_name: 'Método CALMA - Sueño de Bebé',
      content_category: 'Ebook',
      content_ids: ['metodocalma'],
    });
  }, [trackPageView, trackStandardEvent]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <ProblemSolution />
      <AboutAuthor />
      <MetodoCalma />
      <Plan7Noches />
      <Pricing />
      <Guarantee />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default DuermeBebePage;
