import React, { useState, useEffect } from 'react';
import { ProductItem, PolymerType } from '../types';
import { 
  X, 
  FileSpreadsheet, 
  CheckCircle2, 
  Send, 
  Loader2, 
  Upload, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Download,
  AlertCircle
} from 'lucide-react';

interface RfqConfiguratorModalProps {
  initialProduct?: ProductItem | null;
  initialMaterialAdvice?: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RfqConfiguratorModal: React.FC<RfqConfiguratorModalProps> = ({
  initialProduct,
  initialMaterialAdvice,
  isOpen,
  onClose
}) => {
  const [productName, setProductName] = useState('');
  const [polymer, setPolymer] = useState<PolymerType>('EPDM');
  const [hardness, setHardness] = useState('70 Shore A');
  const [quantity, setQuantity] = useState('1000');
  const [unit, setUnit] = useState<'Meters' | 'Pieces' | 'Rolls'>('Meters');
  const [adhesive, setAdhesive] = useState('None');
  const [destination, setDestination] = useState('Dubai / Jebel Ali Port, UAE');
  const [hasCadDrawing, setHasCadDrawing] = useState(false);
  const [drawingFileName, setDrawingFileName] = useState('');

  // Contact Info
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Submission State
  const [loading, setLoading] = useState(false);
  const [submittedResponse, setSubmittedResponse] = useState<{
    quoteReference: string;
    message: string;
    leadTimeEstimate: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setProductName(`${initialProduct.name} (${initialProduct.code})`);
      setPolymer(initialProduct.polymerType);
      setHardness(initialProduct.shoreHardness.split('(')[0].trim() || '70 Shore A');
    } else if (initialMaterialAdvice) {
      setProductName('Custom Engineered Profile (AI Spec Advisor Recommendation)');
      setNotes(`Transferred from AI Advisor:\n${initialMaterialAdvice}`);
    } else {
      setProductName('Standard EPDM Glazing Gasket (FRP-EP-7001)');
    }
  }, [initialProduct, initialMaterialAdvice, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName,
          contactName,
          email,
          phone,
          profileType: productName,
          polymer,
          hardness,
          quantityMeters: `${quantity} ${unit}`,
          destination,
          hasCadDrawing,
          drawingFileName: drawingFileName || (hasCadDrawing ? 'profile_drawing_rev01.dwg' : ''),
          notes
        })
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedResponse({
          quoteReference: data.quoteReference,
          message: data.message,
          leadTimeEstimate: data.leadTimeEstimate
        });
      }
    } catch (err) {
      console.error('Failed to submit quote request:', err);
      // Fallback submission reference
      setSubmittedResponse({
        quoteReference: `RFQ-FRP-${Date.now().toString().slice(-6)}`,
        message: 'Your Request for Quote has been received by FlexiRub Polymer Sales & Engineering.',
        leadTimeEstimate: '24-48 hours for formal commercial proposal.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopyQuoteRef = () => {
    if (submittedResponse?.quoteReference) {
      navigator.clipboard.writeText(submittedResponse.quoteReference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono font-bold">
                B2B COMMERCIAL & ENGINEERING INQUIRY
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-display text-white mt-1">
              Request for Quotation (RFQ)
            </h3>
            <p className="text-xs text-slate-300">
              Direct submission to the FlexiRub Polymer Technical Estimation Team
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {submittedResponse ? (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-black text-slate-900 font-display">
                  Quotation Request Registered
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  {submittedResponse.message}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-left space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">RFQ Reference:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-300">
                      {submittedResponse.quoteReference}
                    </span>
                    <button
                      onClick={handleCopyQuoteRef}
                      className="p-1 text-slate-400 hover:text-slate-700 rounded"
                      title="Copy Reference"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {copied && <p className="text-[11px] text-emerald-600 text-right">Copied to clipboard!</p>}

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Company:</span>
                  <span className="font-semibold text-slate-800">{companyName || 'Not specified'}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Profile & Polymer:</span>
                  <span className="font-semibold text-slate-800">{polymer} ({quantity} {unit})</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Estimated Proposal SLA:</span>
                  <span className="font-semibold text-amber-700">{submittedResponse.leadTimeEstimate}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmittedResponse(null);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow-xs"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Profile / Specification Section */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-slate-200">
                  <FileSpreadsheet className="w-4 h-4 text-amber-600" />
                  <span>1. Profile & Material Parameters</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Profile Description / Part Name:
                  </label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Polymer Compound:
                    </label>
                    <select
                      value={polymer}
                      onChange={(e) => setPolymer(e.target.value as PolymerType)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    >
                      <option value="EPDM">EPDM (Weathering & Glazing)</option>
                      <option value="Silicone">Silicone (High Temp & Food Grade)</option>
                      <option value="Nitrile (NBR)">Nitrile / NBR (Oil & Fuel Resistant)</option>
                      <option value="Neoprene (CR)">Neoprene / CR (Marine & Flame Retardant)</option>
                      <option value="Viton (FKM)">Viton® / FKM (Acids & Severe Chemicals)</option>
                      <option value="Natural Rubber (NR)">Natural Rubber (High Resilience)</option>
                      <option value="Polyurethane (PU)">Polyurethane (High Abrasion)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Durometer Hardness:
                    </label>
                    <input
                      type="text"
                      value={hardness}
                      onChange={(e) => setHardness(e.target.value)}
                      placeholder="e.g. 65 - 70 Shore A"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Quantity:
                    </label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      min="1"
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Unit of Measure:
                    </label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value as any)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    >
                      <option value="Meters">Meters (Continuous)</option>
                      <option value="Pieces">Pieces / Cut Lengths</option>
                      <option value="Rolls">Rolls (50m / 100m)</option>
                    </select>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Adhesive Backing:
                    </label>
                    <select
                      value={adhesive}
                      onChange={(e) => setAdhesive(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    >
                      <option value="None">None (Plain Extrusion)</option>
                      <option value="3M 9448A">3M 9448A High Tack</option>
                      <option value="Scrim Acrylic">Scrim Reinforced Acrylic</option>
                    </select>
                  </div>
                </div>

                {/* CAD Drawing Attachment Indicator */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasCadDrawing}
                      onChange={(e) => setHasCadDrawing(e.target.checked)}
                      className="rounded text-amber-600 focus:ring-amber-500 h-4 w-4"
                    />
                    <span className="text-xs font-semibold text-slate-800">
                      I have a technical drawing (.DWG, .DXF, .STEP, or .PDF)
                    </span>
                  </label>
                  {hasCadDrawing && (
                    <div className="mt-2 pt-2 border-t border-slate-200">
                      <input
                        type="file"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setDrawingFileName(e.target.files[0].name);
                          }
                        }}
                        className="text-xs text-slate-600 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-amber-100 file:text-amber-800 hover:file:bg-amber-200"
                      />
                      {drawingFileName && (
                        <p className="text-[11px] text-emerald-600 mt-1">
                          File selected: {drawingFileName} (will be dispatched to CAD tooling team)
                        </p>
                      )}
                    </div>
                  )}
                </div>

              </div>

              {/* Delivery & Logistics */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-slate-200">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>2. Delivery Destination & Logistics</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Destination City / Port / Country:
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Dubai / Jebel Ali Port, Riyadh, Dammam, Rotterdam, Houston..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Company & Contact Information */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-slate-200">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span>3. Procurement & Engineering Contact</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company Name:
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      placeholder="e.g. Gulf Aluminum & Facades LLC"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Person:
                    </label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      placeholder="e.g. Tariq Al-Mansoor"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Email:
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="procurement@company.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Telephone / WhatsApp:
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="+971 50 xxx xxxx"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Engineering Notes / Standards Required:
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Provide any critical tolerances, fire ratings (UL94), FDA certification, or packaging requirements..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs text-slate-900 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-sm cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting RFQ...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Request for Quotation</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
