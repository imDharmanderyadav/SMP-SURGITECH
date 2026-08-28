// export interface Product {
//   id: string;
//   name: string;
// }

// export interface Division {
//   name: string;
//   products: Product[];
// }

// export interface Brand {
//   id: string;
//   name: string;
//   divisions: Division[];
// }

// export const productCategories = [
//   {
//     id: "stents",
//     title: "Stents",
//     description: "High quality stents for better support and patient outcomes.",
//     icon: "Activity",
//   },
//   {
//     id: "balloons",
//     title: "Balloons",
//     description: "PTCA & Specialty Balloons for precise dilation.",
//     icon: "CircleDot",
//   },
//   {
//     id: "catheters",
//     title: "Catheters",
//     description: "Advanced catheters designed for safety and performance.",
//     icon: "Route",
//   },
//   {
//     id: "guidewires",
//     title: "Guidewires",
//     description: "High performance guidewires for better navigation.",
//     icon: "GitBranch",
//   },
//   {
//     id: "interventional",
//     title: "Interventional Products",
//     description: "A wide range of interventional devices and accessories.",
//     icon: "Stethoscope",
//   },
// ];

// export const brands: Brand[] = [
//   {
//     id: "abbott",
//     name: "Abbott Healthcare Pvt Ltd",
//     divisions: [
//       {
//         name: "Vascular Division",
//         products: [
//           { id: "abb-1", name: "Xience Coronary Stents" },
//           { id: "abb-2", name: "Coronary Balloon Trek/NC Trek" },
//           { id: "abb-3", name: "Coronary Balloon NC Trek Neo" },
//           { id: "abb-4", name: "Guide Wires (AllStar, CrossIT, BMW, Whisper, Pilot, Versaturn)" },
//           { id: "abb-5", name: "Graftmaster" },
//           { id: "abb-6", name: "Indeflator" },
//           { id: "abb-7", name: "Y Connector" },
//           { id: "abb-8", name: "Proglide" },
//           { id: "abb-9", name: "Orbital" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "st-jude-pacemaker",
//     name: "St. Jude Medical India Pvt Ltd (Pacemaker Division)",
//     divisions: [
//       {
//         name: "CRM Division",
//         products: [
//           { id: "sjp-1", name: "VVIR Pacemaker" },
//           { id: "sjp-2", name: "DDDR Pacemaker" },
//           { id: "sjp-3", name: "CTRP" },
//           { id: "sjp-4", name: "SICD - 1.5T MRI, 3T MRI, Remote Monitoring" },
//           { id: "sjp-5", name: "DICD - 1.5T MRI, 3T MRI, Remote Monitoring" },
//           { id: "sjp-6", name: "CRTD - 1.5T MRI, 3T MRI, Remote Monitoring" },
//           { id: "sjp-7", name: "Temporary Pacemaker" },
//           { id: "sjp-8", name: "TAVI" },
//           { id: "sjp-9", name: "Leadless Pacemaker" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "st-jude-oct",
//     name: "St. Jude Medical India Pvt Ltd (OCT/FFR Division)",
//     divisions: [
//       {
//         name: "Imaging & Physiology",
//         products: [
//           { id: "sjo-1", name: "TPI Lead 6F/5F" },
//           { id: "sjo-2", name: "TPI Lead Balloon Tip 5F" },
//           { id: "sjo-3", name: "Pressure Wire" },
//           { id: "sjo-4", name: "DF Optis Kit OCT Catheter" },
//           { id: "sjo-5", name: "FFR Console" },
//           { id: "sjo-6", name: "OCT Console" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "st-jude-structural",
//     name: "St. Jude Medical India Pvt Ltd (Structural Heart)",
//     divisions: [
//       {
//         name: "Structural Heart",
//         products: [
//           { id: "sjs-1", name: "PDA" },
//           { id: "sjs-2", name: "PDA2" },
//           { id: "sjs-3", name: "ASD" },
//           { id: "sjs-4", name: "VSD" },
//           { id: "sjs-5", name: "Delivery System" },
//           { id: "sjs-6", name: "Sizing Balloon" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "boston-scientific",
//     name: "Boston Scientific (Peripheral Division)",
//     divisions: [
//       {
//         name: "Peripheral Vascular",
//         products: [
//           { id: "bs-1", name: "Carotid Wallstent" },
//           { id: "bs-2", name: "Peripheral Stent Self Expandable" },
//           { id: "bs-3", name: "Peripheral Stent Balloon Mounted" },
//           { id: "bs-4", name: "Pharmacomechanical Catheter Directed" },
//           { id: "bs-5", name: "Thrombectomy Catheter" },
//           { id: "bs-6", name: "PVA Particle" },
//           { id: "bs-7", name: "014 DC Peripheral Balloon" },
//           { id: "bs-8", name: "High Pressure NC Balloon" },
//           { id: "bs-9", name: "018 Wire Compatible SC Balloon" },
//           { id: "bs-10", name: "Drug Coated Balloon" },
//           { id: "bs-11", name: "Micro Catheter" },
//           { id: "bs-12", name: "Guide Catheter" },
//           { id: "bs-13", name: "Runway Support Catheter" },
//           { id: "bs-14", name: "Coils 018/035 Pushable/Interlock" },
//           { id: "bs-15", name: "014 Wire Compatible Peripheral 300cm" },
//           { id: "bs-16", name: "018 Wire Compatible Peripheral 300cm" },
//           { id: "bs-17", name: "Angioplasty Wire" },
//           { id: "bs-18", name: "Thrombus Aspiration Device (AngioJet Console)" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "asahi",
//     name: "ASAHI",
//     divisions: [
//       {
//         name: "Guidewires",
//         products: [
//           { id: "as-1", name: "Fielder XT, XTA, XTR" },
//           { id: "as-2", name: "Sion Blue, Black" },
//           { id: "as-3", name: "GAIA Next 3" },
//           { id: "as-4", name: "Mirage 1.4, 1.5" },
//           { id: "as-5", name: "Rinato" },
//           { id: "as-6", name: "Conquest PRO 9/PRO12" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "teleflex",
//     name: "Teleflex (Arrow)",
//     divisions: [
//       {
//         name: "Interventional Access",
//         products: [
//           { id: "tf-1", name: "Guideliner V3 Chatter (Extension Catheter)" },
//           { id: "tf-2", name: "Supercross Micro Catheter" },
//           { id: "tf-3", name: "TurnPike (Torqueable MicroCatheter)" },
//           { id: "tf-4", name: "IABP Balloon" },
//           { id: "tf-5", name: "IABP Machine" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "cordis",
//     name: "Cordis",
//     divisions: [
//       {
//         name: "Vascular Division",
//         products: [
//           { id: "cr-1", name: "Guiding Catheter" },
//           { id: "cr-2", name: "Diagnostic Catheter" },
//           { id: "cr-3", name: "Femoral Sheath" },
//           { id: "cr-4", name: "Radial Sheath" },
//           { id: "cr-5", name: "Aperi Balloon" },
//           { id: "cr-6", name: "Selution SLR" },
//           { id: "cr-7", name: "Ambi Tig Catheter" },
//           { id: "cr-8", name: "Long Sheath" },
//           { id: "cr-9", name: "Biopsy Forcep" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "spectrum",
//     name: "Spectrum MedTech",
//     divisions: [
//       {
//         name: "Accessories",
//         products: [
//           { id: "sp-1", name: "Indeflator" },
//           { id: "sp-2", name: "Y Connector" },
//           { id: "sp-3", name: "2Port, 3Port Manifold" },
//           { id: "sp-4", name: "Puncture Needle" },
//           { id: "sp-5", name: "High Pressure Monitor Line" },
//           { id: "sp-6", name: "Xtention Line 100/150/200" },
//         ],
//       },
//     ],
//   },
// ];

