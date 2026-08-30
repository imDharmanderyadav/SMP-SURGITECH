import { Award, FileBadge, BadgeCheck, Trophy } from "lucide-react";

const certifications = [
  {
    icon: FileBadge,
    title: "ISO 13485 Certified",
    desc: "Medical Device Quality Management",
  },
  {
    icon: BadgeCheck,
    title: "Authorized Distributor",
    desc: "Abbott, Cordis, Teleflex & More",
  },
  {
    icon: Trophy,
    title: "10+ Years Excellence",
    desc: "Trusted Since 2014",
  },
  {
    icon: Award,
    title: "150+ Hospital Partners",
    desc: "Across Central India",
  },
];

export default function AwardsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Certifications & Recognition
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white border border-slate-100 p-6 text-center hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-500"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 text-white shadow-lg shadow-blue-700/20 group-hover:scale-110 transition-transform duration-300">
                <cert.icon className="h-8 w-8" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">{cert.title}</h3>
              <p className="text-sm text-slate-500">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}