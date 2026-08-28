import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function AboutStory() {
  const highlights = [
    "Over a Decade of Industry Experience",
    "Authorized Distributor of Global Brands",
    "Quality Products with Timely Supply",
    "Strong Network Across the Region",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=700&q=80"
                alt="Medical devices"
                width={600}
                height={500}
                className="rounded-2xl object-cover shadow-xl"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -top-4 -right-4 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 p-5 shadow-xl shadow-blue-700/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-xs text-blue-100 mt-1">Years of<br/>Excellence</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                About SMP Surgitech
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500" />
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              {companyInfo.longDescription}
            </p>

            <div className="space-y-4 pt-2">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                  <span className="text-base text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}