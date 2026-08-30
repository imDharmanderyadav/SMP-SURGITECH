// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, ArrowLeft, Package, HeartPulse } from "lucide-react";
// import { productCategories, brands } from "@/data/products";
// import CategoryProductCard from "@/components/products/CategoryProductCard";
// // import CategoryProductCard from "@/components/products/CategoryProductCard";

// interface CategoryPageProps {
//   params: Promise<{ category: string }>;
// }

// export async function generateStaticParams() {
//   return productCategories.map((cat) => ({
//     category: cat.id,
//   }));
// }

// export async function generateMetadata({ params }: CategoryPageProps) {
//   const { category } = await params;
//   const cat = productCategories.find((c) => c.id === category);
//   if (!cat) return { title: "Not Found" };
  
//   return {
//     title: `${cat.title} | SMP Surgitech Products`,
//     description: cat.description,
//   };
// }

// export default async function CategoryPage({ params }: CategoryPageProps) {
//   const { category } = await params;
//   const cat = productCategories.find((c) => c.id === category);
  
//   if (!cat) {
//     notFound();
//   }

//   // Filter brands for this category
//   const categoryBrands = brands.filter((b) => cat.brands.includes(b.id));

//   // Flatten all products from these brands
//   const allProducts = categoryBrands.flatMap((brand) =>
//     brand.divisions.flatMap((division) =>
//       division.products.map((product) => ({
//         ...product,
//         brandName: brand.name,
//         brandLogo: brand.logo,
//         divisionName: division.name,
//       }))
//     )
//   );

//   return (
//     <div className="flex flex-col">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-slate-900">
//         <div className="absolute inset-0">
//           <Image
//             src={cat.image}
//             alt={cat.title}
//             fill
//             className="object-cover opacity-25"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
//         </div>

//         <div className="container-custom relative mx-auto section-padding">
//           <Link
//             href="/products"
//             className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors mb-6"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back to All Products
//           </Link>

