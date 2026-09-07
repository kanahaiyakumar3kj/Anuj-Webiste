import React, { useState, useEffect } from 'react';
import { Navbar, AppView } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { PolymerComparisonMatrix } from './components/PolymerComparisonMatrix';
import { AIPolymerAdvisor } from './components/AIPolymerAdvisor';
import { IndustriesSection } from './components/IndustriesSection';
import { ManufacturingAndLab } from './components/ManufacturingAndLab';
import { ContactAndGlobalOffices } from './components/ContactAndGlobalOffices';
import { AboutUsPage } from './components/AboutUsPage';
import { ContactUsPage } from './components/ContactUsPage';
import { Footer } from './components/Footer';
import { TechnicalSpecsModal } from './components/TechnicalSpecsModal';
import { RfqConfiguratorModal } from './components/RfqConfiguratorModal';
import { SampleRequestModal } from './components/SampleRequestModal';
import { ProductItem } from './types';
import { PRODUCTS_DATA } from './data/productsData';

export default function App() {
  // Page view state: 'home' | 'about' | 'contact'
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [activeSection, setActiveSection] = useState<string>('');

  // Modal states
  const [selectedTdsProduct, setSelectedTdsProduct] = useState<ProductItem | null>(null);
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [selectedRfqProduct, setSelectedRfqProduct] = useState<ProductItem | null>(null);
  const [materialAdviceForRfq, setMaterialAdviceForRfq] = useState<string | null>(null);
  const [sampleModalOpen, setSampleModalOpen] = useState(false);

  // Scroll to hash on mount if present
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'about') {
      setCurrentView('about');
    } else if (hash === 'contact') {
      setCurrentView('contact');
    } else if (hash) {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  // View & Section Navigation Handler
  const handleNavigateView = (view: AppView, sectionId?: string) => {
    setCurrentView(view);
    
    if (view === 'about') {
      window.location.hash = 'about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('about');
    } else if (view === 'contact') {
      window.location.hash = 'contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('contact');
    } else {
      window.location.hash = sectionId || '';
      if (sectionId) {
        setActiveSection(sectionId);
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        setActiveSection('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Handlers for modals & quotation requests
  const handleOpenTds = (product: ProductItem) => {
    setSelectedTdsProduct(product);
  };

  const handleOpenRfqWithProduct = (product: ProductItem) => {
    setSelectedRfqProduct(product);
    setMaterialAdviceForRfq(null);
    setRfqModalOpen(true);
  };

  const handleOpenRfqGeneral = () => {
    setSelectedRfqProduct(null);
    setMaterialAdviceForRfq(null);
    setRfqModalOpen(true);
  };

  const handleOpenRfqWithPolymer = (polymerName: string) => {
    const match = PRODUCTS_DATA.find(p => p.polymerType === polymerName) || PRODUCTS_DATA[0];
    setSelectedRfqProduct(match);
    setMaterialAdviceForRfq(null);
    setRfqModalOpen(true);
  };

  const handleOpenRfqForIndustry = (industryTitle: string) => {
    setSelectedRfqProduct({
      ...PRODUCTS_DATA[0],
      name: `${industryTitle} - Custom Engineered Elastomer Spec`,
      code: 'FRP-IND-SPEC'
    });
    setMaterialAdviceForRfq(null);
    setRfqModalOpen(true);
  };

  const handleTransferAdviceToRfq = (advice: string) => {
    setSelectedRfqProduct(null);
    setMaterialAdviceForRfq(advice);
    setRfqModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Navbar with About Us and Contact Us on top */}
      <Navbar 
        currentView={currentView}
        activeSection={activeSection}
        onNavigateView={handleNavigateView}
        onOpenRfq={handleOpenRfqGeneral}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        
        {/* Dedicated About Us Page */}
        {currentView === 'about' && (
          <AboutUsPage 
            onNavigateHome={() => handleNavigateView('home')}
            onNavigateToSection={(sec) => handleNavigateView('home', sec)}
            onOpenRfq={handleOpenRfqGeneral}
            onOpenSampleModal={() => setSampleModalOpen(true)}
            onNavigateContact={() => handleNavigateView('contact')}
          />
        )}

        {/* Dedicated Contact Us Page */}
        {currentView === 'contact' && (
          <ContactUsPage 
            onNavigateHome={() => handleNavigateView('home')}
            onOpenRfq={handleOpenRfqGeneral}
            onOpenSampleModal={() => setSampleModalOpen(true)}
          />
        )}

        {/* Primary Home View */}
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <Hero 
              onOpenRfqModal={handleOpenRfqGeneral}
              onOpenSampleModal={() => setSampleModalOpen(true)}
              onSelectCadProfile={(product) => handleOpenRfqWithProduct(product)}
            />

            {/* Product Catalog Directory */}
            <ProductCatalog 
              onSelectProductForTds={handleOpenTds}
              onSelectProductForRfq={handleOpenRfqWithProduct}
            />

            {/* Polymer Material Comparison Guide & ASTM Standards */}
            <PolymerComparisonMatrix 
              onOpenAdvisor={() => handleNavigateView('home', 'ai-advisor')}
              onOpenRfqWithPolymer={handleOpenRfqWithPolymer}
            />

            {/* AI Elastomer Materials Specifier (Gemini-powered) */}
            <AIPolymerAdvisor 
              onTransferToRfq={handleTransferAdviceToRfq}
            />

            {/* Industry Solutions Showcase */}
            <IndustriesSection 
              onOpenRfqForIndustry={handleOpenRfqForIndustry}
            />

            {/* Manufacturing Plant & QA Testing Lab */}
            <ManufacturingAndLab />

            {/* Contact & Global Logistics Support */}
            <ContactAndGlobalOffices 
              onOpenRfq={handleOpenRfqGeneral}
            />
          </>
        )}

      </main>

      {/* Corporate Industrial Footer */}
      <Footer 
        onNavigateView={handleNavigateView}
        onOpenRfq={handleOpenRfqGeneral}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      {/* Technical Data Sheet (TDS) Modal */}
      <TechnicalSpecsModal 
        product={selectedTdsProduct}
        onClose={() => setSelectedTdsProduct(null)}
        onAddToRfq={(prod) => {
          setSelectedTdsProduct(null);
          handleOpenRfqWithProduct(prod);
        }}
      />

      {/* RFQ Quotation Configurator Modal */}
      <RfqConfiguratorModal 
        isOpen={rfqModalOpen}
        initialProduct={selectedRfqProduct}
        initialMaterialAdvice={materialAdviceForRfq}
        onClose={() => setRfqModalOpen(false)}
      />

      {/* Complimentary Sample Pack Modal */}
      <SampleRequestModal 
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
      />

    </div>
  );
}
