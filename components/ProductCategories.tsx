import Link from "next/link";
import { ArrowRight, Activity, CircleDot, Route, GitBranch, Stethoscope } from "lucide-react";
import { productCategories } from "@/data/products";
import SectionHeader from "./SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  CircleDot,
  Route,
  GitBranch,
  Stethoscope,
};

export default function ProductCategories() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom mx-auto">
        <SectionHeader
          title="Our Product Categories"
          subtitle="Providing a comprehensive range of cardiovascular and interventional products."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {productCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Activity;
            return (
              <Link
                key={cat.id}
                href="/products"
                className="group relative overflow-hidden rounded-2xl bg-white p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-500"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Details <ArrowRight className="h-3.5 w-3.5" />
                </span>
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