//           <div className="max-w-3xl">
//             <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-6">
//               <HeartPulse className="h-4 w-4" />
//               Product Category
//             </div>
//             <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
//               {cat.title}
//             </h1>
//             <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
//               {cat.description}
//             </p>
//             <div className="mt-8 flex flex-wrap gap-4">
//               <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2">
//                 <Package className="h-5 w-5 text-blue-400" />
//                 <span className="text-sm font-medium text-white">
//                   {allProducts.length} Products
//                 </span>
//               </div>
//               <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2">
//                 <span className="text-sm font-medium text-white">
//                   {categoryBrands.length} Brands
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="section-padding bg-slate-50">
//         <div className="container-custom mx-auto">
//           {allProducts.length === 0 ? (
//             <div className="text-center py-16">
//               <div className="text-lg font-medium text-slate-500">
//                 No products found in this category.
//               </div>
//             </div>
//           ) : (
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {allProducts.map((product) => (
//                 <CategoryProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Other Categories */}
//       <section className="section-padding bg-white border-t border-slate-100">
//         <div className="container-custom mx-auto">
//           <h2 className="text-2xl font-bold text-slate-900 mb-8">
//             Explore Other Categories
//           </h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {productCategories
//               .filter((c) => c.id !== category)
//               .slice(0, 4)
//               .map((otherCat) => (
//                 <Link
//                   key={otherCat.id}
//                   href={`/products/${otherCat.id}`}
//                   className="group relative overflow-hidden rounded-xl h-32"
//                 >
//                   <Image
//                     src={otherCat.image}
//                     alt={otherCat.title}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20" />
//                   <div className="absolute bottom-0 left-0 right-0 p-4">
//                     <div className="text-sm font-bold text-white">{otherCat.title}</div>
//                     <div className="text-xs text-slate-300 mt-0.5">
//                       {otherCat.brands.length} Brands
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, ArrowLeft, Package, HeartPulse, Search, X, SlidersHorizontal } from "lucide-react";
import { productCategories, brands } from "@/data/products";
import CategoryProductCard from "@/components/products/CategoryProductCard";
import TrustBadges from "@/components/TrustBadges";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  
  const cat = productCategories.find((c) => c.id === category);
  
  // Search and filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // Redirect if category not found
  if (!cat) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-slate-900">Category Not Found</h1>
        <Link
          href="/products"
          className="mt-4 inline-flex items-center gap-2 text-blue-700 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Products
        </Link>
      </div>
    );
  }

  // Filter brands for this category
  const categoryBrands = brands.filter((b) => cat.brands.includes(b.id));
  const brandOptions = categoryBrands.map((b) => ({ id: b.id, name: b.name }));

  // Flatten all products from these brands
  const allProducts = useMemo(() => {
    return categoryBrands.flatMap((brand) =>
      brand.divisions.flatMap((division) =>
        division.products.map((product) => ({
          ...product,
          brandName: brand.name,
          brandLogo: brand.logo,
          brandId: brand.id,
          divisionName: division.name,
        }))
      )
    );
  }, [categoryBrands]);

  // Filter products based on search and brand
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesBrand =
        selectedBrand === "all" || product.brandId === selectedBrand;
      return matchesSearch && matchesBrand;
    });
  }, [allProducts, searchQuery, selectedBrand]);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedBrand("all");
  };

  const hasActiveFilters = searchQuery || selectedBrand !== "all";

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src={cat.image}
            alt={cat.title}
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
        </div>

        <div className="container-custom relative mx-auto section-padding">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Products
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-6">
              <HeartPulse className="h-4 w-4" />
              Product Category
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              {cat.title}
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
              {cat.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2">
                <Package className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-white">
                  {filteredProducts.length} of {allProducts.length} Products
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2">
                <span className="text-sm font-medium text-white">
                  {categoryBrands.length} Brands
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <div className="sticky top-18 z-30 bg-white/80 backdrop-blur-xl border-y border-slate-200/80 py-4">
        <div className="container-custom mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder={`Search ${cat.title.toLowerCase()}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-10 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                showFilters || selectedBrand !== "all"
                  ? "bg-blue-700 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {selectedBrand !== "all" && (
                <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">
                  1
                </span>
              )}
            </button>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all"
              >
                <X className="h-4 w-4" />
                Clear
              </button>
            )}
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="text-sm font-semibold text-slate-700 mb-3">Filter by Brand</div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedBrand("all")}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    selectedBrand === "all"
                      ? "bg-blue-700 text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300"
                  }`}
                >
                  All Brands
                </button>
                {brandOptions.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => setSelectedBrand(brand.id)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                      selectedBrand === brand.id
                        ? "bg-blue-700 text-white shadow-md"
                        : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300"
                    }`}
                  >
                    {brand.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Filter Tags */}
          {hasActiveFilters && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-slate-500">Active:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  Search: {searchQuery}
                  <button onClick={() => setSearchQuery("")}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedBrand !== "all" && (
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  Brand: {brandOptions.find((b) => b.id === selectedBrand)?.name}
                  <button onClick={() => setSelectedBrand("all")}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <Package className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <div className="text-lg font-medium text-slate-500">
                No products found matching your criteria.
              </div>
              <button
                onClick={clearFilters}
                className="mt-4 text-sm font-semibold text-blue-700 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <CategoryProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="section-padding bg-white border-t border-slate-100">
        <div className="container-custom mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Explore Other Categories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productCategories
              .filter((c) => c.id !== category)
              .slice(0, 4)
              .map((otherCat) => (
                <Link
                  key={otherCat.id}
                  href={`/products/${otherCat.id}`}
                  className="group relative overflow-hidden rounded-xl h-32"
                >
                  <Image
                    src={otherCat.image}
                    alt={otherCat.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-sm font-bold text-white">{otherCat.title}</div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      {otherCat.brands.length} Brands
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <TrustBadges />  
    </div>
  );
}