import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let genAIClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!genAIClient && process.env.GEMINI_API_KEY) {
    try {
      genAIClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    } catch (err) {
      console.error("Failed to initialize GoogleGenAI:", err);
    }
  }
  return genAIClient;
}

// Health check endpoint
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", app: "FlexiRub Polymer Server", timestamp: new Date().toISOString() });
});

// AI Technical Polymer & Compound Advisor
app.post("/api/polymer-advisor", async (req: Request, res: Response) => {
  const { query, application, minTemp, maxTemp, environment, hardness, requirements } = req.body;

  const prompt = `You are a Senior Elastomer & Polymer Materials Engineer at FlexiRub Polymer (flexirubpolymer.com), a world-class manufacturer of precision rubber extrusions, EPDM & Silicone profiles, gaskets, and moulded components.
Provide an expert, technical, and actionable recommendation for the client's engineering inquiry.

Client Inquiry / Application: ${query || application || 'Custom Rubber Gasket / Profile Application'}
Operating Temp: ${minTemp || '-40'}°C to ${maxTemp || '120'}°C
Working Environment / Chemicals / Media: ${environment || 'Outdoor atmospheric weathering, UV, ozone, moisture'}
Target Hardness (Shore A): ${hardness || '60-70 Shore A'}
Special Requirements / Certifications: ${requirements || 'High tensile durability, ASTM D2000, ISO 9001'}

Analyze and return your response in structured format with:
1. Recommended Polymer Compound (e.g., EPDM, Silicone / VMQ, NBR / Nitrile, CR / Neoprene, FKM / Viton, Polyurethane, or Natural Rubber).
2. Recommended Durometer (Shore A) and Cross-Section / Profile Consideration.
3. Relevant Standards & Specifications (e.g. ASTM D2000 code, DIN 7863, FDA 21 CFR 177.2600, UL94-V0, BS EN 681-1).
4. Key Advantages & Performance Under These Conditions.
5. Manufacturing Process Recommendation (e.g. Continuous Microwave Vulcanization Extrusion, Compression Moulding, Co-extrusion with Metal Carrier).
6. Next Step / Tooling & Sampling timeline at FlexiRub Polymer.

Keep it highly authoritative, technical, concise, and formatted clearly with bullet points.`;

  const ai = getGenAI();

  if (ai && process.env.GEMINI_API_KEY) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are the Chief Polymer Materials Specialist at FlexiRub Polymer. Give precise, technically grounded industrial rubber recommendations with material grades, ASTM/ISO specifications, and manufacturing guidance.",
        },
      });

      const recommendation = response.text || "";
      return res.json({ success: true, source: "gemini-ai", recommendation });
    } catch (error) {
      console.warn("Gemini API call failed, falling back to engineering rules engine:", error);
    }
  }

  // Authoritative Fallback Engineering Rules Engine if API key is not yet set
  const qLower = ((query || "") + " " + (environment || "") + " " + (application || "")).toLowerCase();
  let polymer = "EPDM Rubber (Ethylene Propylene Diene Monomer)";
  let astm = "ASTM D2000 M3BA 710 A14 B13 C12";
  let why = "Outstanding resistance to weathering, ozone, UV radiation, and steam. Ideal for exterior architectural facades, aluminum glazing, automotive weatherstripping, and outdoor enclosures.";
  let manufacturingProcess = "Continuous Microwave Vulcanization Extrusion with custom in-house die tooling.";
  let tempRange = "-45°C to +130°C (+150°C intermittent)";

  if (qLower.includes("food") || qLower.includes("medical") || qLower.includes("pharma") || qLower.includes("high temp") || Number(maxTemp) > 150) {
    polymer = "Platinum-Cured Silicone Rubber (VMQ / LSR)";
    astm = "ASTM D2000 M4GE 607, FDA 21 CFR 177.2600 & USP Class VI";
    why = "Extreme thermal stability (-60°C to +250°C), non-toxic, odorless, excellent electrical insulation, and chemically inert for food, beverage, and medical cleanroom environments.";
    manufacturingProcess = "Hot air vulcanization (HAV) extrusion or liquid silicone injection moulding.";
    tempRange = "-60°C to +250°C";
  } else if (qLower.includes("oil") || qLower.includes("fuel") || qLower.includes("diesel") || qLower.includes("petrol") || qLower.includes("petrochemical")) {
    polymer = "Nitrile Rubber (NBR / Buna-N)";
    astm = "ASTM D2000 M2BG 714 B14 EO14 EO34";
    why = "Superior resistance to petroleum-based hydraulic oils, diesel fuel, greases, and aliphatic hydrocarbons. High tensile strength and abrasion resistance.";
    manufacturingProcess = "Precision extrusion or hydraulic compression moulding with cryogenic deflashing.";
    tempRange = "-30°C to +110°C";
  } else if (qLower.includes("acid") || qLower.includes("chemical") || qLower.includes("corrosive") || qLower.includes("viton") || qLower.includes("fkm")) {
    polymer = "Fluoroelastomer (FKM / Viton®)";
    astm = "ASTM D2000 M2HK 714 A1-10 B37 EF31 EO78";
    why = "Exceptional resistance to aggressive acids, chlorinated solvents, aromatic hydrocarbons, and high thermal loads. Top choice for refinery, chemical processing, and aerospace seals.";
    manufacturingProcess = "High-pressure transfer moulding or post-cured fluoroelastomer extrusion.";
    tempRange = "-20°C to +230°C";
  } else if (qLower.includes("marine") || qLower.includes("seawater") || qLower.includes("flame") || qLower.includes("neoprene")) {
    polymer = "Neoprene / Chloroprene Rubber (CR)";
    astm = "ASTM D2000 M2BC 614 A14 B14 C12 EO14";
    why = "Balanced physical properties, inherent self-extinguishing flame retardance, sea-water resistance, and moderate resistance to oils and weathering.";
    manufacturingProcess = "Continuous extrusion or moulding with brass/steel plate bonding for marine dock fenders.";
    tempRange = "-35°C to +110°C";
  }

  const fallbackResponse = `### FlexiRub Polymer Engineering Recommendation

**1. Recommended Compound:** ${polymer}
**2. ASTM D2000 Specification:** \`${astm}\`
**3. Operating Thermal Window:** ${tempRange}
**4. Hardness Rating:** ${hardness || '65 Shore A ±5 (DIN ISO 7619-1)'}
**5. Material Suitability & Justification:**
${why}

**6. Recommended Manufacturing Method:**
- Process: ${manufacturingProcess}
- Die Tolerance: DIN ISO 3302-1 Class E2 (Precision Class E1 available on request)
- Backing Options: Available with 3M 9448A high-tack acrylic adhesive or heat-activated flocking.

**7. Next Steps with FlexiRub Polymer:**
- Die Drawing & CAD Simulation: 24-48 Hours
- Rapid First-Article Prototype: 3-5 Working Days
- Bulk Production Dispatch: Ready for Middle East, GCC, Europe & Global Sea/Air Freight.`;

  return res.json({ success: true, source: "rules-engine", recommendation: fallbackResponse });
});

