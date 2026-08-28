// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRight, Activity, CircleDot, Route, GitBranch, Stethoscope } from "lucide-react";
// import { productCategories } from "@/data/products";
// import SectionHeader from "./SectionHeader";

// const iconMap: Record<string, React.ElementType> = {
//   Activity,
//   CircleDot,
//   Route,
//   GitBranch,
//   Stethoscope,
// };

// const categoryImages: Record<string, string> = {
//   stents: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&q=80",
//   balloons: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80",
//   catheters: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80",
//   guidewires: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=400&q=80",
//   interventional: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80",
// };

// export default function ProductCategories() {
//   return (
//     <section className="section-padding bg-slate-50">
//       <div className="container-custom mx-auto">
//         <SectionHeader
//           title="Our Product Categories"
//           subtitle="Providing a comprehensive range of cardiovascular and interventional products."
//         />

//         <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
//           {productCategories.map((cat) => {
//             const Icon = iconMap[cat.icon] || Activity;
//             return (
//               <Link
//                 key={cat.id}
//                 href="/products"
//                 className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-500"
//               >
//                 {/* Image */}
//                 <div className="relative h-40 overflow-hidden">
//                   <Image
//                     src={categoryImages[cat.id]}
//                     alt={cat.title}
//                     fill
//                     className="object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
//                   <div className="absolute bottom-3 left-3">
//                     <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm text-white">
//                       <Icon className="h-5 w-5" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-5">
//                   <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
//                     {cat.title}
//                   </h3>
//                   <p className="text-sm text-slate-500 leading-relaxed mb-4">
//                     {cat.description}
//                   </p>
//                   <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     View Details <ArrowRight className="h-3.5 w-3.5" />
//                   </span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         <div className="mt-12 text-center">
//           <Link
//             href="/products"
//             className="inline-flex items-center gap-2 rounded-xl border-2 border-blue-700 px-8 py-3.5 text-sm font-bold text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300"
//           >
//             View All Products
//             <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Activity, CircleDot, Route, GitBranch, Stethoscope, HeartPulse, Scan } from "lucide-react";
import { productCategories } from "@/data/products";
import SectionHeader from "./SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  CircleDot,
  Route,
  GitBranch,
  Stethoscope,
  HeartPulse,
  Scan,
};

export default function ProductCategories() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom mx-auto">
        <SectionHeader
          title="Our Product Categories"
          subtitle="Providing a comprehensive range of cardiovascular and interventional products."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Activity;
            return (
              <Link
                key={cat.id}
                href={`/products/${cat.id}`}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-slate-800">
                      {cat.brands.length} Brands
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Products <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-blue-700 px-8 py-3.5 text-sm font-bold text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}