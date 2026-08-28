import Image from "next/image";
import { HeartPulse, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
          alt="Hospital background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />
      </div>

      <div className="container-custom relative mx-auto section-padding">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-6">
            <HeartPulse className="h-4 w-4" />
            Contact Us
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
            Have a query or need to place an order? Our team is here to help you 
            with all your cardiovascular device requirements. Reach out to us anytime.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium text-white">Gurugram & Bhopal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}