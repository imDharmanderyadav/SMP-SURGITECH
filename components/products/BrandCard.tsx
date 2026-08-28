// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDown, ChevronUp, Package, ArrowRight } from "lucide-react";
// import { Brand } from "@/data/products";

// interface BrandCardProps {
//   brand: Brand;
//   searchQuery: string;
// }

// export default function BrandCard({ brand, searchQuery }: BrandCardProps) {
//   const [expandedDivision, setExpandedDivision] = useState<string | null>(null);

//   // Filter products based on search
//   const filteredDivisions = brand.divisions.map((division) => ({
//     ...division,
//     products: division.products.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     ),
//   })).filter((division) => division.products.length > 0);

//   if (searchQuery && filteredDivisions.length === 0) return null;

//   const divisionsToShow = searchQuery ? filteredDivisions : brand.divisions;

//   return (
//     <div className="rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 overflow-hidden">
//       {/* Brand Header */}
//       <div className="relative h-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:2rem_2rem]" />
//         <div className="relative flex items-center justify-between h-full px-6">
//           <div>
//             <h3 className="text-xl font-bold text-white">{brand.name}</h3>
//             <div className="flex items-center gap-2 mt-2">
//               <Package className="h-4 w-4 text-blue-400" />
//               <span className="text-sm text-slate-300">
//                 {divisionsToShow.reduce((acc, d) => acc + d.products.length, 0)} Products
//               </span>
//             </div>
//           </div>
//           {/* Brand Logo Placeholder */}
//           <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
//             <span className="text-lg font-bold text-white">{brand.name.charAt(0)}</span>
//           </div>
//         </div>
//       </div>

//       {/* Divisions & Products */}
//       <div className="p-6 space-y-4">
//         {divisionsToShow.map((division) => (
//           <div key={division.name} className="border border-slate-100 rounded-xl overflow-hidden">
//             {/* Division Header */}
//             <button
//               onClick={() =>
//                 setExpandedDivision(
//                   expandedDivision === division.name ? null : division.name
//                 )
//               }
//               className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors"
//             >
//               <span className="text-sm font-bold text-slate-800">{division.name}</span>
//               {expandedDivision === division.name ? (
//                 <ChevronUp className="h-4 w-4 text-slate-500" />
//               ) : (
//                 <ChevronDown className="h-4 w-4 text-slate-500" />
//               )}
//             </button>

//             {/* Products List */}
//             {(expandedDivision === division.name || searchQuery) && (
//               <div className="divide-y divide-slate-50">
//                 {division.products.map((product) => (
//                   <div
//                     key={product.id}
//                     className="flex items-center justify-between px-4 py-3 hover:bg-blue-50/50 transition-colors"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="h-2 w-2 rounded-full bg-blue-500" />
//                       <span className="text-sm text-slate-700">{product.name}</span>
//                     </div>
//                     <Link
//                       href="/contact"
//                       className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"
//                     >
//                       Enquire <ArrowRight className="h-3 w-3" />
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}

//         {/* Enquiry CTA */}
//         <Link
//           href="/contact"
//           className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 hover:shadow-blue-700/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 mt-4"
//         >
//           Enquire About {brand.name} Products
//           <ArrowRight className="h-4 w-4" />
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp, Package, ArrowRight, ExternalLink } from "lucide-react";
import { Brand } from "@/data/products";

interface BrandCardProps {
  brand: Brand;
  searchQuery: string;
}

export default function BrandCard({ brand, searchQuery }: BrandCardProps) {
  const [expandedDivision, setExpandedDivision] = useState<string | null>(null);

  const filteredDivisions = brand.divisions.map((division) => ({
    ...division,
    products: division.products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((division) => division.products.length > 0);

  if (searchQuery && filteredDivisions.length === 0) return null;

  const divisionsToShow = searchQuery ? filteredDivisions : brand.divisions;

  return (
    <div className="rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 overflow-hidden">
      {/* Brand Header with Image */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={brand.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"}
          alt={brand.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        
        <div className="relative flex items-center justify-between h-full px-6">
          <div className="flex items-center gap-4">
            {/* Brand Logo */}
            {brand.logo && (
              <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-white">{brand.name}</h3>
              <div className="flex items-center gap-2 mt-1.5">
                <Package className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-slate-300">
                  {divisionsToShow.reduce((acc, d) => acc + d.products.length, 0)} Products
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divisions & Products */}
      <div className="p-6 space-y-4">
        {divisionsToShow.map((division) => (
          <div key={division.name} className="border border-slate-100 rounded-xl overflow-hidden">
            {/* Division Header with Image */}
            <button
              onClick={() =>
                setExpandedDivision(
                  expandedDivision === division.name ? null : division.name
                )
              }
              className="w-full relative overflow-hidden"
            >
              <div className="relative h-16">
                {division.image && (
                  <Image
                    src={division.image}
                    alt={division.name}
                    fill
                    className="object-cover opacity-30"
                  />
                )}
                <div className="absolute inset-0 bg-slate-50/90" />
                <div className="relative flex items-center justify-between px-4 h-16">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-1 rounded-full bg-blue-500" />
                    <span className="text-sm font-bold text-slate-800">{division.name}</span>
                  </div>
                  {expandedDivision === division.name ? (
                    <ChevronUp className="h-4 w-4 text-slate-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-500" />
                  )}
                </div>
              </div>
            </button>

            {/* Products Grid with Images */}
            {(expandedDivision === division.name || searchQuery) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50/50">
                {division.products.map((product) => (
                  <div
                    key={product.id}
                    className="group flex items-center gap-3 rounded-xl bg-white border border-slate-100 p-3 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                  >
                    {/* Product Thumbnail */}
                    <div className="relative h-14 w-14 shrink-0 rounded-lg overflow-hidden bg-slate-100">
                      <Image
                        src={product.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=100&q=80"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-slate-700 line-clamp-2 leading-snug">
                        {product.name}
                      </span>
                    </div>
                    <Link
                      href="/contact"
                      className="shrink-0 flex items-center gap-1 rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-700 hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Enquire
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Enquiry CTA */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 hover:shadow-blue-700/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 mt-4"
        >
          Enquire About {brand.name} Products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}