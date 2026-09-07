import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Loader2, 
  HelpCircle, 
  Flame, 
  Thermometer, 
  Droplet, 
  RefreshCw,
  FileCheck
} from 'lucide-react';

interface AIPolymerAdvisorProps {
  onTransferToRfq: (materialAdvice: string) => void;
}

export const AIPolymerAdvisor: React.FC<AIPolymerAdvisorProps> = ({ onTransferToRfq }) => {
  const [application, setApplication] = useState('');
  const [minTemp, setMinTemp] = useState('-40');
  const [maxTemp, setMaxTemp] = useState('120');
  const [environment, setEnvironment] = useState('Outdoor desert UV, ozone, moisture');
  const [hardness, setHardness] = useState('65-70 Shore A');
  const [requirements, setRequirements] = useState('High tensile durability, ASTM D2000, ISO 9001');
  
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [source, setSource] = useState<string | null>(null);

  const presetScenarios = [
    {
      label: 'Dubai Facade Glazing',
      app: 'Curtain wall structural glazing gasket for high-rise in UAE',
      min: '-10',
      max: '85',
      env: 'Intense desert UV solar radiation, sand abrasion, ozone, thermal expansion cycles',
      hard: '65-70 Shore A',
      req: 'DIN 7863, ASTM C864, zero staining to silicone sealant & glass'
    },
    {
      label: 'Food & Bakery Autoclave',
      app: 'Industrial food baking oven and steam autoclave door gasket',
      min: '-50',
      max: '240',
      env: 'Pressurized steam, food fats, repeated high thermal cycles',
      hard: '60 Shore A',
      req: 'FDA 21 CFR 177.2600, non-toxic, odorless, steam resistant'
    },
    {
      label: 'Refinery Hydrocarbon Seal',
      app: 'Flange gasket for petroleum refinery fuel lines & diesel pumps',
      min: '-20',
      max: '120',
      env: 'Direct contact with diesel fuel, crude oil, hydraulic oils, aliphatic hydrocarbons',
      hard: '70 Shore A',
      req: 'ASTM D2000 M2BG 714, low volume swell in ASTM Oil #3'
    },
    {
      label: 'Marine Berth Bumper',
      app: 'Harbor dock bumper for commercial container terminal',
      min: '-15',
      max: '70',
      env: 'Seawater immersion, barnacle abrasion, heavy ship berthing impact',
      hard: '65-70 Shore A',
      req: 'PIANC 2002 guidelines, maximum kinetic energy absorption'
    }
  ];

  const handleApplyPreset = (preset: typeof presetScenarios[0]) => {
    setApplication(preset.app);
    setMinTemp(preset.min);
    setMaxTemp(preset.max);
    setEnvironment(preset.env);
    setHardness(preset.hard);
    setRequirements(preset.req);
  };

  const handleConsultEngineer = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/polymer-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          application,
          minTemp,
          maxTemp,
          environment,
          hardness,
          requirements
        })
      });

      const data = await res.json();
      if (data.recommendation) {
        setRecommendation(data.recommendation);
        setSource(data.source || 'gemini-ai');
      }
    } catch (err) {
      console.error('Advisor request error:', err);
      // Fallback local synthesis
      setRecommendation(`### FlexiRub Polymer Engineering Specifier Result\n\n**Compound Recommended:** High-Performance EPDM / Synthetic Elastomer\n**Operating Range:** ${minTemp}°C to ${maxTemp}°C\n**Hardness:** ${hardness}\n**Analysis:** Formulated for superior resilience under stated conditions: ${environment}.\n**Next Step:** Submit drawing or sample request to FlexiRub technical lab.`);
      setSource('rules-engine');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-16 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
      
      {/* Blueprint Grid Watermark */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              INTELLIGENT MATERIALS SPECIFIER
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display">
              AI Elastomer & Compound Technical Advisor
            </h2>
            <p className="text-slate-300 mt-2 max-w-2xl text-base">
              Describe your operating environment, mechanical stresses, and temperature conditions. Our engineering model evaluates ASTM D2000 standards and recommends the optimal polymer compound, durometer, and manufacturing method.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>FlexiRub Polymer AI v3.8 Flash</span>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="my-6">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Load Common Industrial Scenarios:
          </div>
          <div className="flex flex-wrap gap-2">
            {presetScenarios.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleApplyPreset(preset)}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-amber-400/40 transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Form & Recommendation Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Input Form Column */}
          <div className="lg:col-span-5 bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
              <span>Application Parameters</span>
            </h3>

            <form onSubmit={handleConsultEngineer} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Target Application / Profile Function:
                </label>
                <input
                  type="text"
                  value={application}
                  onChange={(e) => setApplication(e.target.value)}
                  placeholder="e.g., Facade curtain wall glazing gasket, oven door seal..."
                  className="w-full px-3 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Min Temp (°C):
                  </label>
                  <input
                    type="number"
                    value={minTemp}
                    onChange={(e) => setMinTemp(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Max Temp (°C):
                  </label>
                  <input
                    type="number"
                    value={maxTemp}
                    onChange={(e) => setMaxTemp(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Environment / Media / Chemical Exposure:
                </label>
                <textarea
                  rows={2}
                  value={environment}
                  onChange={(e) => setEnvironment(e.target.value)}
                  placeholder="e.g. UV, ozone, steam, mineral oil, hydrochloric acid, seawater..."
                  className="w-full px-3 py-2 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Target Hardness:
                  </label>
                  <select
                    value={hardness}
                    onChange={(e) => setHardness(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="25-30 Shore A (Very Soft Sponge)">25-30 Shore A (Soft Sponge)</option>
                    <option value="40-50 Shore A (Flexible Seal)">40-50 Shore A (Flexible Seal)</option>
                    <option value="60-70 Shore A (Standard Gasket)">60-70 Shore A (Standard Gasket)</option>
                    <option value="75-85 Shore A (Semi-Rigid Channel)">75-85 Shore A (Rigid Channel)</option>
                    <option value="90+ Shore A (High Modulus Bushing)">90+ Shore A (Hard Wear Pad)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Key Standards Needed:
                  </label>
                  <input
                    type="text"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="e.g. DIN 7863, FDA, UL94"
                    className="w-full px-3 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Analyzing Polymer Rheology & Standards...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Generate Technical Compound Recommendation</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Recommendation Output Column */}
          <div className="lg:col-span-7 bg-slate-800/50 p-6 rounded-2xl border border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-amber-400" />
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-300 font-bold">
                    TECHNICAL RECOMMENDATION DOSSIER
                  </span>
                </div>
                {source && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-700 text-amber-300">
                    Engine: {source}
                  </span>
                )}
              </div>

              {recommendation ? (
                <div className="mt-4 prose prose-invert max-w-none text-xs leading-relaxed space-y-3 font-sans">
                  <div className="whitespace-pre-wrap text-slate-200 bg-slate-950/60 p-4 rounded-xl border border-slate-800 font-mono text-[12px] leading-relaxed overflow-x-auto">
                    {recommendation}
                  </div>
                </div>
              ) : (
                <div className="py-16 text-center space-y-3">
                  <Cpu className="w-12 h-12 text-slate-600 mx-auto animate-pulse" />
                  <h4 className="text-base font-bold text-slate-300 font-display">
                    Awaiting Application Specification
                  </h4>
                  <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                    Select a preset above or input your temperature range, chemical media, and durometer to generate a certified compound recommendation for FlexiRub Polymer manufacturing.
                  </p>
                  <button
                    onClick={() => handleConsultEngineer()}
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 pt-2"
                  >
                    <span>Run Sample Analysis with Current Inputs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {recommendation && (
              <div className="pt-4 border-t border-slate-700 flex flex-wrap items-center justify-between gap-3 mt-4">
                <div className="text-xs text-slate-400">
                  Ready to proceed with prototyping or commercial quotation?
                </div>
                <button
                  onClick={() => onTransferToRfq(recommendation)}
                  className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>Transfer Advice into Formal RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
