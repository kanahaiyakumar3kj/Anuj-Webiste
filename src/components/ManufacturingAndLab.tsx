import React from 'react';
import { 
  Factory, 
  FlaskConical, 
  Award, 
  CheckCircle, 
  Gauge, 
  Cpu, 
  Microscope, 
  Scale, 
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';

export const ManufacturingAndLab: React.FC = () => {
  const capabilities = [
    {
      title: 'Continuous Microwave Vulcanization (UHF)',
      desc: 'Four high-speed continuous microwave extrusion lines capable of vulcanizing complex multi-lumen EPDM profiles and sponge weatherstripping with uninterrupted longitudinal uniformity.',
      stat: '4 Lines • 1,200 kg/hr'
    },
    {
      title: 'Hot Air Vulcanization (HAV) for Silicone',
      desc: 'Controlled cleanroom vertical and horizontal hot air vulcanization tunnels for food-grade, platinum-cured silicone tubing and high-temperature profiles up to 250°C.',
      stat: 'Cleanroom Class 10,000'
    },
    {
      title: 'In-House CNC Wire EDM Die Tooling',
      desc: 'Equipped with ultra-precise CNC wire electrical discharge machines (EDM) and high-speed milling centers to cut custom extrusion dies from hardened tool steel in 24 to 48 hours.',
      stat: '24-48 hr Rapid Die Cutting'
    },
    {
      title: 'Heavy Hydraulic Compression Moulding',
      desc: 'Precision hydraulic compression and transfer presses ranging from 50-ton to 800-ton clamp force for large-format bridge bearing pads, marine fenders, and custom diaphragms.',
      stat: '50T to 800T Press Range'
    },
    {
      title: 'Tri-Extrusion & Flocking Lines',
      desc: 'Multi-compound extrusion combining rigid carrier cores, flexible sealing lips, closed-cell sponge bulbs, and electrostatic nylon flocking for automotive window channels.',
      stat: 'Tri-Compound Co-Extrusion'
    },
    {
      title: 'Cryogenic Deflashing Finishing',
      desc: 'Automated liquid nitrogen tumbling systems that freeze and cleanly blast away micro-flash from intricate moulded rubber components without altering dimensional tolerances.',
      stat: '100% Flash-Free Precision'
    }
  ];

  const labTests = [
    {
      test: 'Rheometer Cure Kinetics',
      standard: 'ASTM D5289',
      desc: 'Monitors minimum/maximum torque, scorch time, and 90% vulcanization state for each batch.'
    },
    {
      test: 'Tensile Strength & Elongation',
      standard: 'ASTM D412 / DIN 53504',
      desc: 'Automated universal tensile testing ensuring elastomeric elongation up to 600% with high tensile yield.'
    },
    {
      test: 'Accelerated Ozone Chamber',
      standard: 'ASTM D1149',
      desc: 'Subjecting test specimens to 50 to 100 pphm ozone at 40°C for 72 hours to guarantee zero surface cracking in desert environments.'
    },
    {
      test: 'Compression Set Under Heat',
      standard: 'ASTM D395 Method B',
      desc: 'Testing elastic memory and sealing recovery under continuous 25% deflection at 70°C and 150°C.'
    },
    {
      test: 'Dimensional Laser Inspection',
      standard: 'DIN ISO 3302-1 E1/E2',
      desc: 'Continuous non-contact optical comparator and laser micrometers measuring profile cross-sections in real-time.'
    },
    {
      test: 'Specific Gravity & Hardness',
      standard: 'ASTM D792 / DIN ISO 7619',
      desc: 'Precision digital densimeter and Shore A durometers verifying batch compound density and hardness.'
    }
  ];

  return (
    <section id="plant-quality" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-2">
              <Factory className="w-3.5 h-3.5 text-amber-700" />
              MANUFACTURING INFRASTRUCTURE & QA
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
              Advanced Plant Capabilities & Testing Lab
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl text-base">
              Precision polymer engineering backed by state-of-the-art continuous vulcanization extrusion lines, in-house tooling CNCs, and fully equipped analytical rubber laboratories.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs font-bold text-slate-900 font-mono">ISO 9001:2015</div>
              <div className="text-[11px] text-slate-500">Certified Quality Management</div>
            </div>
          </div>
        </div>

        {/* Plant Capabilities Grid */}
        <div className="my-12">
          <h3 className="text-lg font-bold text-slate-900 font-display mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-amber-600" />
            Manufacturing & Vulcanization Infrastructure
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {cap.stat}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">0{idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In-House Quality & Lab Testing Section */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold mb-1 flex items-center gap-2">
                <FlaskConical className="w-4 h-4" />
                CENTRAL POLYMER TESTING LABORATORY
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                Every Batch Verified to International Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                We provide complete Mill Test Certificates (MTC), dimensional CMM reports, and material traceability with every dispatched order.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 bg-slate-800 rounded border border-slate-700 font-mono text-slate-300">ASTM D2000</span>
              <span className="px-3 py-1 bg-slate-800 rounded border border-slate-700 font-mono text-slate-300">DIN 7863</span>
              <span className="px-3 py-1 bg-slate-800 rounded border border-slate-700 font-mono text-slate-300">FDA 21 CFR</span>
              <span className="px-3 py-1 bg-slate-800 rounded border border-slate-700 font-mono text-slate-300">UL94-V0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {labTests.map((test, idx) => (
              <div key={idx} className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 font-mono">{test.standard}</span>
                  <Microscope className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-sm font-bold text-white font-display">{test.test}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{test.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
