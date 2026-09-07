import React from 'react';
import { 
  Layers, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  ArrowUp,
  Package,
  Building2,
  ChevronRight
} from 'lucide-react';
import { AppView } from './Navbar';

interface FooterProps {
  onNavigateView: (view: AppView, sectionId?: string) => void;
  onOpenRfq: () => void;
  onOpenSampleModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigateView, 
  onOpenRfq,
  onOpenSampleModal 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top Banner with Certifications */}
      <div className="bg-slate-900 border-b border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <span className="font-semibold text-slate-300">CERTIFICATIONS & TESTING:</span>
            <span className="font-mono text-slate-400">ISO 9001:2015</span>
            <span className="font-mono text-slate-400">ASTM D2000</span>
            <span className="font-mono text-slate-400">DIN 7863</span>
            <span className="font-mono text-slate-400">FDA 21 CFR 177.2600</span>
            <span className="font-mono text-slate-400">UL94-V0</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigateView('home')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-amber-500 transition-colors">
                <Layers className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white font-display">
                  FLEXIRUB <span className="text-amber-500 font-light">POLYMER</span>
                </span>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">
                  flexirubpolymer.com
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              FlexiRub Polymer is a global manufacturer of precision EPDM rubber extrusions, high-temperature silicone profiles, industrial rubber sheets, and moulded elastomeric components engineered to ASTM, DIN, and ISO standards.
            </p>

            <div className="space-y-1.5 text-slate-400 pt-1">
              <div><strong>Direct Tel / WhatsApp:</strong> <a href="tel:+971551568070" className="hover:text-amber-400 font-mono text-slate-200">+971 55 156 8070</a></div>
              <div><strong>Official Email:</strong> <a href="mailto:info@flexirubpolymer.com" className="hover:text-amber-400 text-slate-200">info@flexirubpolymer.com</a></div>
              <div className="text-[11px] text-slate-500 pt-1">
                <strong>Global Offices:</strong> Dubai (UAE) • India • Saudi Arabia • United Kingdom
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onNavigateView('about')}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => onNavigateView('contact')}
                className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Product Lines */}
          <div className="space-y-3">
            <h4 className="text-white font-bold font-display uppercase tracking-wider text-xs">
              Product Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigateView('home', 'products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Architectural Glazing Gaskets
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Co-Extruded Door Seals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  High-Temp Silicone Tubing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Nitrile (NBR) Oil Sheets
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Viton® (FKM) Acid Seals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Marine Dock Fenders
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'products')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Inflatable Cleanroom Seals
                </button>
              </li>
            </ul>
          </div>

          {/* Polymers & Materials */}
          <div className="space-y-3">
            <h4 className="text-white font-bold font-display uppercase tracking-wider text-xs">
              Polymers & Compounds
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigateView('home', 'polymer-guide')} className="hover:text-white transition-colors cursor-pointer text-left">
                  EPDM Rubber (Weather & UV)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'polymer-guide')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Silicone Rubber (FDA & 250°C)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'polymer-guide')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Nitrile NBR (Petroleum / Fuel)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'polymer-guide')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Neoprene CR (Flame & Marine)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'polymer-guide')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Viton® FKM (Chemicals)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'polymer-guide')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Natural Rubber (High Resilience)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'polymer-guide')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Polyurethane PU (Abrasion)
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Pages & Engineering Tools */}
          <div className="space-y-3">
            <h4 className="text-white font-bold font-display uppercase tracking-wider text-xs">
              Quick Links & Services
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigateView('about')} className="hover:text-white transition-colors font-semibold text-slate-300 flex items-center gap-1 cursor-pointer">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>About FlexiRub Polymer</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('contact')} className="hover:text-white transition-colors font-semibold text-slate-300 flex items-center gap-1 cursor-pointer">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Contact Global Offices</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenRfq} className="hover:text-white transition-colors text-amber-400 font-bold flex items-center gap-1 cursor-pointer">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request Instant RFQ</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenSampleModal} className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                  <Package className="w-3.5 h-3.5" />
                  <span>Order Sample Kit</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'ai-advisor')} className="hover:text-white transition-colors cursor-pointer">
                  AI Materials Specifier
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateView('home', 'plant-quality')} className="hover:text-white transition-colors cursor-pointer">
                  Die CAD Tooling (24-48h)
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Disclaimer Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} FlexiRub Polymer (flexirubpolymer.com). All rights reserved. Registered Industrial Rubber & Elastomer Extrusion Manufacturer.
          </div>
          <div className="flex items-center gap-4">
            <span>ISO 9001:2015 Registered</span>
            <span>•</span>
            <span>ASTM & DIN Certified</span>
            <span>•</span>
            <span>Global Export Supply</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
