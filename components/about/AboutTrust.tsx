import { Shield, Truck, Users, Headphones, HeartPulse, Award } from "lucide-react";
import { companyInfo } from "@/data/company";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Truck,
  Users,
  Headphones,
};

export default function AboutTrust() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Healthcare Professionals Trust Us?
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Shield,
              title: "Authentic Products",
              desc: "100% genuine & high-quality devices from authorized manufacturers.",
              color: "from-blue-600 to-blue-500",
            },
            {
              icon: Truck,
              title: "Reliable Supply Chain",
              desc: "Consistent availability when you need it. Timely delivery guaranteed.",
              color: "from-cyan-600 to-cyan-500",
            },
            {
              icon: Users,
              title: "Expert Support",
              desc: "Dedicated support for healthcare partners with technical guidance.",
              color: "from-indigo-600 to-indigo-500",
            },
            {
              icon: HeartPulse,
              title: "Patient-Centric Approach",
              desc: "Because every life matters. We prioritize patient outcomes above all.",
              color: "from-blue-700 to-blue-600",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-500"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg mb-5`}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}