import Hero from './components/Hero';
import ContentComparison from './components/ContentComparison';
import Showcase from './components/Showcase';
import KateVideoShowcase from './components/KateVideoShowcase';
import CamiShowcase from './components/CamiShowcase';
import ProcessIntro from './components/ProcessIntro';
import OutfitCustomization from './components/OutfitCustomization';
import AccessoryCustomization from './components/AccessoryCustomization';
import ProductIntegration from './components/ProductIntegration';
import ValueProposition from './components/ValueProposition';
import PromptToImage from './components/PromptToImage';
import UpscaleComparison from './components/UpscaleComparison';
import ImageAnimation from './components/ImageAnimation';
import EbookContent from './components/EbookContent';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import SimpleCTA from './components/SimpleCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header oculto temporalmente */}
      <FloatingCTA />

      <Hero />
      <ContentComparison />
      <Showcase />
      <CamiShowcase />
      <ProcessIntro />
      <PromptToImage />
      <OutfitCustomization />
      <AccessoryCustomization />
      <UpscaleComparison />
      <ImageAnimation />
      <SimpleCTA />
      <ProductIntegration />
      <KateVideoShowcase />
      <ValueProposition />
      <UseCases />
      <EbookContent />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
