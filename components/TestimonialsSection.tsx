import Image from "next/image";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Chief Cardiologist",
    hospital: "Apollo Hospital, Bhopal",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80",
    quote: "SMP Surgitech has been our trusted partner for 5+ years. Their timely delivery and genuine products have never let us down during critical procedures.",
    rating: 5,
  },
  {
    name: "Dr. Priya Sharma",
    role: "Interventional Cardiologist",
    hospital: "Fortis Hospital, Gurugram",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&q=80",
    quote: "The quality of Abbott stents and their 24/7 support team makes them irreplaceable. Highly recommended for every cath lab.",
    rating: 5,
  },
  {
    name: "Dr. Amit Singh",
    role: "HOD Cardiology",
    hospital: "Max Hospital, Raipur",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&q=80",
    quote: "From pacemakers to guidewires, their inventory is always stocked. The team understands urgency like no one else.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Trusted by Leading Cardiologists
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Hear from healthcare professionals who rely on SMP Surgitech every day.
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-slate-50 border border-slate-100 p-8 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-500"
            >
              <Quote className="h-10 w-10 text-blue-200 mb-4" />
              <p className="text-slate-600 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                  <div className="text-xs text-blue-600 font-medium">{t.hospital}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}