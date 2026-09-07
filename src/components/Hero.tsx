import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  FileSpreadsheet, 
  Sparkles, 
  Layers, 
  Flame, 
  Thermometer, 
  Award, 
  Download, 
  Compass,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onOpenRfq: () => void;
  onOpenAdvisor: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenRfq, 
  onOpenAdvisor, 
  onExploreProducts 
}) => {
  const [activeProfileTab, setActiveProfileTab] = useState<'glazing' | 'coextrusion' | 'dhollow' | 'silicone'>('glazing');

  const profileProfiles = {
    glazing: {
      title: 'Architectural Glazing Gasket',
      polymer: 'EPDM 70 Shore A',
      standard: 'DIN 7863 / ASTM C864',
      application: 'Curtain walls, thermal break systems & facade glass retention',
      features: ['Zero ozone cracking under 50 pphm ASTM D1149', 'Desert heat & UV stabilized up to 130°C', 'High elastic recovery'],
      svgPath: (
        <svg viewBox="0 0 200 120" className="w-full h-32 text-slate-800 drop-shadow-sm">
          {/* Base footing */}
          <rect x="70" y="80" width="60" height="15" rx="3" fill="#1e293b" />
          <polygon points="65,95 135,95 130,105 70,105" fill="#334155" />
          {/* Lip sealing arm */}
          <path d="M 100 80 Q 90 40 40 25 Q 50 20 80 35 Q 110 50 115 80 Z" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
          {/* Internal anti-friction slip ridge */}
          <path d="M 60 28 Q 75 35 90 48" stroke="#f59e0b" strokeWidth="2" fill="none" strokeDasharray="3 2" />
          {/* Retention barb */}
          <polygon points="65,85 55,87 65,90" fill="#f59e0b" />
          <polygon points="135,85 145,87 135,90" fill="#f59e0b" />
        </svg>
      )
    },
    coextrusion: {
      title: 'Co-Extruded Door Seal with Steel Carrier',
      polymer: 'Dual EPDM (75A Solid + 25A Sponge)',
      standard: 'DIN ISO 3302-1 Class E2',
      application: 'Automotive doors, electrical enclosure cabinets, generator canopies',
      features: ['Embedded segmented steel spring clips', 'Push-on installation with zero adhesive', 'Airtight & sound attenuating'],
      svgPath: (
        <svg viewBox="0 0 200 120" className="w-full h-32 text-slate-800 drop-shadow-sm">
          {/* U Channel */}
          <path d="M 60 30 L 60 95 Q 60 105 70 105 L 90 105 Q 100 105 100 95 L 100 30 L 85 30 L 85 85 L 75 85 L 75 30 Z" fill="#1e293b" />
          {/* Embedded steel clips */}
          <line x1="68" y1="40" x2="68" y2="85" stroke="#f59e0b" strokeWidth="3" strokeDasharray="5 3" />
          <line x1="92" y1="40" x2="92" y2="85" stroke="#f59e0b" strokeWidth="3" strokeDasharray="5 3" />
          {/* Internal gripping lips */}
          <polygon points="75,50 82,55 75,60" fill="#475569" />
          <polygon points="85,50 78,55 85,60" fill="#475569" />
          {/* Microcellular Sponge Bulb */}
          <circle cx="135" cy="65" r="28" fill="#334155" stroke="#475569" strokeWidth="1.5" />
          <circle cx="135" cy="65" r="21" fill="#0f172a" />
          {/* Connection neck */}
          <rect x="98" y="55" width="12" height="20" fill="#1e293b" />
        </svg>
      )
    },
    dhollow: {
      title: 'Heavy-Duty Hollow D-Bumper',
      polymer: 'EPDM / Natural Rubber (70A)',
      standard: 'ASTM D2000 M3BA 710',
      application: 'Loading docks, marine berths, container rear doors, industrial trucks',
      features: ['Maximum kinetic energy absorption', 'Heavy wall design prevents bottoming out', 'High tear & abrasion resistance'],
      svgPath: (
        <svg viewBox="0 0 200 120" className="w-full h-32 text-slate-800 drop-shadow-sm">
          {/* Flat back */}
          <rect x="40" y="25" width="15" height="70" rx="2" fill="#1e293b" />
          {/* D shape outer */}
          <path d="M 55 25 L 90 25 A 35 35 0 0 1 90 95 L 55 95 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
          {/* D shape hollow core */}
          <path d="M 62 40 L 85 40 A 20 20 0 0 1 85 80 L 62 80 Z" fill="#0f172a" />
          {/* Fastener mounting hole indicator */}
          <circle cx="47" cy="60" r="4" fill="#f59e0b" />
        </svg>
      )
    },
    silicone: {
      title: 'High-Temperature Silicone Gasket',
      polymer: 'Platinum Silicone (-60°C to +250°C)',
      standard: 'FDA 21 CFR 177.2600 / UL94-V0',
      application: 'Industrial bakery ovens, autoclaves, biopharma sterilizers, cleanrooms',
      features: ['Food & pharmaceutical contact approved', 'Maintains seal memory at 250°C', 'Odorless, tasteless, non-leaching'],
      svgPath: (
        <svg viewBox="0 0 200 120" className="w-full h-32 text-slate-800 drop-shadow-sm">
          {/* Silicone P profile with hollow bulb */}
          <path d="M 50 75 L 110 75 L 110 55 A 25 25 0 1 0 75 35 L 75 75 Z" fill="#dc2626" opacity="0.9" />
          {/* Hollow core */}
          <circle cx="95" cy="40" r="14" fill="#7f1d1d" />
          {/* Flat flange foot */}
          <rect x="40" y="75" width="70" height="10" rx="2" fill="#b91c1c" />
          <circle cx="55" cy="80" r="2.5" fill="#fef08a" />
          <circle cx="85" cy="80" r="2.5" fill="#fef08a" />
        </svg>
      )
    }
  };

  const activeData = profileProfiles[activeProfileTab];

  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden py-14 lg:py-20">
      {/* Background Blueprint Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Certifications Badge Row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                ISO 9001:2015 Registered Plant
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                ASTM D2000 & DIN 7863 Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                UL94-V0 Fire Retardant
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white font-display leading-tight">
                Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">EPDM & Silicone</span> Profiles & Precision Rubber
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Manufacturer and global supplier of high-performance elastomeric extrusions, architectural glazing gaskets, co-extruded door seals, and custom moulded rubber components for extreme environments.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Custom Die Tooling:</strong> In-house Wire EDM CAD fabrication in 24-48 hours</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Extreme Climates:</strong> UV & desert ozone stabilized for Middle East & Gulf operations</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Material Versatility:</strong> EPDM, Silicone, Viton® (FKM), Nitrile, Neoprene & PU</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Export Ready:</strong> Reliable container & air cargo logistics across UAE, GCC & Worldwide</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenRfq}
                id="hero-rfq-button"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-base font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
              >
                <FileSpreadsheet className="w-5 h-5 text-slate-950" />
                <span>Request Instant Quote (RFQ)</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={onOpenAdvisor}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-base font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>AI Material Advisor</span>
              </button>

              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-black text-white font-display">2,500+</div>
                <div className="text-xs text-slate-400">Extrusion Dies</div>
              </div>
              <div>
                <div className="text-2xl font-black text-amber-400 font-display">18+</div>
                <div className="text-xs text-slate-400">Compound Grades</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white font-display">&lt; 48 hrs</div>
                <div className="text-xs text-slate-400">CAD Die Feasibility</div>
              </div>
              <div>
                <div className="text-2xl font-black text-amber-400 font-display">45+</div>
                <div className="text-xs text-slate-400">Export Nations</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Profile Engineering CAD Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-700/80 p-6 shadow-2xl relative">
              
              {/* Card Header with Technical Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs uppercase tracking-wider font-mono text-slate-400">
                    DIE CROSS-SECTION CAD SPEC
                  </span>
                </div>
                <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  DIN ISO 3302-1 E2
                </span>
              </div>

              {/* Profile Selector Tabs */}
              <div className="grid grid-cols-4 gap-1.5 my-4 bg-slate-900/80 p-1 rounded-lg border border-slate-700/60 text-xs">
                <button
                  onClick={() => setActiveProfileTab('glazing')}
                  className={`py-1.5 px-2 rounded font-medium transition-all ${
                    activeProfileTab === 'glazing'
                      ? 'bg-amber-400 text-slate-900 font-bold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Glazing
                </button>
                <button
                  onClick={() => setActiveProfileTab('coextrusion')}
                  className={`py-1.5 px-2 rounded font-medium transition-all ${
                    activeProfileTab === 'coextrusion'
                      ? 'bg-amber-400 text-slate-900 font-bold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Co-Extrude
                </button>
                <button
                  onClick={() => setActiveProfileTab('dhollow')}
                  className={`py-1.5 px-2 rounded font-medium transition-all ${
                    activeProfileTab === 'dhollow'
                      ? 'bg-amber-400 text-slate-900 font-bold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  D-Bumper
                </button>
                <button
                  onClick={() => setActiveProfileTab('silicone')}
                  className={`py-1.5 px-2 rounded font-medium transition-all ${
                    activeProfileTab === 'silicone'
                      ? 'bg-amber-400 text-slate-900 font-bold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Silicone
                </button>
              </div>

              {/* Vector Blueprint Schematic Display */}
              <div className="bg-slate-950/90 rounded-xl p-4 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-20" 
                  style={{
                    backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
                    backgroundSize: '16px 16px'
                  }}
                />
                <div className="relative z-10 w-full flex flex-col items-center">
                  {activeData.svgPath}
                  <div className="w-full mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>POLYMER: <span className="text-white font-semibold">{activeData.polymer}</span></span>
                    <span className="text-amber-400">{activeData.standard}</span>
                  </div>
                </div>
              </div>

              {/* Technical Profile Details */}
              <div className="mt-4 space-y-3">
                <div>
                  <h4 className="text-base font-bold text-white font-display">{activeData.title}</h4>
                  <p className="text-xs text-slate-300 mt-0.5">{activeData.application}</p>
                </div>

                <div className="space-y-1.5 bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-xs">
                  {activeData.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={onOpenRfq}
                    className="w-full py-2.5 px-3 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold border border-amber-500/40 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Tooling & Die Quote for This Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
