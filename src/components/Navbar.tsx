import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  Globe, 
  FileText, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles,
  Package,
  Layers,
  Building2,
  Info
} from 'lucide-react';

export type AppView = 'home' | 'about' | 'contact';

interface NavbarProps {
  currentView: AppView;
  activeSection?: string;
  onNavigateView: (view: AppView, sectionId?: string) => void;
  onOpenRfq: (productName?: string) => void;
  onOpenSampleModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentView,
  activeSection,
  onNavigateView,
  onOpenRfq, 
  onOpenSampleModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: {
    id: string;
    label: string;
    view: AppView;
    sectionId?: string;
    highlight?: boolean;
    badge?: string;
  }[] = [
    { id: 'nav-home', label: 'Home', view: 'home' },
    { id: 'nav-about', label: 'About Us', view: 'about' },
    { id: 'nav-products', label: 'Products & Profiles', view: 'home', sectionId: 'products' },
    { id: 'nav-polymer-guide', label: 'Polymer Guide', view: 'home', sectionId: 'polymer-guide' },
    { id: 'nav-ai-advisor', label: 'AI Spec Advisor', view: 'home', sectionId: 'ai-advisor', highlight: true },
    { id: 'nav-plant-quality', label: 'Plant & Lab', view: 'home', sectionId: 'plant-quality' },
    { id: 'nav-contact', label: 'Contact Us', view: 'contact' },
  ];

  const handleNavClick = (view: AppView, sectionId?: string) => {
    onNavigateView(view, sectionId);
    setMobileMenuOpen(false);
  };

  const isLinkActive = (item: typeof navItems[0]) => {
    if (item.view === 'about') return currentView === 'about';
    if (item.view === 'contact') return currentView === 'contact';
    if (currentView === 'home') {
      if (!item.sectionId && !activeSection) return true;
      if (item.sectionId && activeSection === item.sectionId) return true;
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      
      {/* Top Bar - Corporate Industrial Metadata & Top Quick Links */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-slate-200">ISO 9001:2015 & ASTM Certified Manufacturer</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>Offices & Hubs: UAE • India • Saudi Arabia • UK</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            {/* Top Quick Links */}
            <div className="hidden xl:flex items-center gap-3 pr-2 border-r border-slate-800">
              <button 
                onClick={() => handleNavClick('about')}
                className={`transition-colors ${currentView === 'about' ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                About Us
              </button>
              <span className="text-slate-700">•</span>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`transition-colors ${currentView === 'contact' ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                Contact Us
              </button>
            </div>

            <a 
              href="mailto:info@flexirubpolymer.com" 
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>info@flexirubpolymer.com</span>
            </a>
            
            <span className="hidden sm:inline text-slate-700">|</span>
            
            <a 
              href="tel:+971551568070" 
              className="flex items-center gap-1.5 text-slate-200 font-semibold hover:text-amber-400 transition-colors"
              title="Call / WhatsApp: +971 55 156 8070"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+971 55 156 8070</span>
            </a>

            <button
              onClick={onOpenSampleModal}
              className="hidden lg:flex items-center gap-1 text-xs bg-slate-800 hover:bg-slate-700 text-amber-300 px-2.5 py-0.5 rounded border border-amber-400/30 transition-colors"
            >
              <Package className="w-3 h-3" />
              Sample Kit
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Domain Branding */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-700 shadow-md group-hover:border-amber-500 transition-colors">
              <Layers className="w-6 h-6 text-amber-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-display">
                  FLEXIRUB
                </span>
                <span className="text-xl sm:text-2xl font-light tracking-tight text-amber-600 font-display">
                  POLYMER
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 font-mono">
                flexirubpolymer.com
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const active = isLinkActive(item);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.view, item.sectionId)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    item.highlight 
                      ? 'text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 flex items-center gap-1.5 font-semibold'
                      : active 
                        ? 'text-slate-950 bg-slate-100 font-bold' 
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {item.highlight && <Sparkles className="w-3.5 h-3.5 text-amber-600" />}
                  <span>{item.label}</span>
                  {active && !item.highlight && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenRfq()}
              id="header-rfq-button"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-sm hover:shadow transition-all border border-slate-800 active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Request Quote (RFQ)</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenRfq()}
              className="text-xs bg-slate-900 text-amber-400 font-bold px-3 py-2 rounded-lg sm:hidden shadow-xs"
            >
              RFQ
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="py-2 border-b border-slate-100 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            Menu Navigation
          </div>
          {navItems.map((item) => {
            const active = isLinkActive(item);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.view, item.sectionId)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                  active ? 'bg-slate-100 text-slate-950 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  {item.highlight && <Sparkles className="w-4 h-4 text-amber-600" />}
                  {item.label}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                onOpenRfq();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              Request Formal RFQ
            </button>
            <button
              onClick={() => {
                onOpenSampleModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-slate-200"
            >
              <Package className="w-4 h-4 text-amber-600" />
              Order Sample Kit
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
