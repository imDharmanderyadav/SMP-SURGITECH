import { brands } from "@/data/products";

export default function ProductStats() {
  const totalProducts = brands.reduce(
    (acc, brand) => acc + brand.divisions.reduce((dAcc, div) => dAcc + div.products.length, 0),
    0
  );
  const totalBrands = brands.length;
  const totalDivisions = brands.reduce((acc, b) => acc + b.divisions.length, 0);

  const stats = [
    { label: "Global Brands", value: totalBrands },
    { label: "Product Lines", value: totalDivisions },
    { label: "Total Products", value: totalProducts },
  ];

  return (
    <section className="bg-white border-y border-slate-100 py-8">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-700">{stat.value}+</div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}