import Image from "next/image";
import { HeartPulse, Award, Shield } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
          alt="Hospital interior"
          fill
          className="object-cover opacity90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
      </div>

      <div className="container-custom relative mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
              <HeartPulse className="h-4 w-4" />
              About SMP Surgitech
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-[1.1]">
              Committed to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Better Healthcare
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              With over 10 years of experience in the cardiovascular segment, 
              SMP Surgitech has built a reputation for reliability, integrity, 
              and service excellence.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2">
                <Award className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-white">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-white">Authorized Dealer</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=250&q=80"
                alt="Medical professional"
                width={600}
                height={250}
                className="rounded-2xl object-cover shadow-2xl shadow-blue-900/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-2xl" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-5 shadow-2xl border border-slate-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">500+</div>
                <div className="text-xs text-slate-500 mt-1">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}