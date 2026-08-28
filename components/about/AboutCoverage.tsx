import Image from "next/image";
import { MapPin, Warehouse, Building2, Thermometer } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function AboutCoverage() {
  const { coverage } = companyInfo;

  return (
    <section className="relative overflow-hidden section-padding bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=80"
          alt="India map"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container-custom relative mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Distribution Network
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Covering major states and districts across Central India with dedicated warehousing facilities.
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coverage Area */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                <MapPin className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Geographical Coverage</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-blue-300 mb-2">States</div>
                <div className="flex flex-wrap gap-2">
                  {coverage.states.map((state) => (
                    <span
                      key={state}
                      className="rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300"
                    >
                      {state}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-blue-300 mb-2">Key Districts</div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {coverage.districts.slice(0, 10).join(", ")} and more...
                </p>
              </div>
            </div>
          </div>

          {/* Warehousing */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                <Warehouse className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Warehousing</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-sm text-slate-400">No. of Warehouses</span>
                <span className="text-lg font-bold text-white">{coverage.warehouses}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-sm text-slate-400">Total Space</span>
                <span className="text-lg font-bold text-white">{coverage.warehouseSpace}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-slate-400">Refrigeration</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
                  <Thermometer className="h-3 w-3" />
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Hospitals */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20">
                <Building2 className="h-5 w-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Hospital Network</h3>
            </div>
            <div className="text-center py-6">
              <div className="text-5xl font-bold text-white mb-2">{coverage.hospitals}</div>
              <p className="text-sm text-slate-400">Hospitals covered directly across all operational states</p>
            </div>
            <div className="mt-4 rounded-xl bg-white/5 p-4">
              <p className="text-xs text-slate-400 text-center">
                Serving entire Madhya Pradesh, Chhattisgarh, Rajasthan & Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}