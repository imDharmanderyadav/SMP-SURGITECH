// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, ExternalLink } from "lucide-react";

// interface CategoryProductCardProps {
//   product: {
//     id: string;
//     name: string;
//     image?: string;
//     brandName: string;
//     brandLogo?: string | null;
//     divisionName: string;
//   };
// }

// export default function CategoryProductCard({ product }: CategoryProductCardProps) {
//   return (
//     <div className="group rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-500">
//       {/* Product Image */}
//       <div className="relative h-48 overflow-hidden bg-slate-100">
//         <Image
//           src={product.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80"}
//           alt={product.name}
//           fill
//           className="object-cover group-hover:scale-110 transition-transform duration-700"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        
//         {/* Brand Logo Badge */}
//         {product.brandLogo && (
//           <div className="absolute top-3 right-3 h-10 w-10 rounded-lg bg-white/90 backdrop-blur-sm p-1.5 shadow-lg">
//             <Image
//               src={product.brandLogo}
//               alt={product.brandName}
//               fill
//               className="object-contain p-0.5"
//             />
//           </div>
//         )}

//         {/* Division Tag */}
//         <div className="absolute bottom-3 left-3">
//           <span className="inline-flex items-center rounded-lg bg-blue-600/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-white">
//             {product.divisionName}
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <div className="text-xs font-medium text-blue-600 mb-1.5 uppercase tracking-wider">
//           {product.brandName}
//         </div>
//         <h3 className="text-base font-bold text-slate-900 leading-snug mb-4 line-clamp-2 group-hover:text-blue-700 transition-colors">
//           {product.name}
//         </h3>

//         <Link
//           href="/contact"
//           className="flex items-center justify-center gap-2 w-full rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-blue-700 hover:text-white transition-all duration-300"
//         >
//           <ExternalLink className="h-4 w-4" />
//           Enquire Now
//         </Link>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface CategoryProductCardProps {
  product: {
    id: string;
    name: string;
    image?: string;
    brandName: string;
    brandLogo?: string | null;
    divisionName: string;
  };
}

export default function CategoryProductCard({ product }: CategoryProductCardProps) {
  return (
    <div className="group rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-500 flex flex-col">
      {/* Product Image */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <Image
          src={product.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
        
        {/* Brand Logo Badge */}
        {product.brandLogo && (
          <div className="absolute top-3 right-3 h-12 w-12 rounded-xl bg-white/95 backdrop-blur-sm p-2 shadow-lg border border-slate-100">
            <Image
              src={product.brandLogo}
              alt={product.brandName}
              fill
              className="object-contain p-1"
            />
          </div>
        )}

        {/* Division Tag */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center rounded-lg bg-blue-600/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white">
            {product.divisionName}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs font-bold text-blue-600 mb-1.5 uppercase tracking-wider">
          {product.brandName}
        </div>
        <h3 className="text-base font-bold text-slate-900 leading-snug mb-4 line-clamp-2 group-hover:text-blue-700 transition-colors flex-1">
          {product.name}
        </h3>

        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 hover:shadow-blue-700/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          <ExternalLink className="h-4 w-4" />
          Enquire Now
        </Link>
      </div>
    </div>
  );
}