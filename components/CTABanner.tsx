import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="container-custom relative mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Partnering for Better Healthcare
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              We are committed to empowering hospitals, clinics, and healthcare
              professionals with innovative products and dependable service to
              create a healthier tomorrow.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-900 shadow-lg hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
                <HeartPulse className="h-20 w-20 text-blue-400 mx-auto" />
                <div className="mt-6 text-center">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-sm text-slate-400 mt-1">
                    Hospitals Covered Directly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}