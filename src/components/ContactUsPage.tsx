import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Globe2, 
  FileSpreadsheet, 
  Package, 
  HelpCircle, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

interface ContactUsPageProps {
  onNavigateHome: () => void;
  onOpenRfq: () => void;
  onOpenSampleModal: () => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({
  onNavigateHome,
  onOpenRfq,
  onOpenSampleModal
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('Technical Sales & Quotations');
  const [polymerType, setPolymerType] = useState('EPDM Rubber');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    {
      title: 'Commercial & Technical Sales',
      desc: 'Price inquiries, volume tenders, contract extrusion agreements, and general commercial support.',
      email: 'info@flexirubpolymer.com',
      phone: '+971 55 156 8070'
    },
    {
      title: 'India Operations & Sourcing Desk',
      desc: 'Domestic supply, South Asian logistics, technical CAD review, and India customer support.',
      email: 'info@flexirubpolymer.com',
      phone: '+971 55 156 8070'
    },
    {
      title: 'Global Export & Shipping (JAFZA)',
      desc: 'FCL container loading, air freight expediting, LC processing, and port documentation via Jebel Ali Port.',
      email: 'info@flexirubpolymer.com',
      phone: '+971 55 156 8070'
    },
    {
      title: 'QA & Central Polymer Lab',
      desc: 'Mill Test Certificates (MTC), rheology data, ozone chamber compliance, and ASTM/DIN test reports.',
      email: 'info@flexirubpolymer.com',
      phone: '+971 55 156 8070'
    }
  ];

  const faqs = [
    {
      q: 'What is the typical turnaround time for custom extrusion die tooling?',
      a: 'Using our in-house high-speed CNC Wire EDM tooling division, custom extrusion dies are designed and manufactured within 24 to 48 hours. First-article extruded samples are typically ready for client inspection in 3 to 5 business days.'
    },
    {
      q: 'Do you provide batch Mill Test Certificates (MTC) with shipments?',
      a: 'Yes. Every dispatched consignment is accompanied by an authenticated Mill Test Certificate verifying specific gravity, Shore A hardness (DIN ISO 7619), tensile strength (ASTM D412), elongation at break, and dimensional CMM tolerances.'
    },
    {
      q: 'What are the minimum order quantities (MOQ)?',
      a: 'We offer flexible production tiers. Standard catalog profiles can be ordered in quantities as low as 200–500 meters, while custom formulations or continuous contract supply can scale to hundreds of thousands of meters per month.'
    },
    {
      q: 'What shipping and export incoterms do you support?',
      a: 'We routinely export under EXW, FOB Jebel Ali, CIF, CFR, and DAP incoterms to the GCC (Saudi Arabia, Qatar, Oman, Kuwait, Bahrain), Europe, North America, and worldwide destinations.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <span className="text-amber-400 font-semibold">Contact Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-14 sm:py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Phone className="w-3.5 h-3.5" />
              GLOBAL SALES & TECHNICAL DESK
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
              Contact FlexiRub Polymer
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Connect directly with our engineering team, CAD die specialists, and international export logistics coordinators at <strong className="text-white font-semibold">flexirubpolymer.com</strong>.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM (GST, UTC+4)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700">
                <Globe2 className="w-3.5 h-3.5 text-amber-400" />
                <span>4 Global Offices: UAE • India • Saudi Arabia • UK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Department Directory Grid */}
        <div className="mb-14">
          <h2 className="text-xl font-bold font-display text-slate-900 mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-600" />
            Direct Department Contacts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => (
              <div 
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="font-bold text-sm text-slate-900 font-display">{dept.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{dept.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 space-y-1 text-xs">
                  <a href={`mailto:${dept.email}`} className="text-slate-700 hover:text-amber-600 font-medium block truncate">
                    {dept.email}
                  </a>
                  <a href={`tel:${dept.phone.replace(/\s+/g, '')}`} className="font-mono font-semibold text-slate-900 hover:text-amber-600 block">
                    {dept.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form and Facility Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Send Technical Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete the form below for rapid commercial proposal and drawing evaluation.
                </p>
              </div>
              <button
                onClick={onOpenRfq}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold hover:bg-amber-100"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-amber-700" />
                <span>Open Full RFQ</span>
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-display">
                  Message Dispatched Successfully
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>. Your inquiry for <em>{department}</em> has been assigned a priority engineering ticket. Our team will contact you within 24 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tariq Al-Hashimi"
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Emirates Glass & Facades LLC"
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="procurement@company.com"
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 xxx xxxx"
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Target Department:
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    >
                      <option value="Technical Sales & Quotations">Technical Sales & Quotations</option>
                      <option value="CAD Tooling & Custom Dies">CAD Tooling & Custom Dies</option>
                      <option value="Global Export & Shipping (JAFZA)">Global Export & Shipping (JAFZA)</option>
                      <option value="QA & Mill Test Certificates">QA & Mill Test Certificates</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Primary Polymer Interest:
                    </label>
                    <select
                      value={polymerType}
                      onChange={(e) => setPolymerType(e.target.value)}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    >
                      <option value="EPDM Rubber">EPDM (Glazing & Weathering)</option>
                      <option value="Silicone Extrusion">Silicone (High Temp & Food FDA)</option>
                      <option value="Nitrile NBR">Nitrile NBR (Petroleum & Fuel)</option>
                      <option value="Neoprene CR">Neoprene CR (Marine & Flame)</option>
                      <option value="Viton FKM">Viton® FKM (Chemicals & Acids)</option>
                      <option value="Industrial Rubber Sheets">Industrial Rubber Sheets</option>
                      <option value="Custom Moulded Component">Custom Moulded Component</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Project Details & Technical Specifications *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specify dimensions, estimated quantities in meters, temperature conditions, or reference standards..."
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    * All technical drawings are protected under mutual NDA.
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Physical Facility & Logistics Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Facility Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs uppercase font-mono text-amber-400 font-bold tracking-wider">
                    OPERATIONAL HEADQUARTERS
                  </span>
                  <h3 className="text-lg font-bold font-display text-white mt-1">
                    Dubai Industrial Plant & Logistics
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Facility Address:</strong>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">
                      FlexiRub Polymer Manufacturing Complex<br />
                      Dubai Industrial City & JAFZA Logistics Zone<br />
                      P.O. Box 48920, Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Direct Phone & WhatsApp:</strong>
                    <p className="text-slate-300 mt-0.5 font-mono">
                      <a href="tel:+971551568070" className="hover:text-amber-400 transition-colors">+971 55 156 8070</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Official Corporate Email:</strong>
                    <p className="text-slate-300 mt-0.5 font-mono">
                      <a href="mailto:info@flexirubpolymer.com" className="hover:text-amber-400 transition-colors">info@flexirubpolymer.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Hours of Operation:</strong>
                    <p className="text-slate-300 mt-0.5">
                      Monday - Saturday: 8:00 AM - 6:00 PM GST<br />
                      Sunday: Emergency project dispatch on call
                    </p>
                  </div>
                </div>
              </div>

              {/* Sample Box Action inside contact card */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-300">Need physical samples?</span>
                <button
                  onClick={onOpenSampleModal}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>Order Sample Box</span>
                </button>
              </div>
            </div>

            {/* Global Offices: Dubai, India, Saudi Arabia, UK */}
            <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 space-y-4 text-xs">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-600" />
                <span>Global Office Locations (4 Locations)</span>
              </div>
              
              <div className="space-y-3">
                <div className="border-l-2 border-amber-500 pl-3">
                  <div className="font-bold text-slate-900">1. Dubai, UAE (Global Headquarters & Plant):</div>
                  <p className="text-slate-600 mt-0.5">
                    Dubai Industrial City & JAFZA Logistics Zone, P.O. Box 48920, Dubai, UAE.<br />
                    <span className="font-mono text-slate-800 font-semibold">Tel / WhatsApp: +971 55 156 8070</span> • info@flexirubpolymer.com
                  </p>
                </div>

                <div className="border-l-2 border-amber-500 pl-3">
                  <div className="font-bold text-slate-900">2. India (Operations & Manufacturing Liaison):</div>
                  <p className="text-slate-600 mt-0.5">
                    New Delhi / Mumbai Industrial Corridor, India.<br />
                    <span className="font-mono text-slate-800 font-semibold">Tel / WhatsApp: +971 55 156 8070</span> • info@flexirubpolymer.com
                  </p>
                </div>

                <div className="border-l-2 border-slate-300 pl-3">
                  <div className="font-bold text-slate-900">3. Saudi Arabia (KSA Regional Operations):</div>
                  <p className="text-slate-600 mt-0.5">
                    Riyadh & Dammam Regional Operations Hub, Kingdom of Saudi Arabia.<br />
                    <span className="font-mono text-slate-800 font-semibold">Tel / WhatsApp: +971 55 156 8070</span> • info@flexirubpolymer.com
                  </p>
                </div>

                <div className="border-l-2 border-slate-300 pl-3">
                  <div className="font-bold text-slate-900">4. United Kingdom (UK & Europe Distribution):</div>
                  <p className="text-slate-600 mt-0.5">
                    London / West Midlands Industrial Zone, United Kingdom.<br />
                    <span className="font-mono text-slate-800 font-semibold">Tel / WhatsApp: +971 55 156 8070</span> • info@flexirubpolymer.com
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Frequently Asked Questions Section */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 font-mono mb-1">
              ENGINEERING & PROCUREMENT FAQ
            </div>
            <h2 className="text-2xl font-black text-slate-900 font-display">
              Common Questions About Ordering & Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <div className="font-bold text-sm text-slate-900 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
