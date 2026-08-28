import Link from "next/link";
import { ArrowRight, Phone, Clock } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container-custom relative mx-auto section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 mb-6">
            <Clock className="h-4 w-4" />
            24/7 Support Available
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need Urgent Assistance?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Our emergency support team is available round the clock for critical 
            device requirements and technical assistance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-900 shadow-lg hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              Call Now: {companyInfo.contact.phone}
            </a>
            <Link
              href="#enquiry-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-all duration-300"
            >
              Send Enquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}