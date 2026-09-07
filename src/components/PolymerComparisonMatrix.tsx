import React, { useState } from 'react';
import { POLYMERS_DATA } from '../data/polymersData';
import { PolymerMaterial } from '../types';
import { 
  Check, 
  X, 
  HelpCircle, 
  Sparkles, 
  Sliders, 
  Thermometer, 
  Flame, 
  ShieldCheck, 
  ArrowRight,
  Info
} from 'lucide-react';

interface PolymerComparisonMatrixProps {
  onOpenAdvisor: () => void;
  onOpenRfqWithPolymer: (polymerName: string) => void;
}

export const PolymerComparisonMatrix: React.FC<PolymerComparisonMatrixProps> = ({
  onOpenAdvisor,
  onOpenRfqWithPolymer
}) => {
  const [activeReqFilter, setActiveReqFilter] = useState<'all' | 'weather' | 'oil' | 'acid' | 'hightemp' | 'fda'>('all');
  const [selectedPolymerModal, setSelectedPolymerModal] = useState<PolymerMaterial | null>(null);

  const filterMatches = (poly: PolymerMaterial) => {
    switch (activeReqFilter) {
      case 'weather':
        return poly.weatherOzone >= 4;
      case 'oil':
        return poly.oilPetroleum >= 4;
      case 'acid':
        return poly.acidChemical >= 4;
      case 'hightemp':
        return poly.tempMax >= 180;
      case 'fda':
        return poly.foodGradeFDA === true;
      default:
        return true;
    }
  };

  const renderRatingDots = (rating: number, max = 5) => {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: max }).map((_, i) => (
          <span 
            key={i} 
            className={`w-2 h-2 rounded-full ${
              i < rating 
                ? rating >= 4 ? 'bg-emerald-500' : 'bg-amber-400' 
                : 'bg-slate-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="polymer-guide" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-2">
              <Sliders className="w-3.5 h-3.5 text-amber-700" />
              MATERIALS SCIENCE & COMPOUND SELECTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
              Elastomer Material Comparison Guide
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl text-base">
              Selecting the ideal rubber compound is fundamental to seal longevity. Compare thermal limits, chemical compatibility, and ASTM D2000 classification across our polymer formulations.
            </p>
          </div>

          <button
            onClick={onOpenAdvisor}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold hover:bg-amber-100 transition-colors shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Unsure? Ask AI Polymer Advisor</span>
          </button>
        </div>

        {/* Quick Requirement Filter Chips */}
        <div className="my-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Highlight By Environment:</span>
          
          <button
            onClick={() => setActiveReqFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeReqFilter === 'all' 
                ? 'bg-slate-900 text-white shadow-xs' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Show All (7 Polymers)
          </button>

          <button
            onClick={() => setActiveReqFilter('weather')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeReqFilter === 'weather' 
                ? 'bg-blue-600 text-white shadow-xs' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>Outdoor / Desert UV & Ozone</span>
          </button>

          <button
            onClick={() => setActiveReqFilter('oil')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeReqFilter === 'oil' 
                ? 'bg-emerald-600 text-white shadow-xs' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>Petroleum Fuels & Hydraulic Oils</span>
          </button>

          <button
            onClick={() => setActiveReqFilter('acid')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeReqFilter === 'acid' 
                ? 'bg-purple-600 text-white shadow-xs' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>Corrosive Acids & Solvents</span>
          </button>

          <button
            onClick={() => setActiveReqFilter('hightemp')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeReqFilter === 'hightemp' 
                ? 'bg-rose-600 text-white shadow-xs' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>High Temp (&gt; 180°C)</span>
          </button>

          <button
            onClick={() => setActiveReqFilter('fda')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeReqFilter === 'fda' 
                ? 'bg-amber-600 text-white shadow-xs' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>Food & Pharma (FDA Compliant)</span>
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-900 text-slate-200 border-b border-slate-800">
                <th className="py-3.5 px-4 font-bold uppercase tracking-wider">Elastomer Compound</th>
                <th className="py-3.5 px-4 font-bold uppercase tracking-wider">Operating Temp Range</th>
                <th className="py-3.5 px-4 font-bold uppercase tracking-wider">Ozone & UV</th>
                <th className="py-3.5 px-4 font-bold uppercase tracking-wider">Petroleum / Oil</th>
                <th className="py-3.5 px-4 font-bold uppercase tracking-wider">Acid & Chemical</th>
                <th className="py-3.5 px-4 font-bold uppercase tracking-wider">Abrasion & Wear</th>
                <th className="py-3.5 px-4 font-bold uppercase tracking-wider">ASTM Standard</th>
                <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {POLYMERS_DATA.map((poly) => {
                const isHighlighted = filterMatches(poly);
                return (
                  <tr 
                    key={poly.id}
                    className={`transition-colors ${
                      isHighlighted 
                        ? 'bg-white hover:bg-slate-50/80' 
                        : 'opacity-40 bg-slate-50'
                    }`}
                  >
                    <td className="py-4 px-4">
                      <div className="font-bold text-sm text-slate-900 font-display">
                        {poly.name}
                      </div>
                      <div className="text-[11px] text-slate-500 italic mt-0.5">
                        {poly.chemicalName}
                      </div>
                      {poly.foodGradeFDA && (
                        <span className="inline-block mt-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                          FDA 21 CFR 177.2600
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4 font-mono font-medium text-slate-800">
                      <div className="flex items-center gap-1.5">
                        <Thermometer className="w-3.5 h-3.5 text-amber-600" />
                        <span>{poly.tempMin}°C to +{poly.tempMax}°C</span>
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      {renderRatingDots(poly.weatherOzone)}
                    </td>

                    <td className="py-4 px-4">
                      {renderRatingDots(poly.oilPetroleum)}
                    </td>

                    <td className="py-4 px-4">
                      {renderRatingDots(poly.acidChemical)}
                    </td>

                    <td className="py-4 px-4">
                      {renderRatingDots(poly.abrasionResistance)}
                    </td>

                    <td className="py-4 px-4 font-mono text-[11px] text-slate-600 font-medium">
                      {poly.astmClassification}
                    </td>

                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => onOpenRfqWithPolymer(poly.name)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-amber-600 transition-colors"
                      >
                        <span>Spec Quote</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Engineering Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Middle East UV & Ozone Resistance
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              In GCC & desert climates, high ambient ozone and intense solar radiation cause standard rubbers to experience surface micro-cracking within months. We formulate our <strong>EPDM</strong> and <strong>Silicone</strong> compounds with specialized non-staining anti-ozonants compliant with ASTM D1149 (50 pphm @ 40°C).
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-rose-600" />
              Thermal Memory & Compression Set
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Compression set measures the permanent deformation remaining after a seal is compressed. FlexiRub's continuous post-cure vulcanization guarantees compression set ratings under <strong>20% at elevated temperatures</strong>, preventing seal leaks over decades of service.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-2">
            <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-600" />
              Extrusion Tolerances: DIN ISO 3302-1
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              All FlexiRub profiles are extruded to <strong>DIN ISO 3302-1 Class E2</strong> as standard, with precision <strong>Class E1</strong> available for micro-clearance glazing channels and medical fluidics. In-house laser gauging monitors cross-sectional dimensions continuously.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