export interface Product {
    id: string;
    name: string;
    image?: string;
}

export interface Division {
    name: string;
    products: Product[];
    image?: string;
}

export interface Brand {
    id: string;
    name: string;
    logo?: string | null;
    image?: string;
    divisions: Division[];
}

export interface ProductCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string;
    brands: string[]; // Brand IDs jo is category mein hain
}

export const productCategories: ProductCategory[] = [
    {
        id: "stents",
        title: "Stents",
        description: "High quality stents for better support and patient outcomes.",
        icon: "Activity",
        image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
        brands: ["abbott", "boston-scientific"],
    },
    {
        id: "balloons",
        title: "Balloons",
        description: "PTCA & Specialty Balloons for precise dilation.",
        icon: "CircleDot",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
        brands: ["abbott", "cordis", "boston-scientific", "teleflex"],
    },
    {
        id: "catheters",
        title: "Catheters",
        description: "Advanced catheters designed for safety and performance.",
        icon: "Route",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
        brands: ["abbott", "cordis", "boston-scientific", "teleflex"],
    },
    {
        id: "guidewires",
        title: "Guidewires",
        description: "High performance guidewires for better navigation.",
        icon: "GitBranch",
        image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=600&q=80",
        brands: ["abbott", "asahi", "teleflex"],
    },
    {
        id: "interventional",
        title: "Interventional Products",
        description: "A wide range of interventional devices and accessories.",
        icon: "Stethoscope",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
        brands: ["abbott", "cordis", "teleflex", "spectrum"],
    },
    {
        id: "structural-heart",
        title: "Structural Heart",
        description: "Devices for structural heart interventions.",
        icon: "HeartPulse",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
        brands: ["st-jude-structural"],
    },
    {
        id: "imaging",
        title: "Imaging & Physiology",
        description: "OCT, FFR and diagnostic imaging solutions.",
        icon: "Scan",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
        brands: ["st-jude-oct"],
    },
];

