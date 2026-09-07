import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Target, 
  Compass, 
  Factory, 
  Globe2, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Layers, 
  Flame, 
  Microscope,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';

interface AboutUsPageProps {
  onNavigateHome: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenRfq: () => void;
  onOpenSampleModal: () => void;
  onNavigateContact: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onNavigateHome,
  onNavigateToSection,
  onOpenRfq,
  onOpenSampleModal,
  onNavigateContact
}) => {
  const milestones = [
    {
      year: 'Founding',
      title: 'Precision Tooling & Extrusion Origin',
      desc: 'Established with specialized continuous vulcanization lines to serve heavy infrastructure, aluminum facade systems, and industrial marine projects.'
    },
    {
      year: 'Expansion',
      title: 'In-House CNC Wire EDM Die Workshop',
      desc: 'Commissioned high-precision Swiss Wire EDM cutting and milling tooling center, reducing custom die development turnaround from weeks to 24-48 hours.'
    },
    {
      year: 'Quality Benchmark',
      title: 'ISO 9001 & Central Polymer QA Lab',
      desc: 'Achieved ISO 9001:2015 certification and instituted full analytical testing: Moving Die Rheometer (MDR), Ozone Environmental Chamber, and Tensile Testers.'
    },
    {
      year: 'Global Reach',
      title: 'Middle East Hub & Worldwide Export',
      desc: 'Operationalized state-of-the-art export logistics through Jebel Ali Port (JAFZA), distributing engineered polymers across GCC, Europe, Asia, and the Americas.'
    }
  ];

  const coreValues = [
    {
      title: 'Zero-Defect Sealing Precision',
      desc: 'Strict adherence to DIN ISO 3302-1 Class E1 and E2 dimensional tolerances with real-time laser micrometer inspection during extrusion.',
      icon: <Target className="w-5 h-5 text-amber-500" />
    },
    {
      title: 'Desert Climate & Severe UV Resilience',
      desc: 'Formulating polymers with proprietary anti-ozonants engineered specifically to resist extreme Middle Eastern thermal cycles and high solar radiation.',
      icon: <Flame className="w-5 h-5 text-rose-500" />
    },
    {
      title: 'Certified Compound Traceability',
      desc: '100% batch traceability with verifiable raw polymers, complying with ASTM D2000, DIN 7863, FDA 21 CFR 177.2600, and RoHS/REACH.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'Agile Custom Engineering',
      desc: 'Rapid design validation, technical CAD consultation, prototype sampling, and scalable bulk production for OEM contractors worldwide.',
      icon: <Compass className="w-5 h-5 text-blue-500" />
    }
  ];

  const leadershipCommitments = [
    'Direct access to senior elastomer materials scientists and tooling engineers.',
    'Batch Mill Test Certificates (MTC) supplied with every production consignment.',
    'Complimentary engineering sample kits dispatched via international express couriers.',
    'Flexible manufacturing runs accommodating both trial prototypes and multi-kilometer project orders.'
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Breadcrumbs Banner */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-400">
          <button 
            onClick={onNavigateHome} 
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-semibold">About FlexiRub Polymer</span>
        </div>
      </div>

      {/* About Us Hero Section */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Background Grid & Ambient Glow */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Building2 className="w-3.5 h-3.5" />
              COMPANY PROFILE & ENGINEERING HERITAGE
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display leading-tight">
              Engineering the World's Most Resilient Elastomer Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              FlexiRub Polymer (<strong className="text-white font-semibold">flexirubpolymer.com</strong>) is an international manufacturer and supplier of precision-extruded EPDM gaskets, silicone profiles, industrial rubber sheets, and bespoke moulded elastomeric components.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs">
              <button
                onClick={onOpenRfq}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Request Commercial Quotation</span>
              </button>
              <button
                onClick={onNavigateContact}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Contact Corporate Team</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">2,500+</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Standard & Custom Extrusion Dies</div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">45+</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Global Export Destinations</div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">1,200 kg/h</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Vulcanization Extrusion Capacity</div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">ISO 9001</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">2015 Registered Quality Standard</div>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Overview & Mission / Vision */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900">
                <Layers className="w-3.5 h-3.5 text-amber-700" />
                ABOUT FLEXIRUB POLYMER
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
                Dedicated to High-Integrity Sealing for Modern Infrastructure
              </h2>
              <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
                <p>
                  At <strong>FlexiRub Polymer</strong>, we specialize in the engineering, compounding, extrusion, and moulding of performance elastomers. Our technical team works alongside facade consultants, aluminum curtain-wall fabricators, marine berth authorities, and industrial plant managers worldwide.
                </p>
                <p>
                  We recognize that in demanding climates—such as the intense heat, extreme ultraviolet radiation, and sand abrasion of the Middle East and GCC—conventional rubber profiles deteriorate prematurely. To counter this, our compounding laboratories formulate specialized EPDM and Silicone compounds incorporating high-grade anti-ozonants, high-structure carbon blacks, and heat-stabilized cure systems that deliver a certified 30+ year lifespan.
                </p>
                <p>
                  With facilities equipped for <strong>Continuous Microwave Vulcanization (UHF)</strong>, <strong>Hot Air Vulcanization (HAV)</strong>, and an <strong>in-house CNC Wire EDM die tooling division</strong>, FlexiRub Polymer transforms CAD blueprints into precision prototypes in days rather than weeks.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-100 px-3 py-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>ASTM D2000 Material Classifications</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-100 px-3 py-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>DIN 7863 Structural Glazing Compliance</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-100 px-3 py-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>FDA 21 CFR 177.2600 Food Contact Grade</span>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-amber-400">
                  <Compass className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">OUR CORPORATE VISION</span>
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  The Global Benchmark in Engineered Elastomers
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To be recognized across the Middle East, Europe, and international markets as the most dependable and technically progressive elastomer manufacturer, providing zero-leakage sealing security for landmark architecture, mass transportation, and heavy industries.
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 text-slate-900 space-y-3">
                <div className="flex items-center gap-2 text-amber-800">
                  <Target className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">OUR MISSION</span>
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900">
                  Precision, Longevity & Responsive Engineering
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  To empower engineers and contractors by coupling responsive in-house tooling with certified materials science, guaranteeing seamless delivery from first-article CAD prototype to high-volume continuous vulcanization.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Core Pillars / Values Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto pb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              OUR COMMITMENT TO CRAFTSMANSHIP
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
              Four Pillars of FlexiRub Quality
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Every meter of rubber that departs our production lines is subject to uncompromising materials science and dimensional tolerances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all space-y-3"
              >
                <div className="p-2.5 rounded-xl bg-slate-50 w-fit border border-slate-100">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Historical Milestones */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-600 font-mono mb-1">
                JOURNEY & PROGRESSION
              </div>
              <h2 className="text-3xl font-black text-slate-900 font-display">
                Milestones in Polymer Engineering
              </h2>
            </div>
            <button
              onClick={onOpenSampleModal}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors shrink-0"
            >
              Order Engineering Sample Kit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <div className="font-mono font-bold text-xs text-amber-700 bg-amber-50 px-2.5 py-1 rounded w-fit border border-amber-200">
                  {m.year}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Presence & Regional Logistics */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <Globe2 className="w-3.5 h-3.5" />
                GLOBAL DISTRIBUTION & STRATEGIC HUBS
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
                Strategic Logistics Hub in Dubai for Global Fast-Track Dispatch
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Positioned strategically within the United Arab Emirates with immediate access to <strong>Jebel Ali Free Zone (JAFZA)</strong>—one of the world's busiest container transshipment ports—FlexiRub Polymer ships consolidated container loads and rapid air freight consignments directly to key hubs in Saudi Arabia, Qatar, Oman, Kuwait, Egypt, the UK, Germany, and North America.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300">
                {leadershipCommitments.map((commit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{commit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onNavigateContact}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Connect with Global Sales Team</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700 space-y-5">
              <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-400" />
                Corporate & Industrial Offices
              </h3>

              <div className="space-y-3 text-xs">
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-700 space-y-1">
                  <div className="font-bold text-white text-sm">1. Dubai, UAE (Head Office & Plant Logistics)</div>
                  <div className="text-slate-400">
                    Dubai Industrial City & Jebel Ali Free Zone (JAFZA), Dubai, United Arab Emirates
                  </div>
                  <div className="text-amber-400 font-mono pt-0.5">
                    Tel / WhatsApp: +971 55 156 8070 | info@flexirubpolymer.com
                  </div>
                </div>

                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-700 space-y-1">
                  <div className="font-bold text-white text-sm">2. India (Operations & Manufacturing Liaison)</div>
                  <div className="text-slate-400">
                    New Delhi / Mumbai Industrial Corridor, India
                  </div>
                  <div className="text-amber-400 font-mono pt-0.5">
                    Tel / WhatsApp: +971 55 156 8070 | info@flexirubpolymer.com
                  </div>
                </div>

                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-700 space-y-1">
                  <div className="font-bold text-white text-sm">3. Saudi Arabia (KSA Regional Operations)</div>
                  <div className="text-slate-400">
                    Riyadh & Dammam Industrial Zone, Kingdom of Saudi Arabia
                  </div>
                  <div className="text-amber-400 font-mono pt-0.5">
                    Tel / WhatsApp: +971 55 156 8070 | info@flexirubpolymer.com
                  </div>
                </div>

                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-700 space-y-1">
                  <div className="font-bold text-white text-sm">4. United Kingdom (UK & Europe Distribution)</div>
                  <div className="text-slate-400">
                    London / West Midlands Industrial Zone, United Kingdom
                  </div>
                  <div className="text-amber-400 font-mono pt-0.5">
                    Tel / WhatsApp: +971 55 156 8070 | info@flexirubpolymer.com
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold font-display text-slate-900">
            Have a Technical Gasket or Extrusion Requirement?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Our materials scientists and CAD tooling specialists are available to review your drawings and provide full engineering recommendations within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenRfq}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-colors"
            >
              <span>Submit RFQ / CAD Drawing</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
            <button
              onClick={onNavigateContact}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xs transition-colors"
            >
              <span>Visit Contact Us Page</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
