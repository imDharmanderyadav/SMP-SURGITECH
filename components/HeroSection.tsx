import Link from "next/link";
import { ArrowRight, Shield, Clock, Award, HeartPulse } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="container-custom relative mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
              <HeartPulse className="h-4 w-4" />
              Trusted Partner in Cardiovascular Excellence
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Advancing{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Cardiovascular
              </span>{" "}
              Care
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              {companyInfo.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-all duration-300"
              >
                About Us
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { icon: Award, label: "10+ Years", sub: "Experience" },
                { icon: Shield, label: "Authorized", sub: "Global Dealer" },
                { icon: HeartPulse, label: "Quality", sub: "You Can Trust" },
                { icon: Clock, label: "Timely", sub: "Supply & Support" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl bg-slate-800/50 border border-slate-700/50 p-3">
                  <item.icon className="h-5 w-5 text-blue-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">{item.label}</div>
                    <div className="text-[10px] text-slate-400">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-1">
              <div className="rounded-xl bg-slate-900/80 backdrop-blur-sm p-8 border border-slate-700/50">
                {/* Heartbeat Animation */}
                <svg
                  viewBox="0 0 400 120"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 60 H100 L120 20 L150 100 L180 40 L200 80 L220 60 H400"
                    stroke="url(#pulse-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="pulse-gradient" x1="0" y1="0" x2="400" y2="0">
                      <stop stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  {companyInfo.stats.map((stat, i) => (
                    <div key={i} className="rounded-lg bg-slate-800/50 p-4 border border-slate-700/30">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-2xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Authorized Dealer</div>
                  <div className="text-xs text-slate-500">Abbott, Cordis, Teleflex</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}