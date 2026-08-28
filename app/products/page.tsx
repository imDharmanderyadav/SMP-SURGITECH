// "use client";

// import { useState, useMemo } from "react";
// import ProductHero from "@/components/products/ProductHero";
// import ProductStats from "@/components/products/ProductStats";
// import ProductSearch from "@/components/products/ProductSearch";
// import ProductCategoryNav from "@/components/products/ProductCategoryNav";
// import BrandCard from "@/components/products/BrandCard";
// import { brands } from "@/data/products";

// export default function ProductsPage() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Filter brands based on category and search
//   const filteredBrands = useMemo(() => {
//     let filtered = brands;

//     // Category filter logic - map category to relevant brands
//     if (activeCategory !== "all") {
//       const categoryBrandMap: Record<string, string[]> = {
//         stents: ["abbott"],
//         balloons: ["abbott", "cordis"],
//         catheters: ["abbott", "cordis", "boston-scientific", "teleflex"],
//         guidewires: ["abbott", "asahi", "teleflex"],
//         interventional: ["abbott", "cordis", "teleflex", "spectrum"],
//       };
//       const allowedBrands = categoryBrandMap[activeCategory] || [];
//       filtered = filtered.filter((b) => allowedBrands.includes(b.id));
//     }

//     // If searching, show all brands that have matching products
//     if (searchQuery) {
//       return filtered.filter((brand) =>
//         brand.divisions.some((division) =>
//           division.products.some((product) =>
//             product.name.toLowerCase().includes(searchQuery.toLowerCase())
//           )
//         )
//       );
//     }

//     return filtered;
//   }, [activeCategory, searchQuery]);

//   return (
//     <div className="flex flex-col">
//       <ProductHero />
//       <ProductStats />

//       {/* Search & Filter Section */}
//       <div className="bg-slate-50 py-8">
//         <div className="container-custom mx-auto px-4 space-y-6">
//           <ProductSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
//         </div>
//       </div>

//       <ProductCategoryNav
//         activeCategory={activeCategory}
//         onCategoryChange={setActiveCategory}
//       />

//       {/* Products Grid */}
//       <section className="section-padding bg-slate-50">
//         <div className="container-custom mx-auto">
//           {filteredBrands.length === 0 ? (
//             <div className="text-center py-16">
//               <div className="text-lg font-medium text-slate-500">
//                 No products found matching your criteria.
//               </div>
//               <button
//                 onClick={() => {
//                   setActiveCategory("all");
//                   setSearchQuery("");
//                 }}
//                 className="mt-4 text-sm font-semibold text-blue-700 hover:underline"
//               >
//                 Clear filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid lg:grid-cols-2 gap-8">
//               {filteredBrands.map((brand) => (
//                 <BrandCard key={brand.id} brand={brand} searchQuery={searchQuery} />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { useState, useMemo } from "react";
import ProductHero from "@/components/products/ProductHero";
import ProductStats from "@/components/products/ProductStats";
import ProductSearch from "@/components/products/ProductSearch";
import ProductCategoryNav from "@/components/products/ProductCategoryNav";
import BrandCard from "@/components/products/BrandCard";
import { brands } from "@/data/products";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBrands = useMemo(() => {
    if (!searchQuery) return brands;
    
    return brands.filter((brand) =>
      brand.divisions.some((division) =>
        division.products.some((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    );
  }, [searchQuery]);

  return (
    <div className="flex flex-col">
      <ProductHero />
      <ProductStats />

      <div className="bg-slate-50 py-8">
        <div className="container-custom mx-auto px-4">
          <ProductSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        </div>
      </div>

      <ProductCategoryNav />

      <section className="section-padding bg-slate-50">
        <div className="container-custom mx-auto">
          {filteredBrands.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-lg font-medium text-slate-500">
                No products found matching your criteria.
              </div>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-sm font-semibold text-blue-700 hover:underline"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredBrands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} searchQuery={searchQuery} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}