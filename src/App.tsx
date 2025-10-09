import Hero from './components/Hero';
import Showcase from './components/Showcase';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import AccessoryCustomization from './components/AccessoryCustomization';
import ProductIntegration from './components/ProductIntegration';
import ValueProposition from './components/ValueProposition';
import PromptToImage from './components/PromptToImage';
import ImageVariations from './components/ImageVariations';
import UpscaleComparison from './components/UpscaleComparison';
import ImageToVideo from './components/ImageToVideo';
import EbookContent from './components/EbookContent';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyHeader from './components/StickyHeader';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <StickyHeader />
      <FloatingCTA />

      <Hero />
      <Showcase />
      <WhatYouWillLearn />
      <AccessoryCustomization />
      <ProductIntegration />
      <ValueProposition />
      <PromptToImage />
      <ImageVariations />
      <UpscaleComparison />
      <ImageToVideo />
      <EbookContent />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
