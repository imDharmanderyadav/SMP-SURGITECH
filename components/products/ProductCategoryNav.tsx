// "use client";

// import { Activity, CircleDot, Route, GitBranch, Stethoscope } from "lucide-react";

// const categories = [
//   { id: "all", label: "All Products", icon: Stethoscope },
//   { id: "stents", label: "Stents", icon: Activity },
//   { id: "balloons", label: "Balloons", icon: CircleDot },
//   { id: "catheters", label: "Catheters", icon: Route },
//   { id: "guidewires", label: "Guidewires", icon: GitBranch },
//   { id: "interventional", label: "Interventional", icon: Stethoscope },
// ];

// interface ProductCategoryNavProps {
//   activeCategory: string;
//   onCategoryChange: (category: string) => void;
// }

// export default function ProductCategoryNav({ activeCategory, onCategoryChange }: ProductCategoryNavProps) {
//   return (
//     <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-xl border-y border-slate-200/80 py-4">
//       <div className="container-custom mx-auto px-4">
//         <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
//           {categories.map((cat) => {
//             const Icon = cat.icon;
//             const isActive = activeCategory === cat.id;
//             return (
//               <button
//                 key={cat.id}
//                 onClick={() => onCategoryChange(cat.id)}
//                 className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
//                   isActive
//                     ? "bg-blue-700 text-white shadow-lg shadow-blue-700/25"
//                     : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
//                 }`}
//               >
//                 <Icon className="h-4 w-4" />
//                 {cat.label}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, CircleDot, Route, GitBranch, Stethoscope, HeartPulse, Scan, LayoutGrid } from "lucide-react";
import { productCategories } from "@/data/products";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  CircleDot,
  Route,
  GitBranch,
  Stethoscope,
  HeartPulse,
  Scan,
};

export default function ProductCategoryNav() {
  const pathname = usePathname();
  const isAllProducts = pathname === "/products";

  return (
    <div className="sticky top-18 z-30 bg-white/80 backdrop-blur-xl border-y border-slate-200/80 py-4">
      <div className="container-custom mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {/* All Products */}
          <Link
            href="/products"
            className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-2 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isAllProducts
                ? "bg-blue-700 text-white shadow-lg shadow-blue-700/25"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            }`}
          >
            <LayoutGrid className="h-4 w-4" />
            All Products
          </Link>

          {/* Categories */}
          {productCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Activity;
            const isActive = pathname === `/products/${cat.id}`;
            return (
              <Link
                key={cat.id}
                href={`/products/${cat.id}`}
                className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-blue-700 text-white shadow-lg shadow-blue-700/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}