import { partners } from "@/data/company";
import SectionHeader from "./SectionHeader";

export default function PartnersSection() {
  return (
    <section className="bg-white section-padding border-y border-slate-100">
      <div className="container-custom mx-auto">
        <SectionHeader
          title="Authorized Dealer For"
          subtitle="Proudly associated with globally renowned brands for better patient outcomes."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center rounded-xl bg-slate-50 border border-slate-100 p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
            >
              <div className="h-12 flex items-center justify-center mb-3">
                <span className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {partner.name}
                </span>
              </div>
              <span className="text-xs font-medium text-slate-500 text-center">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}