// import Image from "next/image";
// import { HeartPulse, Stethoscope } from "lucide-react";

// export default function ProductHero() {
//   return (
//     <section className="relative overflow-hidden bg-slate-900">
//       <div className="absolute inset-0">
//         <Image
//           src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80"
//           alt="Medical devices background"
//           fill
//           className="object-cover opacity-20"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />
//       </div>

//       <div className="container-custom relative mx-auto section-padding">
//         <div className="max-w-3xl">
//           <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-6">
//             <HeartPulse className="h-4 w-4" />
//             Advanced Interventional Solutions
//           </div>
//           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
//             Our{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
//               Product Range
//             </span>
//           </h1>
//           <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
//             Comprehensive range of cardiovascular and interventional products 
//             from globally trusted brands. Every device meets the highest standards 
//             of quality and safety.
//           </p>
//           <div className="mt-8 flex flex-wrap gap-4">
//             <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2">
//               <Stethoscope className="h-5 w-5 text-blue-400" />
//               <span className="text-sm font-medium text-white">9 Global Brands</span>
//             </div>
//             <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2">
//               <span className="text-sm font-medium text-white">50+ Product Lines</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { HeartPulse, Stethoscope, Package } from "lucide-react";
import { brands } from "@/data/products";

export default function ProductHero() {
  const totalProducts = brands.reduce(
    (acc, brand) => acc + brand.divisions.reduce((dAcc, div) => dAcc + div.products.length, 0),
    0
  );

  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1920&q=80"
          alt="Medical devices background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />
      </div>

      <div className="container-custom relative mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
              <HeartPulse className="h-4 w-4" />
              Advanced Interventional Solutions
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Product Range
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Comprehensive range of cardiovascular and interventional products 
              from globally trusted brands. Every device meets the highest standards 
              of quality and safety.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2">
                <Stethoscope className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-white">{brands.length} Global Brands</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2">
                <Package className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-white">{totalProducts}+ Products</span>
              </div>
            </div>
          </div>

          {/* Right Side Product Collage */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            {[
              "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&q=80",
              "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&q=80",
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&q=80",
              "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=300&q=80",
            ].map((src, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden ${
                  i === 0 || i === 3 ? "h-40" : "h-48"
                }`}
              >
                <Image
                  src={src}
                  alt="Medical product"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}