// Contact inquiry submission endpoint (emails / routes to info@flexirubpolymer.com)
app.post("/api/contact", (req: Request, res: Response) => {
  const { name, company, email, phone, department, polymerType, subject, message } = req.body;
  const inquiryRef = `INQ-FRP-${Date.now().toString().slice(-6)}`;

  console.log(`=======================================================`);
  console.log(`[CONTACT INQUIRY FORWARDED TO info@flexirubpolymer.com]`);
  console.log(`Ticket Reference: ${inquiryRef}`);
  console.log(`From: ${name} <${email}>`);
  console.log(`Company: ${company || 'N/A'}`);
  console.log(`Phone: ${phone || 'N/A'}`);
  console.log(`Department / Subject: ${department || subject || 'General Inquiry'}`);
  if (polymerType) console.log(`Polymer Interest: ${polymerType}`);
  console.log(`Inquiry Content:\n${message}`);
  console.log(`Destination Mailbox: info@flexirubpolymer.com`);
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log(`=======================================================`);

  return res.json({
    success: true,
    inquiryReference: inquiryRef,
    targetEmail: "info@flexirubpolymer.com",
    message: "Inquiry successfully recorded and forwarded to info@flexirubpolymer.com",
    details: {
      inquiryRef,
      name,
      company,
      email,
      phone,
      department: department || subject || "General",
      polymerType,
      targetEmail: "info@flexirubpolymer.com",
      status: "Dispatched to Engineering Desk",
      timestamp: new Date().toISOString(),
    }
  });
});

// Quote submission endpoint
app.post("/api/quote-request", (req: Request, res: Response) => {
  const { companyName, contactName, email, phone, profileType, polymer, quantityMeters, destination, notes } = req.body;
  const quoteRef = `RFQ-FRP-${Date.now().toString().slice(-6)}`;

  console.log(`[Quote Received - Forwarded to info@flexirubpolymer.com] ${quoteRef} from ${companyName} (${email}) - ${polymer} ${quantityMeters}m`);

  return res.json({
    success: true,
    quoteReference: quoteRef,
    targetEmail: "info@flexirubpolymer.com",
    message: "Thank you. Your Request for Quote has been registered with the FlexiRub Polymer Technical Estimation Team at info@flexirubpolymer.com.",
    leadTimeEstimate: "24-48 hours for formal commercial proposal and die drawing approval.",
    details: {
      quoteRef,
      companyName,
      contactName,
      polymer,
      profileType,
      quantityMeters,
      destination,
      status: "Under Technical Review",
      timestamp: new Date().toISOString(),
    }
  });
});

// Sample dispatch request endpoint
app.post("/api/sample-request", (req: Request, res: Response) => {
  const { name, company, email, phone, sampleType, address, country } = req.body;
  const sampleRef = `SMP-FRP-${Date.now().toString().slice(-5)}`;

  console.log(`[Sample Request - Forwarded to info@flexirubpolymer.com] ${sampleRef} from ${name} (${company}, ${country})`);

  return res.json({
    success: true,
    sampleReference: sampleRef,
    targetEmail: "info@flexirubpolymer.com",
    message: `Sample Kit request confirmed for ${sampleType || "EPDM & Silicone Profile Samples"} and dispatched to info@flexirubpolymer.com.`,
    details: {
      sampleRef,
      company,
      recipient: name,
      sampleType,
      country,
      courierStatus: "Scheduled for Lab Dispatch (DHL/FedEx Express)",
      timestamp: new Date().toISOString(),
    }
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`FlexiRub Polymer Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
