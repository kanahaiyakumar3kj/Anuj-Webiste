import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Globe, 
  Building2, 
  MessageSquare,
  FileSpreadsheet
} from 'lucide-react';

interface ContactAndGlobalOfficesProps {
  onOpenRfq: () => void;
}

export const ContactAndGlobalOffices: React.FC<ContactAndGlobalOfficesProps> = ({ onOpenRfq }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('New Product Inquiry / Export Request');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-2">
              <Globe className="w-3.5 h-3.5 text-amber-700" />
              GLOBAL SALES & TECHNICAL INQUIRIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
              Get in Touch with FlexiRub Polymer
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl text-base">
              Speak directly with our technical elastomer engineers or export logistics coordinators for bespoke profiles, wholesale rubber sheets, and contract extrusion.
            </p>
          </div>

          <button
            onClick={onOpenRfq}
            className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xs shrink-0"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Open Dedicated RFQ Form</span>
          </button>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
          
          {/* Left Column: Direct Info & Logistics Hubs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                <span>Direct Contact Channels</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-amber-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-medium">Global Sales & Direct WhatsApp:</div>
                    <a href="tel:+971551568070" className="text-sm font-bold text-white hover:text-amber-400 transition-colors block">
                      +971 55 156 8070
                    </a>
                    <span className="text-xs text-amber-300 block mt-0.5">Direct Line & WhatsApp Active 24/7</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-medium">Official Corporate Email:</div>
                    <a href="mailto:info@flexirubpolymer.com" className="text-sm font-bold text-white hover:text-amber-400 transition-colors block">
                      info@flexirubpolymer.com
                    </a>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      All technical drawings, RFQs & inquiries
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 font-medium">Business Operations:</div>
                    <div className="text-xs font-semibold text-slate-200">
                      Monday - Saturday: 8:00 AM - 6:00 PM (GST, UTC+4)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Emergency 24/7 shutdown & marine fender support available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Hubs Box */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <h4 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-600" />
                Global Offices & Regional Hubs (4 Locations)
              </h4>

              <div className="space-y-3 text-xs">
                <div className="border-l-2 border-amber-500 pl-3">
                  <div className="font-bold text-slate-900">1. Dubai, UAE (Global Headquarters & Plant):</div>
                  <p className="text-slate-600 mt-0.5">
                    Dubai Industrial City & JAFZA Logistics Zone, P.O. Box 48920, Dubai, UAE.<br />
                    <span className="font-mono text-slate-800 font-semibold">Tel / WhatsApp: +971 55 156 8070</span> • <span className="text-slate-700">info@flexirubpolymer.com</span>
                  </p>
                </div>

                <div className="border-l-2 border-amber-500 pl-3">
                  <div className="font-bold text-slate-900">2. India (Operations & Manufacturing Liaison):</div>
                  <p className="text-slate-600 mt-0.5">
                    New Delhi / Mumbai Industrial Corridor, India.<br />
                    <span className="font-mono text-slate-800 font-semibold">Tel / WhatsApp: +971 55 156 8070</span> • <span className="text-slate-700">info@flexirubpolymer.com</span>
                  </p>
                </div>

                <div className="border-l-2 border-slate-300 pl-3">
                  <div className="font-bold text-slate-900">3. Saudi Arabia (KSA Regional Operations):</div>
                  <p className="text-slate-600 mt-0.5">
                    Riyadh & Dammam Regional Operations Hub, Kingdom of Saudi Arabia.<br />
                    <span className="font-mono text-slate-800 font-semibold">Tel / WhatsApp: +971 55 156 8070</span> • <span className="text-slate-700">info@flexirubpolymer.com</span>
                  </p>
                </div>

                <div className="border-l-2 border-slate-300 pl-3">
                  <div className="font-bold text-slate-900">4. United Kingdom (UK & Europe Distribution):</div>
                  <p className="text-slate-600 mt-0.5">
                    London / West Midlands Industrial Zone, United Kingdom.<br />
                    <span className="font-mono text-slate-800 font-semibold">Tel / WhatsApp: +971 55 156 8070</span> • <span className="text-slate-700">info@flexirubpolymer.com</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive General Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 font-display mb-1">
              Send an Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Our engineering support team responds to all technical and commercial inquiries within 24 hours.
            </p>

            {sent ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-display">
                  Inquiry Dispatched Successfully
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>. Your inquiry regarding <em>{subject}</em> has been routed to our technical sales team.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Full Name:</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. David Henderson"
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Company / Organization:</label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Emirates Glass & Facades"
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Corporate Email:</label>
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
                    <label className="block font-semibold text-slate-700 mb-1">Phone / WhatsApp:</label>
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

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Subject / Inquiry Type:</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  >
                    <option value="New Product Inquiry / Export Request">New Product Inquiry / Export Request</option>
                    <option value="Custom Die Extrusion Tooling Feasibility">Custom Die Extrusion Tooling Feasibility</option>
                    <option value="Architectural Glazing Gaskets Specification">Architectural Glazing Gaskets Specification</option>
                    <option value="High-Temp Silicone Tubing & O-Rings">High-Temp Silicone Tubing & O-Rings</option>
                    <option value="Marine Fenders & Port Infrastructure">Marine Fenders & Port Infrastructure</option>
                    <option value="Distributor / Wholesale Partnership">Distributor / Wholesale Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Inquiry Details & Specifications:</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your profile requirements, quantities, operating environment, or project delivery schedule..."
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Send Message to Engineering Team</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
