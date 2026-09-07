export type PolymerType = 
  | 'EPDM'
  | 'Silicone'
  | 'Nitrile (NBR)'
  | 'Neoprene (CR)'
  | 'Viton (FKM)'
  | 'Natural Rubber (NR)'
  | 'Polyurethane (PU)'
  | 'SBR';

export type ProductCategory = 
  | 'all'
  | 'epdm-profiles'
  | 'silicone-extrusions'
  | 'moulded-components'
  | 'rubber-sheets'
  | 'marine-infrastructure'
  | 'inflatable-sponge';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  polymerType: PolymerType;
  shortDesc: string;
  fullDesc: string;
  shoreHardness: string;
  tempRange: string;
  tensileStrength: string;
  elongationAtBreak: string;
  compressionSet: string;
  standards: string[];
  applications: string[];
  features: string[];
  crossSectionType: 'D-Profile' | 'P-Profile' | 'U-Channel' | 'Lip Seal' | 'Tubing' | 'Cord' | 'Custom CAD' | 'Sheet' | 'Moulded' | 'Fender';
  adhesiveOptions: string[];
  colorOptions: string[];
  code: string;
}

export interface PolymerMaterial {
  id: string;
  name: string;
  abbreviation: PolymerType;
  chemicalName: string;
  tempMin: number;
  tempMax: number;
  weatherOzone: number; // 1 to 5
  oilPetroleum: number;
  acidChemical: number;
  abrasionResistance: number;
  tensileStrength: string;
  compressionSetRating: 'Excellent' | 'Good' | 'Fair';
  primaryAdvantages: string;
  typicalApplications: string[];
  astmClassification: string;
  foodGradeFDA: boolean;
}

export interface IndustrySector {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyProducts: string[];
  challengesSolved: string[];
  standardsMet: string[];
}

export interface RfqItem {
  productId?: string;
  productName: string;
  polymer: PolymerType;
  hardness: string;
  quantity: number;
  unit: 'Meters' | 'Pieces' | 'Rolls' | 'Kilograms';
  customDrawingAttached?: boolean;
  notes?: string;
}

export interface RfqSubmission {
  quoteRef: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  destinationPort?: string;
  targetDate?: string;
  items: RfqItem[];
  overallNotes?: string;
  status: 'Received' | 'Engineering Review' | 'Commercial Quote Prepared';
  date: string;
}
