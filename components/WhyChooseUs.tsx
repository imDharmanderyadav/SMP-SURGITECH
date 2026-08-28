import { Shield, Truck, Users, Handshake, Headphones } from "lucide-react";
import { companyInfo } from "@/data/company";
import SectionHeader from "./SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Truck,
  Users,
  Handshake,
  Headphones,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <SectionHeader
          title="Why Choose SMP Surgitech?"
          subtitle="We are committed to empowering hospitals, clinics, and healthcare professionals."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {companyInfo.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Shield;
            return (
              <div
                key={i}
                className="group text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 text-white shadow-lg shadow-blue-700/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}