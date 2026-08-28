import { Phone, Mail, MapPin, Clock, Building2 } from "lucide-react";
import { companyInfo } from "@/data/company";

type ContactLine = {
  label: string;
  value: string;
  href?: string;
};

type ContactCard = {
  icon: typeof Phone;
  title: string;
  lines: ContactLine[];
  color: string;
};

const contactCards: ContactCard[] = [
  {
    icon: Phone,
    title: "Phone",
    lines: [
      { label: "Primary", value: companyInfo.contact.phone, href: `tel:${companyInfo.contact.phone.replace(/\s/g, "")}` },
      { label: "Secondary", value: companyInfo.contact.phone2, href: `tel:${companyInfo.contact.phone2}` },
      { label: "Mobile", value: companyInfo.contact.mobile, href: `tel:${companyInfo.contact.mobile.replace(/\s/g, "")}` },
    ],
    color: "from-blue-600 to-blue-500",
  },
  {
    icon: Mail,
    title: "Email",
    lines: [
      { label: "Primary", value: companyInfo.contact.email, href: `mailto:${companyInfo.contact.email}` },
      { label: "Secondary", value: companyInfo.contact.email2, href: `mailto:${companyInfo.contact.email2}` },
    ],
    color: "from-cyan-600 to-cyan-500",
  },
  {
    icon: MapPin,
    title: "Address",
    lines: [
      { label: "Head Office", value: companyInfo.address.primary },
      { label: "Branch Office", value: companyInfo.address.secondary },
    ],
    color: "from-indigo-600 to-indigo-500",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [
      { label: "Support", value: "24/7 Customer Support" },
      { label: "Office", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
    ],
    color: "from-blue-700 to-blue-600",
  },
];

export default function ContactInfo() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Contact Information
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Multiple ways to reach us. Choose what works best for you.
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-slate-50 border border-slate-100 p-6 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-500"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg mb-5`}>
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{card.title}</h3>
              <div className="space-y-3">
                {card.lines.map((line, j) => (
                  <div key={j}>
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      {line.label}
                    </div>
                    {line.href ? (
                      <a
                        href={line.href}
                        className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
                      >
                        {line.value}
                      </a>
                    ) : (
                      <div className="text-sm font-semibold text-slate-700">{line.value}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}