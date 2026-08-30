import { Shield, Truck, Clock, Award, Headphones, Package } from "lucide-react";

const badges = [
  { icon: Shield, label: "Genuine Products", sub: "100% Authentic" },
  { icon: Truck, label: "Fast Delivery", sub: "Same Day Dispatch" },
  { icon: Clock, label: "24/7 Support", sub: "Always Available" },
  { icon: Award, label: "Authorized Dealer", sub: "Global Brands" },
  { icon: Headphones, label: "Expert Guidance", sub: "Technical Support" },
  { icon: Package, label: "Bulk Orders", sub: "Wholesale Pricing" },
];

export default function TrustBadges() {
  return (
    <section className="py-8 bg-white border-y border-slate-100">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 mb-3">
                <badge.icon className="h-6 w-6" />
              </div>
              <div className="text-sm font-bold text-slate-900">{badge.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{badge.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}