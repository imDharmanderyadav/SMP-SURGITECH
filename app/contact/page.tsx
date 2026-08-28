import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMap from "@/components/contact/ContactMap";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Contact Us | SMP Surgitech",
  description:
    "Get in touch with SMP Surgitech for cardiovascular medical device enquiries, orders, and partnerships. 24/7 support available.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactInfo />
      
      {/* Form + Image Section */}
      <section id="enquiry-form" className="section-padding bg-slate-50">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Form */}
            <ContactFormSection />
            
            {/* Right: Side Content */}
            <div className="space-y-8 lg:sticky lg:top-24">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                  alt="Medical team support"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              
              <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "We Receive Your Enquiry", desc: "Our team gets notified instantly" },
                    { step: "2", title: "Expert Consultation", desc: "Product specialist contacts you within 2 hours" },
                    { step: "3", title: "Quote & Delivery", desc: "Competitive pricing with fast delivery" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{item.title}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tax Info */}
              <div className="rounded-2xl bg-slate-900 p-6 text-white">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Business Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">PAN</span>
                    <span className="font-mono">AESFS4606J</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">GST</span>
                    <span className="font-mono">23AESFS4606J1ZP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">TAN</span>
                    <span className="font-mono">BPLS31333B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactMap />
      <ContactCTA />
    </div>
  );
}