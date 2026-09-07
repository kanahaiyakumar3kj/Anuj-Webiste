import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { 
  Building2, 
  Anchor, 
  Fuel, 
  Car, 
  Apple, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenRfqForIndustry: (industryTitle: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenRfqForIndustry }) => {
  const [activeTab, setActiveTab] = useState(INDUSTRIES_DATA[0].id);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'facades-construction':
        return <Building2 className="w-5 h-5" />;
      case 'marine-offshore':
        return <Anchor className="w-5 h-5" />;
      case 'oil-gas-petrochemical':
        return <Fuel className="w-5 h-5" />;
      case 'automotive-transport':
        return <Car className="w-5 h-5" />;
      case 'food-pharmaceutical':
        return <Apple className="w-5 h-5" />;
      case 'hvac-electrical':
        return <Zap className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  const activeIndustry = INDUSTRIES_DATA.find(ind => ind.id === activeTab) || INDUSTRIES_DATA[0];

  return (
    <section id="industries" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-2">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            GLOBAL INDUSTRY SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
            Precision Sealing for Mission-Critical Sectors
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            From towering curtain wall skyscrapers across Dubai and Riyadh to demanding offshore oil platforms and high-speed transit fleets, FlexiRub Polymer is the trusted elastomer partner.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-amber-400/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className={`p-2 rounded-lg w-fit ${
                  isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-700'
                }`}>
                  {getIndustryIcon(ind.id)}
                </div>
                <div className="text-xs font-bold leading-snug line-clamp-2">
                  {ind.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Industry Detailed Feature Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 font-mono">
                <span>SECTOR PROFILE</span>
                <span>•</span>
                <span>{activeIndustry.standardsMet.join(', ')}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                {activeIndustry.title}
              </h3>

              <div className="text-sm font-semibold text-slate-700 italic">
                {activeIndustry.tagline}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeIndustry.description}
              </p>

              <div className="pt-2 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Engineering Challenges Solved:
                </div>
                <div className="space-y-1.5">
                  {activeIndustry.challengesSolved.map((ch, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onOpenRfqForIndustry(activeIndustry.title)}
                  className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-xs"
                >
                  <span>Request RFQ for {activeIndustry.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>

            {/* Right Products Box */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
              <h4 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                Key Elastomer Solutions Supplied:
              </h4>

              <div className="space-y-2.5">
                {activeIndustry.keyProducts.map((prod, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 flex items-center justify-between shadow-2xs">
                    <span>{prod}</span>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-mono">
                      Custom Die
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs text-slate-500">
                All compounds certified with batch mill test reports (MTC) and dimensional inspection certificates.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
