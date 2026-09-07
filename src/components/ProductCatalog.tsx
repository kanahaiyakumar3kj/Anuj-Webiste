import React, { useState, useMemo } from 'react';
import { ProductItem, ProductCategory, PolymerType } from '../types';
import { PRODUCTS_DATA } from '../data/productsData';
import { 
  Search, 
  Filter, 
  FileText, 
  ChevronRight, 
  Check, 
  Thermometer, 
  Layers, 
  ShieldCheck, 
  PlusCircle, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface ProductCatalogProps {
  onSelectProductForTds: (product: ProductItem) => void;
  onSelectProductForRfq: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProductForTds,
  onSelectProductForRfq
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedPolymer, setSelectedPolymer] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Products', count: PRODUCTS_DATA.length },
    { id: 'epdm-profiles', label: 'EPDM Profiles & Gaskets', count: PRODUCTS_DATA.filter(p => p.category === 'epdm-profiles').length },
    { id: 'silicone-extrusions', label: 'Silicone Extrusions', count: PRODUCTS_DATA.filter(p => p.category === 'silicone-extrusions').length },
    { id: 'rubber-sheets', label: 'Industrial Rubber Sheets', count: PRODUCTS_DATA.filter(p => p.category === 'rubber-sheets').length },
    { id: 'moulded-components', label: 'Moulded Components', count: PRODUCTS_DATA.filter(p => p.category === 'moulded-components').length },
    { id: 'marine-infrastructure', label: 'Marine & Infrastructure', count: PRODUCTS_DATA.filter(p => p.category === 'marine-infrastructure').length },
    { id: 'inflatable-sponge', label: 'Inflatable & Sponge Seals', count: PRODUCTS_DATA.filter(p => p.category === 'inflatable-sponge').length },
  ];

  const polymers: PolymerType[] = [
    'EPDM',
    'Silicone',
    'Nitrile (NBR)',
    'Neoprene (CR)',
    'Viton (FKM)',
    'Natural Rubber (NR)',
    'Polyurethane (PU)'
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchPolymer = selectedPolymer === 'all' || product.polymerType === selectedPolymer;
      
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = !query || 
        product.name.toLowerCase().includes(query) ||
        product.code.toLowerCase().includes(query) ||
        product.polymerType.toLowerCase().includes(query) ||
        product.shortDesc.toLowerCase().includes(query) ||
        product.applications.some(app => app.toLowerCase().includes(query));

      return matchCategory && matchPolymer && matchSearch;
    });
  }, [selectedCategory, selectedPolymer, searchQuery]);

  // Color helper for polymer badges
  const getPolymerBadgeClass = (polymer: PolymerType) => {
    switch (polymer) {
      case 'EPDM':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Silicone':
        return 'bg-rose-50 text-rose-800 border-rose-200';
      case 'Nitrile (NBR)':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Neoprene (CR)':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200';
      case 'Viton (FKM)':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'Natural Rubber (NR)':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Polyurethane (PU)':
        return 'bg-cyan-50 text-cyan-800 border-cyan-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <section id="products" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-2">
              <Layers className="w-3.5 h-3.5 text-amber-700" />
              PRECISION ELASTOMER DIRECTORY
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
              Engineered Product Catalog
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl text-base">
              Explore our extensive range of standard extrusion dies, custom profiles, continuous vulcanized gaskets, and heavy-duty industrial elastomeric components.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-2xs">
              Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> of {PRODUCTS_DATA.length} Standard Specifications
            </span>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="my-8 space-y-4">
          
          {/* Search Bar + Polymer quick chips */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by profile name, code (e.g. FRP-EP-7001), application, or standard (ASTM / DIN)..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 shadow-2xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-1.5 py-0.5"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Polymer Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              <span className="text-xs font-semibold text-slate-500 whitespace-nowrap mr-1">Compound:</span>
              <button
                onClick={() => setSelectedPolymer('all')}
                className={`text-xs px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  selectedPolymer === 'all'
                    ? 'bg-slate-900 text-white font-bold shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                All Polymers
              </button>
              {polymers.map((poly) => (
                <button
                  key={poly}
                  onClick={() => setSelectedPolymer(poly)}
                  className={`text-xs px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedPolymer === poly
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {poly}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                    active
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    active ? 'bg-slate-800 text-amber-400 font-mono' : 'bg-slate-100 text-slate-500 font-mono'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center my-8">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 font-display">No Matching Profiles Found</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              We have over 2,500 custom dies in our tooling archive. If you do not see your exact cross-section, our CAD engineering team can manufacture custom tooling within 48 hours.
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPolymer('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
              >
                Reset Filters
              </button>
              <button
                onClick={() => onSelectProductForRfq(PRODUCTS_DATA[0])}
                className="px-4 py-2 text-xs font-bold bg-slate-900 text-amber-400 rounded-lg hover:bg-slate-800"
              >
                Submit Custom CAD Drawing
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top Section */}
                <div className="p-5 space-y-4">
                  
                  {/* Top Bar: Code and Polymer Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {product.code}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getPolymerBadgeClass(product.polymerType)}`}>
                      {product.polymerType}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-amber-600 transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Technical Specs Compact Grid */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Hardness</span>
                      <span className="font-semibold text-slate-800">{product.shoreHardness}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Temp Window</span>
                      <span className="font-semibold text-slate-800">{product.tempRange}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Tensile Strength</span>
                      <span className="font-semibold text-slate-800">{product.tensileStrength}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Standard</span>
                      <span className="font-semibold text-amber-700 truncate block">{product.standards[0]}</span>
                    </div>
                  </div>

                  {/* Primary Applications Chips */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Primary Applications:</span>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.slice(0, 3).map((app, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProductForTds(product)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 transition-colors"
                  >
                    <FileText className="w-4 h-4 text-amber-600" />
                    <span>View TDS Spec</span>
                  </button>

                  <button
                    onClick={() => onSelectProductForRfq(product)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-2xs hover:shadow"
                  >
                    <PlusCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Add to RFQ</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner for Custom Extrusion Dies */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-700">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              CUSTOM EXTRUSION TOOLING & COMPOUNDING
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-display text-white">
              Do you have a proprietary CAD cross-section or drawing?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Send us your .DWG, .DXF, .STEP, or .PDF technical drawing. Our in-house Wire EDM tooling division fabricates extrusion dies and delivers sample prototypes in 3 to 5 business days.
            </p>
          </div>

          <button
            onClick={() => onSelectProductForRfq({
              ...PRODUCTS_DATA[0],
              name: 'Custom CAD Die Profile Tooling',
              code: 'FRP-CUSTOM-CAD'
            })}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Upload CAD / Request Custom Die
          </button>
        </div>

      </div>
    </section>
  );
};