export const brands: Brand[] = [
    {
        id: "abbott",
        name: "Abbott Healthcare Pvt Ltd",
        logo: "/partners/abbott.jpg",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        divisions: [
            {
                name: "Vascular Division",
                image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&q=80",
                products: [
                    { id: "abb-1", name: "Xience Coronary Stents", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&q=80" },
                    { id: "abb-2", name: "Coronary Balloon Trek/NC Trek", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&q=80" },
                    { id: "abb-3", name: "Coronary Balloon NC Trek Neo", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&q=80" },
                    { id: "abb-4", name: "Guide Wires (AllStar, CrossIT, BMW, Whisper, Pilot, Versaturn)", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                    { id: "abb-5", name: "Graftmaster", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&q=80" },
                    { id: "abb-6", name: "Indeflator", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "abb-7", name: "Y Connector", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "abb-8", name: "Proglide", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "abb-9", name: "Orbital", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                ],
            },
        ],
    },
    {
        id: "st-jude-pacemaker",
        name: "St. Jude Medical India Pvt Ltd (Pacemaker Division)",
        logo: "/partners/st-jude.jpg",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
        divisions: [
            {
                name: "CRM Division",
                image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80",
                products: [
                    { id: "sjp-1", name: "VVIR Pacemaker", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjp-2", name: "DDDR Pacemaker", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjp-3", name: "CTRP", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjp-4", name: "SICD - 1.5T MRI, 3T MRI, Remote Monitoring", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjp-5", name: "DICD - 1.5T MRI, 3T MRI, Remote Monitoring", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjp-6", name: "CRTD - 1.5T MRI, 3T MRI, Remote Monitoring", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjp-7", name: "Temporary Pacemaker", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjp-8", name: "TAVI", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjp-9", name: "Leadless Pacemaker", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                ],
            },
        ],
    },
    {
        id: "st-jude-oct",
        name: "St. Jude Medical India Pvt Ltd (OCT/FFR Division)",
        logo: "/partners/st-jude.jpg",
        image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80",
        divisions: [
            {
                name: "Imaging & Physiology",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
                products: [
                    { id: "sjo-1", name: "TPI Lead 6F/5F", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                    { id: "sjo-2", name: "TPI Lead Balloon Tip 5F", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                    { id: "sjo-3", name: "Pressure Wire", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                    { id: "sjo-4", name: "DF Optis Kit OCT Catheter", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80" },
                    { id: "sjo-5", name: "FFR Console", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80" },
                    { id: "sjo-6", name: "OCT Console", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80" },
                ],
            },
        ],
    },
    {
        id: "st-jude-structural",
        name: "St. Jude Medical India Pvt Ltd (Structural Heart)",
        logo: "/partners/st-jude.jpg",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
        divisions: [
            {
                name: "Structural Heart",
                image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80",
                products: [
                    { id: "sjs-1", name: "PDA", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjs-2", name: "PDA2", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjs-3", name: "ASD", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjs-4", name: "VSD", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjs-5", name: "Delivery System", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                    { id: "sjs-6", name: "Sizing Balloon", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80" },
                ],
            },
        ],
    },
    {
        id: "boston-scientific",
        name: "Boston Scientific (Peripheral Division)",
        logo: null,
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80",
        divisions: [
            {
                name: "Peripheral Vascular",
                image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&q=80",
                products: [
                    { id: "bs-1", name: "Carotid Wallstent", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&q=80" },
                    { id: "bs-2", name: "Peripheral Stent Self Expandable", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&q=80" },
                    { id: "bs-3", name: "Peripheral Stent Balloon Mounted", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&q=80" },
                    { id: "bs-4", name: "Pharmacomechanical Catheter Directed", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "bs-5", name: "Thrombectomy Catheter", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "bs-6", name: "PVA Particle", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "bs-7", name: "014 DC Peripheral Balloon", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&q=80" },
                    { id: "bs-8", name: "High Pressure NC Balloon", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&q=80" },
                    { id: "bs-9", name: "018 Wire Compatible SC Balloon", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&q=80" },
                    { id: "bs-10", name: "Drug Coated Balloon", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&q=80" },
                    { id: "bs-11", name: "Micro Catheter", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "bs-12", name: "Guide Catheter", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "bs-13", name: "Runway Support Catheter", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "bs-14", name: "Coils 018/035 Pushable/Interlock", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "bs-15", name: "014 Wire Compatible Peripheral 300cm", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                    { id: "bs-16", name: "018 Wire Compatible Peripheral 300cm", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                    { id: "bs-17", name: "Angioplasty Wire", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                    { id: "bs-18", name: "Thrombus Aspiration Device (AngioJet Console)", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80" },
                ],
            },
        ],
    },
    {
        id: "asahi",
        name: "ASAHI",
        logo: null,
        image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80",
        divisions: [
            {
                name: "Guidewires",
                image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=400&q=80",
                products: [
                    { id: "as-1", name: "Fielder XT, XTA, XTR", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                    { id: "as-2", name: "Sion Blue, Black", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                    { id: "as-3", name: "GAIA Next 3", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                    { id: "as-4", name: "Mirage 1.4, 1.5", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                    { id: "as-5", name: "Rinato", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                    { id: "as-6", name: "Conquest PRO 9/PRO12", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80" },
                ],
            },
        ],
    },
    {
        id: "teleflex",
        name: "Teleflex (Arrow)",
        logo: "/partners/teleflex.jpg",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
        divisions: [
            {
                name: "Interventional Access",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80",
                products: [
                    { id: "tf-1", name: "Guideliner V3 Chatter (Extension Catheter)", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "tf-2", name: "Supercross Micro Catheter", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "tf-3", name: "TurnPike (Torqueable MicroCatheter)", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "tf-4", name: "IABP Balloon", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&q=80" },
                    { id: "tf-5", name: "IABP Machine", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80" },
                ],
            },
        ],
    },
    {
        id: "cordis",
        name: "Cordis",
        logo: "/partners/cordis.jpg",
        image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
        divisions: [
            {
                name: "Vascular Division",
                image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&q=80",
                products: [
                    { id: "cr-1", name: "Guiding Catheter", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "cr-2", name: "Diagnostic Catheter", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "cr-3", name: "Femoral Sheath", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "cr-4", name: "Radial Sheath", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "cr-5", name: "Aperi Balloon", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&q=80" },
                    { id: "cr-6", name: "Selution SLR", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&q=80" },
                    { id: "cr-7", name: "Ambi Tig Catheter", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "cr-8", name: "Long Sheath", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                    { id: "cr-9", name: "Biopsy Forcep", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80" },
                ],
            },
        ],
    },
    {
        id: "spectrum",
        name: "Spectrum MedTech",
        logo: null,
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        divisions: [
            {
                name: "Accessories",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
                products: [
                    { id: "sp-1", name: "Indeflator", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80" },
                    { id: "sp-2", name: "Y Connector", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80" },
                    { id: "sp-3", name: "2Port, 3Port Manifold", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80" },
                    { id: "sp-4", name: "Puncture Needle", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80" },
                    { id: "sp-5", name: "High Pressure Monitor Line", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80" },
                    { id: "sp-6", name: "Xtention Line 100/150/200", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80" },
                ],
            },
        ],
    },
];