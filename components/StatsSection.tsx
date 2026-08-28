import { companyInfo } from "@/data/company";

export default function StatsSection() {
  return (
    <section className="relative -mt-8 z-10 px-4">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
          {companyInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center px-4 py-3 border-r border-slate-100 last:border-0 even:border-r-0 lg:even:border-r"
            >
              <div className="text-3xl font-bold text-blue-700">{stat.value}</div>
              <div className="text-sm font-medium text-slate-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}