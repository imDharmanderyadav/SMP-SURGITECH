export interface Product {
  id: string;
  name: string;
}

export interface Division {
  name: string;
  products: Product[];
}

export interface Brand {
  id: string;
  name: string;
  divisions: Division[];
}

export const productCategories = [
  {
    id: "stents",
    title: "Stents",
    description: "High quality stents for better support and patient outcomes.",
    icon: "Activity",
  },
  {
    id: "balloons",
    title: "Balloons",
    description: "PTCA & Specialty Balloons for precise dilation.",
    icon: "CircleDot",
  },
  {
    id: "catheters",
    title: "Catheters",
    description: "Advanced catheters designed for safety and performance.",
    icon: "Route",
  },
  {
    id: "guidewires",
    title: "Guidewires",
    description: "High performance guidewires for better navigation.",
    icon: "GitBranch",
  },
  {
    id: "interventional",
    title: "Interventional Products",
    description: "A wide range of interventional devices and accessories.",
    icon: "Stethoscope",
  },
];

export const brands: Brand[] = [
  {
    id: "abbott",
    name: "Abbott Healthcare Pvt Ltd",
    divisions: [
      {
        name: "Vascular Division",
        products: [
          { id: "abb-1", name: "Xience Coronary Stents" },
          { id: "abb-2", name: "Coronary Balloon Trek/NC Trek" },
          { id: "abb-3", name: "Coronary Balloon NC Trek Neo" },
          { id: "abb-4", name: "Guide Wires (AllStar, CrossIT, BMW, Whisper, Pilot, Versaturn)" },
          { id: "abb-5", name: "Graftmaster" },
          { id: "abb-6", name: "Indeflator" },
          { id: "abb-7", name: "Y Connector" },
          { id: "abb-8", name: "Proglide" },
          { id: "abb-9", name: "Orbital" },
        ],
      },
    ],
  },
  {
    id: "st-jude-pacemaker",
    name: "St. Jude Medical India Pvt Ltd (Pacemaker Division)",
    divisions: [
      {
        name: "CRM Division",
        products: [
          { id: "sjp-1", name: "VVIR Pacemaker" },
          { id: "sjp-2", name: "DDDR Pacemaker" },
          { id: "sjp-3", name: "CTRP" },
          { id: "sjp-4", name: "SICD - 1.5T MRI, 3T MRI, Remote Monitoring" },
          { id: "sjp-5", name: "DICD - 1.5T MRI, 3T MRI, Remote Monitoring" },
          { id: "sjp-6", name: "CRTD - 1.5T MRI, 3T MRI, Remote Monitoring" },
          { id: "sjp-7", name: "Temporary Pacemaker" },
          { id: "sjp-8", name: "TAVI" },
          { id: "sjp-9", name: "Leadless Pacemaker" },
        ],
      },
    ],
  },
  {
    id: "st-jude-oct",
    name: "St. Jude Medical India Pvt Ltd (OCT/FFR Division)",
    divisions: [
      {
        name: "Imaging & Physiology",
        products: [
          { id: "sjo-1", name: "TPI Lead 6F/5F" },
          { id: "sjo-2", name: "TPI Lead Balloon Tip 5F" },
          { id: "sjo-3", name: "Pressure Wire" },
          { id: "sjo-4", name: "DF Optis Kit OCT Catheter" },
          { id: "sjo-5", name: "FFR Console" },
          { id: "sjo-6", name: "OCT Console" },
        ],
      },
    ],
  },
  {
    id: "st-jude-structural",
    name: "St. Jude Medical India Pvt Ltd (Structural Heart)",
    divisions: [
      {
        name: "Structural Heart",
        products: [
          { id: "sjs-1", name: "PDA" },
          { id: "sjs-2", name: "PDA2" },
          { id: "sjs-3", name: "ASD" },
          { id: "sjs-4", name: "VSD" },
          { id: "sjs-5", name: "Delivery System" },
          { id: "sjs-6", name: "Sizing Balloon" },
        ],
      },
    ],
  },
  {
    id: "boston-scientific",
    name: "Boston Scientific (Peripheral Division)",
    divisions: [
      {
        name: "Peripheral Vascular",
        products: [
          { id: "bs-1", name: "Carotid Wallstent" },
          { id: "bs-2", name: "Peripheral Stent Self Expandable" },
          { id: "bs-3", name: "Peripheral Stent Balloon Mounted" },
          { id: "bs-4", name: "Pharmacomechanical Catheter Directed" },
          { id: "bs-5", name: "Thrombectomy Catheter" },
          { id: "bs-6", name: "PVA Particle" },
          { id: "bs-7", name: "014 DC Peripheral Balloon" },
          { id: "bs-8", name: "High Pressure NC Balloon" },
          { id: "bs-9", name: "018 Wire Compatible SC Balloon" },
          { id: "bs-10", name: "Drug Coated Balloon" },
          { id: "bs-11", name: "Micro Catheter" },
          { id: "bs-12", name: "Guide Catheter" },
          { id: "bs-13", name: "Runway Support Catheter" },
          { id: "bs-14", name: "Coils 018/035 Pushable/Interlock" },
          { id: "bs-15", name: "014 Wire Compatible Peripheral 300cm" },
          { id: "bs-16", name: "018 Wire Compatible Peripheral 300cm" },
          { id: "bs-17", name: "Angioplasty Wire" },
          { id: "bs-18", name: "Thrombus Aspiration Device (AngioJet Console)" },
        ],
      },
    ],
  },
  {
    id: "asahi",
    name: "ASAHI",
    divisions: [
      {
        name: "Guidewires",
        products: [
          { id: "as-1", name: "Fielder XT, XTA, XTR" },
          { id: "as-2", name: "Sion Blue, Black" },
          { id: "as-3", name: "GAIA Next 3" },
          { id: "as-4", name: "Mirage 1.4, 1.5" },
          { id: "as-5", name: "Rinato" },
          { id: "as-6", name: "Conquest PRO 9/PRO12" },
        ],
      },
    ],
  },
  {
    id: "teleflex",
    name: "Teleflex (Arrow)",
    divisions: [
      {
        name: "Interventional Access",
        products: [
          { id: "tf-1", name: "Guideliner V3 Chatter (Extension Catheter)" },
          { id: "tf-2", name: "Supercross Micro Catheter" },
          { id: "tf-3", name: "TurnPike (Torqueable MicroCatheter)" },
          { id: "tf-4", name: "IABP Balloon" },
          { id: "tf-5", name: "IABP Machine" },
        ],
      },
    ],
  },
  {
    id: "cordis",
    name: "Cordis",
    divisions: [
      {
        name: "Vascular Division",
        products: [
          { id: "cr-1", name: "Guiding Catheter" },
          { id: "cr-2", name: "Diagnostic Catheter" },
          { id: "cr-3", name: "Femoral Sheath" },
          { id: "cr-4", name: "Radial Sheath" },
          { id: "cr-5", name: "Aperi Balloon" },
          { id: "cr-6", name: "Selution SLR" },
          { id: "cr-7", name: "Ambi Tig Catheter" },
          { id: "cr-8", name: "Long Sheath" },
          { id: "cr-9", name: "Biopsy Forcep" },
        ],
      },
    ],
  },
  {
    id: "spectrum",
    name: "Spectrum MedTech",
    divisions: [
      {
        name: "Accessories",
        products: [
          { id: "sp-1", name: "Indeflator" },
          { id: "sp-2", name: "Y Connector" },
          { id: "sp-3", name: "2Port, 3Port Manifold" },
          { id: "sp-4", name: "Puncture Needle" },
          { id: "sp-5", name: "High Pressure Monitor Line" },
          { id: "sp-6", name: "Xtention Line 100/150/200" },
        ],
      },
    ],
  },
];