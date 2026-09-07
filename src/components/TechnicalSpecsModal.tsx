import React from 'react';
import { ProductItem } from '../types';
import { 
  X, 
  FileText, 
  Download, 
  Printer, 
  Check, 
  ShieldCheck, 
  Thermometer, 
  Layers, 
  PlusCircle 
} from 'lucide-react';

interface TechnicalSpecsModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToRfq: (product: ProductItem) => void;
}

export const TechnicalSpecsModal: React.FC<TechnicalSpecsModalProps> = ({
  product,
  onClose,
  onAddToRfq
}) => {
  if (!product) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                {product.code}
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                TECHNICAL DATA SHEET (TDS)
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-display text-white">
              {product.name}
            </h3>
            <p className="text-xs text-slate-300">
              Manufactured by FlexiRub Polymer (flexirubpolymer.com)
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Overview Statement */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {product.fullDesc}
          </div>

          {/* Core Mechanical & Physical Properties Table */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-600" />
              Standard Mechanical Properties
            </h4>
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Physical Property</th>
                    <th className="py-2.5 px-3">Test Method / Standard</th>
                    <th className="py-2.5 px-3">Nominal Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Polymer Base</td>
                    <td className="py-2.5 px-3 text-slate-500 font-mono">ASTM D1418</td>
                    <td className="py-2.5 px-3 font-bold text-slate-800">{product.polymerType}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Durometer Hardness</td>
                    <td className="py-2.5 px-3 text-slate-500 font-mono">DIN ISO 7619-1 (Shore A)</td>
                    <td className="py-2.5 px-3 font-bold text-slate-800">{product.shoreHardness}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Operating Temperature</td>
                    <td className="py-2.5 px-3 text-slate-500 font-mono">ASTM D573</td>
                    <td className="py-2.5 px-3 font-bold text-slate-800">{product.tempRange}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Tensile Strength</td>
                    <td className="py-2.5 px-3 text-slate-500 font-mono">ASTM D412 / DIN 53504</td>
                    <td className="py-2.5 px-3 font-bold text-slate-800">{product.tensileStrength}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Ultimate Elongation</td>
                    <td className="py-2.5 px-3 text-slate-500 font-mono">ASTM D412</td>
                    <td className="py-2.5 px-3 font-bold text-slate-800">{product.elongationAtBreak}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Compression Set Resistance</td>
                    <td className="py-2.5 px-3 text-slate-500 font-mono">ASTM D395 Method B</td>
                    <td className="py-2.5 px-3 font-bold text-slate-800">{product.compressionSet}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-slate-900">Extrusion Dimensional Tolerance</td>
                    <td className="py-2.5 px-3 text-slate-500 font-mono">DIN ISO 3302-1</td>
                    <td className="py-2.5 px-3 font-bold text-amber-700">Class E2 (Precision Class E1 available)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Compliance & Standards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Governing Standards
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {product.standards.map((std, i) => (
                  <span key={i} className="text-xs bg-white text-slate-800 font-mono px-2 py-1 rounded border border-slate-200">
                    {std}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-amber-600" />
                Available Backings & Colors
              </h5>
              <div className="text-xs text-slate-600 space-y-1">
                <div><strong>Adhesive:</strong> {product.adhesiveOptions.join(', ')}</div>
                <div><strong>Colors:</strong> {product.colorOptions.join(', ')}</div>
              </div>
            </div>
          </div>

          {/* Distinctive Features */}
          <div className="space-y-1.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Key Engineering Advantages:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {product.features.map((feat, i) => (
                <div key={i} className="text-xs text-slate-700 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print TDS</span>
            </button>
            <button
              onClick={() => alert(`TDS Specification document for ${product.name} (${product.code}) generated for offline archiving.`)}
              className="px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Spec</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Close
            </button>
            <button
              onClick={() => {
                onAddToRfq(product);
                onClose();
              }}
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-1.5 shadow-xs"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add to RFQ Quote</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
