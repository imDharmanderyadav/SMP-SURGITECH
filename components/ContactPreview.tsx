import { Phone, Mail, MapPin } from "lucide-react";
import { companyInfo } from "@/data/company";
import ContactForm from "./ContactForm";

export default function ContactPreview() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Get In Touch
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500" />
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                We are here to help you. Reach out to us for any enquiries,
                orders, or partnership opportunities.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href={`tel:${companyInfo.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">Phone</div>
                  <div className="text-base font-semibold text-slate-900">
                    {companyInfo.contact.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">Email</div>
                  <div className="text-base font-semibold text-slate-900">
                    {companyInfo.contact.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">Address</div>
                  <div className="text-base font-semibold text-slate-900">
                    {companyInfo.address.primary}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}