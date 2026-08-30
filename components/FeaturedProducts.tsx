import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { brands } from "@/data/products";

// Top products from each brand
const featuredProducts = [
  { id: "abb-1", name: "Xience Coronary Stents", brand: "Abbott", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&q=80" },
  { id: "sjp-1", name: "VVIR Pacemaker", brand: "St. Jude Medical", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80" },
  { id: "cr-1", name: "Guiding Catheter", brand: "Cordis", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80" },
  { id: "as-1", name: "Fielder XT Guidewire", brand: "ASAHI", image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=400&q=80" },
];

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="container-custom mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-2 text-slate-400">
              Most requested devices by leading hospitals
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center rounded-lg bg-blue-600 px-2.5 py-1 text-xs font-bold text-white">
                    {product.brand}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {product.name}
                </h3>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}